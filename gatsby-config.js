module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `www.conflans-sainte-honorine.fr`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      },
    },
  ],
}
