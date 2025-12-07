import FeatureCard from './FeatureCard';
import { getTranslations } from 'next-intl/server';
import {
    Zap,
    Globe,
    BarChart3,
    MousePointer2,
    Smartphone,
    LayoutTemplate,
} from 'lucide-react';

const Features = async () => {
    const t = await getTranslations("Features");

    // Define the cards structure with keys mapping to the JSON
    const featuresList = [
        {
            key: 'designs',
            icon: LayoutTemplate,
            color: "bg-purple-100 text-purple-600"
        },
        {
            key: 'mobile',
            icon: Smartphone,
            color: "bg-teal-100 text-teal-600"
        },
        {
            key: 'social',
            icon: Globe,
            color: "bg-orange-100 text-orange-600"
        },
        {
            key: 'editor',
            icon: MousePointer2,
            color: "bg-green-100 text-green-600"
        },
        {
            key: 'speed',
            icon: Zap,
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            key: 'analytics',
            icon: BarChart3,
            color: "bg-pink-100 text-pink-600"
        }
    ];

    return (
        <section id="features" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
                            {t('highlight')}
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresList.map((feature) => (
                        <FeatureCard
                            key={feature.key}
                            icon={feature.icon}
                            title={t(`cards.${feature.key}.title`)}
                            description={t(`cards.${feature.key}.description`)}
                            color={feature.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;