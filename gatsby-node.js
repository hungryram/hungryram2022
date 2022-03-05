const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
const { createPage } = actions

  const { data } = await graphql(`
  {
    portfolio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/portfolio/"}}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    blog: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/blog/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    services: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    locations: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/locations/"}}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    legal: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/legal/"}}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`)

  // Create blog-list pages
  const posts = data.blog.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })


// CREATE PORTFOLIO DETAIL
  data.portfolio.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/portfolio" + slug,
      component: path.resolve(`./src/templates/portfolio-detail.js`),
      context: { slug: slug },
    })
  })

  // CREATE BLOG DETAIL
  data.blog.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/blog" + slug,
      component: path.resolve(`./src/templates/blog-detail.js`),
      context: { slug: slug },
    })
  })

  // CREATE SERVICES DETAIL
  data.services.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/services" + slug,
      component: path.resolve(`./src/templates/service-detail.js`),
      context: { slug: slug },
    })
  })

    // CREATE LOCATION DETAIL
    data.locations.edges.forEach(edge => {
      const slug = edge.node.fields.slug
      actions.createPage({
        path: "/locations" + slug,
        component: path.resolve(`./src/templates/location-detail.js`),
        context: { slug: slug },
      })
    })

        // CREATE LEGAL PAGE
        data.legal.edges.forEach(edge => {
          const slug = edge.node.fields.slug
          actions.createPage({
            path: "/legal" + slug,
            component: path.resolve(`./src/templates/legal-detail.js`),
            context: { slug: slug },
          })
        })
}