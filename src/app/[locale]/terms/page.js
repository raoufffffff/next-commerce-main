import {
    Shield,
    Lock,
    Eye,
    Database,
    Server,
    Share2,
    Cookie,
    UserCheck,
    RefreshCcw,
    Mail,
    FileText
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata = {
    title: "Privacy Policy | Next Commerce",
};

const PrivacyPage = async () => {
    const t = await getTranslations("Privacy");
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            icon: <Eye className="w-5 h-5 text-purple-600" />,
            title: t('intro.title'),
            content: (
                <p>
                    {t.rich('intro.content', {
                        bold: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>
                    })}
                </p>
            )
        },
        {
            icon: <Database className="w-5 h-5 text-teal-600" />,
            title: t('collection.title'),
            content: (
                <div className="space-y-3">
                    <p>{t('collection.intro')}</p>
                    <ul className="list-disc list-inside space-y-2 marker:text-teal-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <li><span className="font-semibold"></span>{t('collection.list.account')}</li>
                        <li><span className="font-semibold"></span>{t('collection.list.usage')}</li>
                        <li><span className="font-semibold"></span>{t('collection.list.technical')}</li>
                        <li>{t('collection.list.other')}</li>
                    </ul>
                </div>
            )
        },
        {
            icon: <Server className="w-5 h-5 text-blue-600" />,
            title: t('usage.title'),
            content: (
                <div className="space-y-3">
                    <p>{t('usage.intro')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="flex items-start gap-2 text-sm p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="min-w-[6px] h-[6px] rounded-full bg-purple-500 mt-1.5" />
                                {t(`usage.list.${num}`)}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            icon: <Share2 className="w-5 h-5 text-orange-500" />,
            title: t('sharing.title'),
            content: (
                <p>{t('sharing.content')}</p>
            )
        },
        {
            icon: <Lock className="w-5 h-5 text-red-500" />,
            title: t('storage.title'),
            content: (
                <p>{t('storage.content')}</p>
            )
        },
        {
            icon: <Cookie className="w-5 h-5 text-yellow-600" />,
            title: t('cookies.title'),
            content: (
                <p>{t('cookies.content')}</p>
            )
        },
        {
            icon: <UserCheck className="w-5 h-5 text-green-600" />,
            title: t('rights.title'),
            content: (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>{t('rights.list.1')}</li>
                    <li>{t('rights.list.2')}</li>
                    <li>{t('rights.list.3')}</li>
                    <li>{t('rights.list.4')}</li>
                </ul>
            )
        },
        {
            icon: <RefreshCcw className="w-5 h-5 text-indigo-500" />,
            title: t('updates.title'),
            content: (
                <p>{t('updates.content')}</p>
            )
        },
        {
            icon: <Mail className="w-5 h-5 text-gray-700" />,
            title: t('contact.title'),
            content: (
                <div className="bg-gradient-to-r from-teal-50 to-purple-50 p-6 rounded-xl border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="font-semibold text-gray-900 mb-1">{t('contact.question')}</p>
                        <p className="text-sm text-gray-600">{t('contact.help')}</p>
                    </div>
                    <a
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=213776966468"
                        rel="noreferrer"
                        className="px-6 py-2 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium text-sm">
                        {t('contact.button')}
                    </a>
                </div>
            )
        }
    ];

    return (
        <div className="relative min-h-screen bg-gray-50/50 font-sans pt-20">

            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg shadow-purple-500/10 mb-6 text-teal-600">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                        {t('header.title')}
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        {t('header.description')}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                        <FileText size={14} />
                        <span>{t('header.lastUpdate')}</span>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-50">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                            </div>
                            <div className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>{t('footer', { year: currentYear })}</p>
                </div>

            </div>
        </div>
    )
}

export default PrivacyPage;