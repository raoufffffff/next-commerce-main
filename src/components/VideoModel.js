"use client"
import { Zap, BarChart3, CheckCircle2, X, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

const VideoModel = ({ text }) => {
    // State to manage the video modal visibility
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const searchParams = useSearchParams();

    // ... your existing state (scrolled, mobileMenuOpen, etc.)

    useEffect(() => {
        // 2. Define the section IDs you want to track
        const sections = ["pricing", "features"];

        sections.forEach((section) => {
            // 3. Check if the param exists and is 'true' (e.g. /?pricing=true)
            if (searchParams.get(section) === "true") {
                const element = document.getElementById(section);

                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });

                        // Optional: Clean up URL after scroll to avoid stuck state
                        // window.history.replaceState(null, "", window.location.pathname);
                    }, 100);
                }
            }
        });
    }, [searchParams]); // 4. Re-run when URL params change

    return (
        <>
            <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 hover:border-gray-300 hover:text-purple-600 group"
            >
                {text}
                <span className="bg-gray-100 p-1 rounded-full group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                    <Play size={14} className="fill-gray-600 group-hover:fill-purple-600" />
                </span>
            </button>
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setIsVideoOpen(false)} // Close when clicking background
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-video"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            Close Button
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X size={24} />
                            </button>

                            {/* Video Player */}
                            <video
                                src="https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/aa.mp4?alt=media&token=cbc93851-45e7-469b-9fb2-a0d4b3f99106"
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            >
                                المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default VideoModel