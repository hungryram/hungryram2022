module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
  ]
};