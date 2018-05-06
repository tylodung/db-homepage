module.exports = {
  siteMetadata: {
    title: `David Brookes`,
    siteUrl: `http://tulanhngoainhap.net/`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Brookes`,
        short_name: `dbrookes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/android-chrome-36x36.png`,
            sizes: `36x36`,
            type: `image/png`,
            density: `0.75`,
          },
          {
            src: `/favicons/android-chrome-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            density: `1.0`,
          },
          {
            src: `/favicons/android-chrome-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            density: `1.5`,
          },
          {
            src: `/favicons/android-chrome-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            density: `2.0`,
          },
          {
            src: `/favicons/android-chrome-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            density: `3.0`,
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            density: `4.0`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-WP2KND`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(filter: {path: {regex: "/^((?!404|offline-plugin-app-shell-fallback).)*$/"}}) {
            edges {
              node {
                path
              }
            }
          }
        }`,
      },
    },
  ],
}
