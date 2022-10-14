/*------------ Required Customizations ------------*/
const siteName = "Russian Alphabet Test";
const siteDescription = "Presents a random Russian Cyrillic letter, and plays its associated sound when prompted.";
const siteAuthor = "@cc0407";
/*-------------------------------------------------*/


/*------------ Optional Customizations ------------*/
/* Google Analytics, Tag Manager, and Ad Words IDs */
const gtmID = "" // i.e. "GTM-AA1AAA1"
const gaID = ""  // i.e. "UA-111111111-1"
const awID = ""  // i.e. "AW-11111111111"
/*-------------------------------------------------*/


module.exports = {
  siteMetadata: {
    title: siteName,
    description: siteDescription,
    author: siteAuthor,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss/nesting"),
          require("tailwindcss")("./tailwind.config.js"),
          require("postcss-import"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { 
        tailwind: true,
        develop: false,
        ignore: ['src/components/*.tsx', 'src/components/*/*.tsx'],
        printRejected: true,
        purgeCSSOptinos: {
          safelist: [
            /[^\s]+:[^\s]+/, // safelists all conditional classes from tailwind. I.e. hover:text-white, 100:text-white, md:black
            /border[^\s]+/  // safelists all border sizes, used by roundedLink
          ] 
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteName,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `static/logo.svg`,
      },
    },
    /*{
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtmID,
        includeInDevelopment: false,
      },
    },*/
    /*{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          gaID, // Google Analytics / GA
          awID, // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
  //Change REPONAME to the name of this repo. Necessary for gh-pages to function
  pathPrefix: "/cyrillic-test",
};
