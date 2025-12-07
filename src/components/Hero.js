import { BarChart3, CheckCircle2 } from "lucide-react";
import VideoModel from "./VideoModel";
import { getTranslations } from "next-intl/server"; // 👈 Import for Server Components

const Hero = async () => {
    // 1. Fetch translations on the server
    const t = await getTranslations("Hero");

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white" >

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-sm font-semibold text-teal-600 mb-8 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5 ml-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                    </span>
                    {t('badge')}
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    {t('title')}<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-400 to-purple-600">
                        {t('titleHighlight')}
                    </span>
                </h1>

                {/* Paragraph with Rich Text Support */}
                <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    {t.rich('description', {
                        bold: (chunks) => <b className="font-semibold text-gray-800">{chunks}</b>
                    })}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        target='_blank'
                        href='https://custem-dashboard.onrender.com/sinin'
                        rel="noreferrer"
                        className="w-full sm:w-auto px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-1 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                        <span className="relative">{t('ctaMain')}</span>
                    </a>

                    <VideoModel text={t('whatch')} />
                </div>

                {/* Dashboard Illustration */}
                <div className="mt-20 mx-auto max-w-5xl rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none" />
                    <div className="h-12 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2 flex-row-reverse justify-end">
                        <div className="flex gap-1.5 flex-row-reverse">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                    </div>

                    <div className="p-8 md:p-12 text-right">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><BarChart3 size={24} /></div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-medium">{t('salesTitle')}</h3>
                                        <p className="text-3xl font-bold text-gray-900 mt-1">45,200 د.ج</p>
                                    </div>
                                </div>
                                <div className="h-32 flex items-end justify-between gap-2 px-2">
                                    {/* CSS ONLY Animation for bars */}
                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                        <div key={i} className="w-full bg-teal-500/10 rounded-t-lg relative group transition-all hover:bg-teal-500/20" style={{ height: `${h}%` }}>
                                            <div
                                                className="absolute bottom-0 w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg"
                                                style={{
                                                    height: '0%',
                                                    animation: `grow-bar 1s ease-out forwards`,
                                                    animationDelay: `${i * 100}ms`
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-purple-500/20">
                                <div>
                                    <h3 className="font-bold text-lg mb-4">{t('nextSteps')}</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                            <div className="bg-white/20 p-1.5 rounded-full"><CheckCircle2 size={14} /></div>
                                            <span className="text-sm font-medium">{t('step1')}</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm opacity-60">
                                            <div className="border border-white/40 p-1.5 rounded-full w-7 h-7" />
                                            <span className="text-sm font-medium">{t('step2')}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold text-sm hover:bg-purple-50 transition-colors mt-4">
                                    {t('completeSetup')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes grow-bar {
                        from { height: 0%; }
                        to { height: 100%; }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Hero;