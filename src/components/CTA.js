import { getTranslations } from 'next-intl/server';

const CTA = async () => {
    const t = await getTranslations("CTA");

    return (
        <section className="py-24 relative overflow-hidden bg-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-900/40 via-gray-900 to-gray-900" />
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-teal-600/10 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {t('title')}
                </h2>
                <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                    {t('description')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        target='_blank'
                        href='https://custem-dashboard.onrender.com/sinin'
                        rel="noreferrer"
                        className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
                        {t('btnPrimary')}
                    </a>
                    <a
                        target='_blank'
                        href='https://api.whatsapp.com/send/?phone=213776966468'
                        rel="noreferrer"
                        className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                        {t('btnSecondary')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;