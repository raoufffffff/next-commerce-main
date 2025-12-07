import {
    Mail,
    MapPin,
    MessageCircle,
    ArrowLeft
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata = {
    title: "Contact Us | Next Commerce",
};

// Icons Definitions
const FacebookIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const TikTokIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const WhatsAppIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const ContactPage = async () => {
    const t = await getTranslations("Contact");

    const socialLinks = [
        {
            name: "WhatsApp",
            icon: <WhatsAppIcon className="w-6 h-6" />,
            url: "https://api.whatsapp.com/send/?phone=213776966468",
            color: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
            label: t('channels.whatsapp')
        },
        {
            name: "Facebook",
            icon: <FacebookIcon className="w-6 h-6" />,
            url: "https://www.facebook.com/profile.php?id=61583832365605&rdid=DB30jYOqb5nh2KaY",
            color: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
            label: t('channels.facebook')
        },
        {
            name: "Instagram",
            icon: <InstagramIcon className="w-6 h-6" />,
            url: "https://www.instagram.com/next_comerce/",
            color: "bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100",
            label: t('channels.instagram')
        },
        {
            name: "TikTok",
            icon: <TikTokIcon className="w-6 h-6" />,
            url: "https://www.tiktok.com/@nextcomerce",
            color: "bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100",
            label: t('channels.tiktok')
        }
    ];

    return (
        <div className="relative min-h-screen bg-white font-sans overflow-hidden">

            {/* Background Aesthetics */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-sm font-bold text-teal-600 mb-6">
                        <MessageCircle size={16} />
                        <span>{t('header.badge')}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                        {t('header.title')}
                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t('header.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Contact Info & Socials */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('channels.title')}</h3>
                            <div className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group hover:shadow-md ${social.color} bg-white border-gray-100`}
                                    >
                                        <div className={`p-3 rounded-xl ${social.color.split(' ')[0]} ${social.color.split(' ')[1]}`}>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{social.name}</h4>
                                            <p className="text-sm text-gray-500">{social.label}</p>
                                        </div>
                                        {/* Flip ArrowLeft based on direction (RTL needs 180deg flip) */}
                                        <div className="mr-auto opacity-0 group-hover:opacity-100 transition-opacity rtl:-translate-x-2 ltr:translate-x-2 group-hover:translate-x-0">
                                            <ArrowLeft size={18} className="rtl:rotate-0 ltr:rotate-180" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin size={20} className="text-teal-400" />
                                {t('location.title')}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {t('location.address')}<br />
                                {t('location.work')}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Mail size={16} />
                                <span>next.commerce.help@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Note: In your original code, columns 2 and 3 were missing or empty. 
                        If you have a form or map, place it here. */}
                    <div className="lg:col-span-2">
                        {/* Placeholder for future Contact Form or Map */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactPage;