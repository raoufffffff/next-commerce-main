import React from 'react'
import { Star, CheckCircle2, AlertCircle } from 'lucide-react';

const PricingCard = ({ title, price, period, description, features, recommended = false, buttonText, buttonVariant, recommendedText }) => {
    return (
        <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${recommended ? 'bg-gray-900 text-white shadow-2xl scale-105 border border-gray-800 z-10' : 'bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl'}`}>
            {recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Star size={12} className="fill-white" /> {recommendedText}
                </div>
            )}

            <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${recommended ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`text-sm ${recommended ? 'text-gray-400' : 'text-gray-500'}`}>{description}</p>
            </div>

            <div className="mb-8 flex items-baseline">
                <span className={`text-4xl  font-black ${recommended ? "text-gray-200" : "text-gray-700"}`}>{price}</span>
                <span className={`text-sm mr-2 ${recommended ? 'text-gray-400' : 'text-gray-500'}`}>{period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                        <div className={`mt-0.5 min-w-[18px] ${feature.unavailable ? 'text-red-400' : (recommended ? 'text-teal-400' : 'text-teal-600')}`}>
                            {feature.unavailable ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                        </div>
                        <span className={`${recommended ? 'text-gray-300' : 'text-gray-600'} ${feature.unavailable ? 'opacity-70 line-through decoration-red-400/50' : ''}`}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <a
                target='_blank'
                href='https://custem-dashboard.onrender.com/upgrade'
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${buttonVariant === 'primary'
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30'
                    : (recommended ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-teal-50 text-teal-700 hover:bg-teal-100')
                    }`}>
                {buttonText}
            </a>
        </div>
    );
};
export default PricingCard;