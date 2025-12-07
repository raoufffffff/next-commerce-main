"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Play,
    Search,
    BookOpen,
    Settings,
    ShoppingBag,
    BarChart,
    Truck,
    Palette,
} from "lucide-react";

const TutorialVideos = () => {
    const t = useTranslations("TutorialVideos");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Video Data Structure
    // Titles are pulled via ID from translations
    const videos = [
        {
            id: 1,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20nect%20comerce.mp4?alt=media&token=309d97ca-e324-42d3-8c61-2648e44dc834",
            category: "setup",
            icon: <BookOpen size={20} className="text-purple-600" />
        },
        {
            id: 2,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%B9%D9%84%D8%A7%D9%85%D8%AA%D9%83%D9%85%20%D8%A5%D9%84%D9%89%20%D9%85%D9%86%D8%B5%D8%A9%20%20next%20comerce.mp4?alt=media&token=411c4c73-cc0f-40c8-bbdf-8fdbbb5a1a7d",
            category: "design",
            icon: <Palette size={20} className="text-pink-600" />
        },
        {
            id: 5,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%AA%D8%B9%D8%AF%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9%20%D8%B9%D9%84%D9%89%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=b47fa1ad-5eba-47bf-a37b-4560615f0331",
            category: "design",
            icon: <Palette size={20} className="text-pink-600" />
        },
        {
            id: 7,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A5%D8%B8%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%81%D8%A6%D8%A7%D8%AA%20%D8%A7%D9%84%D9%89%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=86b3723e-7829-48be-8904-f60cf750aae2",
            category: "products",
            icon: <ShoppingBag size={20} className="text-teal-600" />
        },
        {
            id: 6,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D9%85%D9%86%D8%AA%D8%AC%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=c588ea6d-ec59-42b4-8d7e-72100652d418",
            category: "products",
            icon: <ShoppingBag size={20} className="text-teal-600" />
        },
        {
            id: 3,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%AA%D8%B9%D8%AF%D9%8A%D9%84%20%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84%20next%20comerce.mp4?alt=media&token=9d932c1b-8284-48c6-8d8d-cadad861694f",
            category: "management",
            icon: <Truck size={20} className="text-orange-600" />
        },
        {
            id: 4,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%AA%D8%A3%D9%83%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%D9%8A%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=1e03cbc7-3d5c-4c80-8ae5-8f6ce26ce449",
            category: "management",
            icon: <Settings size={20} className="text-blue-600" />
        },
        {
            id: 8,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20facebook%20pixel%20%D9%84%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=3bac7bd5-db6e-4a44-842d-0342b18acaa8",
            category: "marketing",
            icon: <BarChart size={20} className="text-blue-700" />
        },
        {
            id: 9,
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D8%AA%D9%8A%D9%83%D8%AA%D9%88%D9%83%20pixel%20%D9%84%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=29fe7f6e-d318-42fa-a3b0-b3de7b0a1ca4",
            category: "marketing",
            icon: <BarChart size={20} className="text-black" />
        }
    ];

    const categories = [
        { id: "all", label: t('categories.all') },
        { id: "setup", label: t('categories.setup') },
        { id: "design", label: t('categories.design') },
        { id: "products", label: t('categories.products') },
        { id: "management", label: t('categories.management') },
        { id: "marketing", label: t('categories.marketing') },
    ];

    // Prepare translated videos list
    const translatedVideos = videos.map(video => ({
        ...video,
        title: t(`videoTitles.${video.id}`)
    }));

    // Filter Logic
    const filteredVideos = translatedVideos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "all" || video.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className='mt-24'>
            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-20">

                {/* Search Input */}
                <div className="max-w-xl mx-auto relative">
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-4 pr-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-purple-500 transition-all shadow-xl"
                    />
                    {/* Note: In RTL 'right-4' might look weird for an icon, usually icons flip automatically or need 'ltr:right-4 rtl:left-4' logic, but keeping as is for simplicity unless requested */}
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 rtl:left-4 rtl:right-auto" size={20} />
                </div>

                {/* Categories Tabs */}
                <div className="flex mt-6 flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id
                                ? "bg-white text-purple-600 shadow-lg scale-105"
                                : "bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 shadow-sm"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Videos Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredVideos.map((video) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={video.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
                            >
                                {/* Video Container */}
                                <div className="relative aspect-video bg-gray-900 group-hover:opacity-100 transition-opacity">
                                    <video
                                        controls
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={video.url} type="video/mp4" />
                                    </video>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors">
                                            {video.icon}
                                        </div>
                                        <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                            {t('ui.videoLabel')}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                                        {video.title}
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Play size={12} className="fill-gray-500" />
                                            {t('ui.watchNow')}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredVideos.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <Search size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ui.noResults')}</h3>
                        <p className="text-gray-500">{t('ui.tryAgain')}</p>
                        <button
                            onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
                        >
                            {t('ui.showAll')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TutorialVideos;