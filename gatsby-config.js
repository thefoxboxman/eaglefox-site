//disable dotenv 
//require("dotenv").config({
//	path: `.env.${process.env.NODE_ENV}`,
//})

module.exports = {
  siteMetadata: {
    title: `Eaglefox`,
    description: `Web marketing consultants`,
		author: `john de costa`,
		siteURL: `https://www.eaglefox.com.au`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
		`gatsby-plugin-favicon`,
    `gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/favicon.png",

				// WebApp Manifest Configuration
				appName: null, // Inferred with your package.json
				appDescription: null,
				developerName: null,
				developerURL: null,
				dir: 'auto',
				lang: 'en-US',
				background: '#fff',
				theme_color: '#fff',
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',

				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					opengraph: false,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
	
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
