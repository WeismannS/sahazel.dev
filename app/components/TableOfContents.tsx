"use client";

import { useEffect, useState } from "react";

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const article = document.querySelector("article");
        if (!article) return;
        const elements = article.querySelectorAll("h2, h3");
        const items: TOCItem[] = Array.from(elements).map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level: parseInt(el.tagName[1]),
        }));

        setHeadings(items);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0px -80% 0px" }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) return null;

    return (
        <nav className="hidden xl:block fixed top-24 right-8 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <p className="text-sm font-semibold text-foreground mb-3">On this page</p>
            <ul className="space-y-2 text-sm">
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            onClick={() => setActiveId(heading.id)}
                            className={`block py-1 transition-colors hover:text-accent ${activeId === heading.id
                                ? "text-accent font-medium"
                                : "text-muted"
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
