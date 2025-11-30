import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

const components: MDXComponents = {
    // Headings
    h1: ({ children }) => (
        <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-3xl font-semibold mt-8 mb-3 text-foreground border-b border-border pb-2">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-xl font-medium mt-4 mb-2 text-foreground">{children}</h4>
    ),
    h5: ({ children }) => (
        <h5 className="text-lg font-medium mt-4 mb-2 text-foreground">{children}</h5>
    ),
    h6: ({ children }) => (
        <h6 className="text-base font-medium mt-4 mb-2 text-muted-foreground">{children}</h6>
    ),

    // Paragraph
    p: ({ children }) => (
        <p className="text-base leading-7 mb-4 text-foreground/90">{children}</p>
    ),

    // Links
    a: ({ href, children }) => (
        <Link
            href={href || '#'}
            className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
        >
            {children}
        </Link>
    ),

    // Lists
    ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90 pl-4">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90 pl-4">{children}</ol>
    ),
    li: ({ children }) => (
        <li className="leading-7">{children}</li>
    ),

    // Blockquote
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 italic text-muted-foreground bg-secondary/30 rounded-r">
            {children}
        </blockquote>
    ),
    pre: ({ children }) => (
        <pre className="bg-[#1f2028] p-4 rounded-lg overflow-x-auto my-4 text-sm">
            {children}
        </pre>
    ),

    // Horizontal Rule
    hr: () => (
        <hr className="my-8 border-border" />
    ),

    // Images
    img: (props) => (
        <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-lg my-4"
            {...(props as ImageProps)}
        />
    ),

    // Tables (GFM)
    table: ({ children }) => (
        <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                {children}
            </table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-secondary">{children}</thead>
    ),
    tbody: ({ children }) => (
        <tbody className="divide-y divide-border">{children}</tbody>
    ),
    tr: ({ children }) => (
        <tr className="hover:bg-secondary/50 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-4 py-3 text-sm text-foreground/90">{children}</td>
    ),

    // Strikethrough (GFM)
    del: ({ children }) => (
        <del className="text-muted-foreground line-through">{children}</del>
    ),

    // Task List (GFM) - checkbox inputs
    input: (props) => {
        if (props.type === 'checkbox') {
            return (
                <input
                    {...props}
                    disabled
                    className="mr-2 h-4 w-4 rounded border-border accent-accent"
                />
            )
        }
        return <input {...props} />
    },

    // Strong and Emphasis
    strong: ({ children }) => (
        <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
        <em className="italic">{children}</em>
    ),

    // Footnote section styling (GFM)
    section: ({ children, ...props }) => {
        // Check if it's a footnotes section
        if (props.className?.includes('footnotes')) {
            return (
                <section className="mt-8 pt-4 border-t border-border text-sm text-muted-foreground" {...props}>
                    {children}
                </section>
            )
        }
        return <section {...props}>{children}</section>
    },

    // Sup for footnote references
    sup: ({ children }) => (
        <sup className="text-accent text-xs">{children}</sup>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}