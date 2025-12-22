
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Footer = async () => {
    const t = await getTranslations("Footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900 mb-6">
                            <Image
                                width={100}
                                height={100}
                                src="/logo.png" alt="next-commerce" className="w-24 h-24" />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">{t('columns.product.title')}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://raoufhamoudi-nc.vercel.app/"
                                    className="hover:text-teal-500"
                                    rel="noreferrer"
                                >
                                    {t('columns.product.interface')}
                                </a>
                            </li>
                            <li>
                                <Link href="/?pricing=true" className="hover:text-teal-500">
                                    {t('columns.product.pricing')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">{t('columns.resources.title')}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>
                                <Link href="/tutorial" className="hover:text-teal-500">
                                    {t('columns.resources.blog')}
                                </Link>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send/?phone=213776966468"
                                    className="hover:text-teal-500"
                                    rel="noreferrer"
                                >
                                    {t('columns.resources.help')}
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://app.next-commerce.shop/"
                                    className="hover:text-teal-500"
                                    rel="noreferrer"
                                >
                                    {t('columns.resources.start')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">{t('columns.company.title')}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>
                                <Link href="/about" className="hover:text-teal-500">
                                    {t('columns.company.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-teal-500">
                                    {t('columns.company.contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-teal-500">
                                    {t('columns.company.terms')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright & Socials */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        {t('copyright', { year: currentYear })}
                    </p>
                    <div className="flex gap-6 text-gray-400">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=61583832365605&rdid=DB30jYOqb5nh2KaY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17s7YeQ8ZH%2F#"
                            className="hover:text-teal-500 transition-colors"
                            rel="noreferrer"
                        >
                            {t('social.facebook')}
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/next_comerce/#"
                            className="hover:text-teal-500 transition-colors"
                            rel="noreferrer"
                        >
                            {t('social.instagram')}
                        </a>
                        <a
                            target="_blank"
                            href="https://www.tiktok.com/@nextcomerce?is_from_webapp=1&sender_device=pc"
                            className="hover:text-teal-500 transition-colors"
                            rel="noreferrer"
                        >
                            {t('social.tiktok')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;