"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import { useSearchParams } from "next/navigation";
import LangSwitcher from "./LangSwitcher"; // 👈 Import the component

export const Navbar = () => {
    const t = useTranslations("Navbar");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll Logic for Search Params
    const searchParams = useSearchParams();
    useEffect(() => {
        const sections = ["pricing", "features"];
        sections.forEach((section) => {
            if (searchParams.get(section) === "true") {
                const element = document.getElementById(section);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                }
            }
        });
    }, [searchParams]);

    // Navbar Background Logic
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tight cursor-pointer">
                    <Image
                        width={100}
                        height={100}
                        src="/logo.png"
                        alt="next-commerce-logo"
                        className="w-24 h-24 object-contain"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-teal-500 transition-colors">{t('links.home')}</Link>
                    <Link href="/?features=true" className="hover:text-teal-500 transition-colors">{t('links.features')}</Link>
                    <Link href="/?pricing=true" className="hover:text-teal-500 transition-colors">{t('links.pricing')}</Link>
                    <Link href="/about" className="hover:text-teal-500 transition-colors">{t('links.about')}</Link>
                    <Link href="/contact" className="hover:text-teal-500 transition-colors">{t('links.contact')}</Link>
                    <Link href="/tutorial" className="hover:text-teal-500 transition-colors">{t('links.tutorial')}</Link>
                </div>

                {/* Desktop Action Buttons & Language Switcher */}
                <div className="hidden md:flex items-center gap-3">
                    {/* 1. Language Switcher Desktop Placement */}
                    <div className="border-l border-gray-200 pl-3 ml-3 h-6 flex items-center"> {/* Little separator */}
                        <LangSwitcher />
                    </div>

                    <a
                        target='_blank'
                        href="https://custem-dashboard.onrender.com/login"
                        rel="noreferrer"
                        className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors">
                        {t('buttons.login')}
                    </a>
                    <a
                        target='_blank'
                        href='https://custem-dashboard.onrender.com/sinin'
                        rel="noreferrer"
                        className="group relative px-6 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-full text-sm font-medium text-white transition-all shadow-lg shadow-gray-900/20">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center gap-2">
                            {t('buttons.startFree')}
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                        </span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Optional: You can put LangSwitcher here too if you want it visible without opening menu */}
                    {/* <LangSwitcher /> */}

                    <button className="text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
                >
                    {/* 2. Language Switcher Mobile Placement */}
                    <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                        <span className="text-gray-400 text-sm">Language / اللغة</span>
                        <LangSwitcher />
                    </div>

                    <Link onClick={() => setMobileMenuOpen(false)} href="/" className="text-gray-600 font-medium">{t('links.home')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/?features=true" className="text-gray-600 font-medium">{t('links.features')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/?pricing=true" className="text-gray-600 font-medium">{t('links.pricing')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="text-gray-600 font-medium">{t('links.about')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="text-gray-600 font-medium">{t('links.contact')}</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} href="/Tutorial" className="text-gray-600 font-medium">{t('links.tutorial')}</Link>

                    <div className="h-px bg-gray-100 w-full my-2" />

                    <a
                        target='_blank'
                        href='https://custem-dashboard.onrender.com/sinin'
                        rel="noreferrer"
                        className="w-full py-3 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl text-white font-bold shadow-lg shadow-purple-500/30 text-center"
                    >
                        {t('buttons.createStore')}
                    </a>
                </motion.div>
            )}
        </nav>
    );
};