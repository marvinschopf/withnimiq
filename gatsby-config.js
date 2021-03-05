module.exports = {
	siteMetadata: {
		title: "Nimiq Apps",
		siteUrl: "https://withnimiq.vercel.app",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-preact",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-plausible",
			options: {
				domain: "withnimiq.vercel.app",
			},
		},
	],
};
