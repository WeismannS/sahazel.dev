import createMDX from '@next/mdx'
const withMDX = createMDX({
  options: {

    mdxExtensions: ['mdx', 'md'],

    remarkPlugins: [['remark-frontmatter', { strict: true, throwOnError: true, type: 'yaml', fence: '---' }], ['remark-gfm', { strict: true, throwOnError: true }]],
    rehypePlugins: [['rehype-pretty-code', {
      keepBackground: false,
    }]],
  }
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-rough-notation'],
  },
})
