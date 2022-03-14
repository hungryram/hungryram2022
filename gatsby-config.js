require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Web Design for Real Estate and Small Businesses`,
    siteUrl: `https://www.hungryram.com`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.hungryram.com`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/content/blog/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "services",
        "path": `${__dirname}/content/services/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "portfolio",
        "path": `${__dirname}/content/portfolio/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "legal",
        "path": `${__dirname}/content/legal/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "locations",
        "path": `${__dirname}/content/locations/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "page",
        "path": `${__dirname}/content/pages/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "docs",
        "path": `${__dirname}/content/documentation/`
      },
    },
  ]
};