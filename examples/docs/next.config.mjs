import nextra from 'nextra'

const withNextra = nextra({
  theme: '@icebreakers/nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  latex: true,
  flexsearch: {
    codeblock: false
  }
})

export default withNextra({
  reactStrictMode: true
})
