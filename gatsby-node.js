const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectDetail = path.resolve(`./src/templates/ProjectDetail.jsx`)
    resolve(graphql(`
        {
          allMarkdownRemark(
            limit: 100,
            filter: {
              frontmatter: {
                path: { regex: "/projects/[a-z]/u" },
              }
            }
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then((result) => {
      if (result.errors) {
        console.log(result.errors) // eslint-disable-line no-console
        reject(result.errors)
      }

      // Create project pages.
      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        createPage({
          path: edge.node.frontmatter.path,
          component: projectDetail,
          context: {
            path: edge.node.frontmatter.path,
          },
        })
      })
    }))
  })
}

exports.modifyWebpackConfig = ({ config }) => {
  config._config.devtool = false // eslint-disable-line
}
