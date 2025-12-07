import CTA from "@/components/CTA";
import { getTranslations } from "next-intl/server";
import {
    Rocket,
    ShieldCheck,
    LayoutDashboard,
    Users,
    Zap,
    Target,
    Globe2,
} from "lucide-react";

export const metadata = {
    title: "About Us | Next Commerce",
};

const AboutPage = async () => {
    const t = await getTranslations("About");

    // Map features to their translation keys and icons
    const featuresList = [
        {
            key: "instant",
            icon: <Rocket className="w-6 h-6 text-purple-600" />,
        },
        {
            key: "dashboard",
            icon: <LayoutDashboard className="w-6 h-6 text-teal-600" />,
        },
        {
            key: "ux",
            icon: <Users className="w-6 h-6 text-blue-600" />,
        },
        {
            key: "hosting",
            icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
        },
        {
            key: "updates",
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
        }
    ];

    return (
        <div className="relative min-h-screen bg-white overflow-hidden font-sans">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-sm font-bold text-purple-700 mb-6">
                        <span>🚀</span>
                        <span>{t('header.badge')}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        {t('header.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-500 to-purple-600">
                            {t('header.titleHighlight')}
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        {t.rich('header.description', {
                            bold: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>
                        })}
                    </p>
                </div>

                {/* Main Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {t('main.title')} <span className="text-teal-600">{t('main.titleHighlight')}</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t('main.description')} <span className="font-mono font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">{t('main.tag')}</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                <Zap size={18} className="text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold text-gray-700">{t('main.speed')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                <ShieldCheck size={18} className="text-green-500 fill-green-500/20" />
                                <span className="font-semibold text-gray-700">{t('main.security')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Placeholder */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 rounded-3xl rotate-3 opacity-20 blur-lg transform translate-y-4"></div>
                        <div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden p-8 min-h-[400px] flex flex-col justify-center items-center text-center">
                            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                                <LayoutDashboard size={48} className="text-teal-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('dashboard.title')}</h3>
                            <p className="text-gray-500 max-w-sm">
                                {t('dashboard.description')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">{t('features.badge')}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{t('features.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresList.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`features.list.${feature.key}.title`)}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {t(`features.list.${feature.key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Globe2 className="text-teal-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t('vision.title')}</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {t('vision.description')}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-3xl p-10 relative overflow-hidden shadow-lg">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                                <Target className="text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('mission.title')}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('mission.description')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <CTA />

            </div>
        </div>
    );
};

export default AboutPage;