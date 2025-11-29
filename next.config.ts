import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  options: {

    mdxExtensions : ['mdx', 'md'],
    remarkPlugins : [remarkGfm]
  }
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
})
