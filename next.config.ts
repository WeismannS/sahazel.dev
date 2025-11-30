import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code';
const withMDX = createMDX({
  options: {

    mdxExtensions: ['mdx', 'md'],

    remarkPlugins: [['remark-frontmatter',{ strict: true, throwOnError: true, type: 'yaml', fence: '---'}], ['remark-gfm', { strict: true, throwOnError: true }]],
    rehypePlugins: [['rehype-pretty-code', {
  keepBackground: false,
}]],
  }
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

})
