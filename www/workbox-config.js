module.exports = {
	globDirectory: 'www/',
	globPatterns: [
		'**/*.{txt,css,ttf,woff2,html,png,js,json}'
	],
	swDest: 'www.src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};