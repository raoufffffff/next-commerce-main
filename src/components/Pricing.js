import PricingCard from './PricingCard';
import { getTranslations } from 'next-intl/server';

const Pricing = async () => {
    const t = await getTranslations("Pricing");

    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

                    {/* Free Plan */}
                    <PricingCard
                        evantPixal={"add to wishlist"}
                        title={t('free.title')}
                        price={t('free.price')}
                        period=""
                        description={t('free.description')}
                        buttonText={t('free.button')}
                        buttonVariant="secondary"
                        features={[
                            { text: t('free.features.1') },
                            { text: t('free.features.2') },
                            { text: t('free.features.3') },
                            { text: t('free.features.4'), unavailable: true },
                            { text: t('free.features.5'), unavailable: true },
                        ]}
                    />

                    {/* Quarterly Plan (Recommended) */}
                    <PricingCard
                        evantPixal={"Initiate checkout"}


                        title={t('quarterly.title')}
                        price={t('quarterly.price')}
                        oldprice={t('quarterly.oldproce')}
                        period={t('quarterly.period')}
                        description={t('quarterly.description')}
                        recommended={true}
                        buttonText={t('quarterly.button')}
                        buttonVariant="recommended"
                        recommendedText={t("recommendedText")}
                        features={[
                            { text: t('quarterly.features.1') },
                            { text: t('quarterly.features.2') },
                            { text: t('quarterly.features.3') },
                            { text: t('quarterly.features.4') },
                            { text: t('quarterly.features.5') },
                            // { text: t('quarterly.features.6') },
                        ]}
                    />

                    {/* Monthly Plan */}
                    <PricingCard
                        evantPixal={"Initiate checkout"}

                        title={t('monthly.title')}
                        price={t('monthly.price')}
                        oldprice={t('monthly.oldproce')}
                        period={t('monthly.period')}
                        description={t('monthly.description')}
                        buttonText={t('monthly.button')}
                        buttonVariant="primary"
                        features={[
                            { text: t('monthly.features.1') },
                            { text: t('monthly.features.2') },
                            { text: t('monthly.features.3') },
                            { text: t('monthly.features.4') },
                            // { text: t('monthly.features.5') },
                        ]}
                    />

                </div>
            </div>
        </section>
    );
};

export default Pricing;