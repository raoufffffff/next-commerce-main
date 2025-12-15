"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useState, useTransition } from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LangSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: "ar", label: "العربية", dir: "rtl" },
        { code: "en", label: "English", dir: "ltr" },
        { code: "fr", label: "Français", dir: "ltr" },
    ];

    const handleSelect = (nextLocale) => {
        setIsOpen(false);
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="relative z-50">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-teal-600"
            >
                <Globe size={20} />
                <span className="uppercase font-semibold text-sm">{locale}</span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop to close when clicking outside */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            // 🔥 FIXED: Changed left-0 to right-0 for mobile to prevent overflow
                            // Also added min-w-[150px] for better text space
                            className="absolute top-full mt-2 right-0 md:left-auto md:right-0 min-w-[160px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleSelect(lang.code)}
                                    disabled={isPending}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${locale === lang.code
                                        ? "text-teal-600 font-bold bg-teal-50/50"
                                        : "text-gray-700"
                                        }`}
                                    dir={lang.dir}
                                >
                                    {/* 🔥 FIXED: Added flex-1 and text-start to force text visibility */}
                                    <span className="flex-1 text-start">{lang.label}</span>

                                    {/* Check Icon stays at the end because of flex-row behavior in RTL/LTR */}
                                    {locale === lang.code && <Check size={16} />}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}