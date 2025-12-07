import TutorialVideos from "@/components/TutorialVideos";
import { MonitorPlay } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata = {
    title: "Tutorials | Next Commerce",
};

const TutorialPage = async () => {
    const t = await getTranslations("Tutorial");

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* Header / Hero Section */}
            <div className="relative bg-gray-900 text-white pb-10 pt-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-teal-300 mb-6 backdrop-blur-sm">
                        <MonitorPlay size={16} />
                        <span>{t('header.badge')}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        {t('header.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-400 to-purple-400">
                            {t('header.titleHighlight')}
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        {t('header.description')}
                    </p>
                </div>

                {/* Video Component */}
                <TutorialVideos />
            </div>
        </div>
    );
}

export default TutorialPage;