module.exports = {
  siteMetadata: {
    title: "ab-testing-tech-talk",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["BRANCH"]
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
  ],
};
