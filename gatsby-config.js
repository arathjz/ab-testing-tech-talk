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
    }
  ],
};
