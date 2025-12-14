"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as fbq from "@/lib/fpixel";

export default function PixelEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // This triggers every time the URL changes
        fbq.pageview();
    }, [pathname, searchParams]);

    return null;
}