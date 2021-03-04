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
		{
			resolve: "gatsby-plugin-plausible",
			options: {
				domain: "withnimiq.vercel.app",
			},
		},
	],
};
