"use client";

import { useTheme } from "@/app/components/ThemeProvider";
import Giscus from "@giscus/react";

export default function GiscusComments() {
    const {theme} = useTheme()
    return (
        <Giscus
            repo="WeismannS/sahazel.dev"
            repoId="R_kgDOQgAVXg"
            category="Ideas"
            categoryId="DIC_kwDOQgAVXs4CzTqU"
            mapping="pathname"
            strict="0"
            reactionsEnabled="0"
            emitMetadata="0"
            inputPosition="top"
            theme={theme === "dark" ? "dark_dimmed" : "light"}
            lang="en"
            loading="lazy"
        />
    );
}
