import React from 'react'

const FeatureCard = ({ icon: Icon, title, description, color }) => {
    return (
        <div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-gray-900" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard