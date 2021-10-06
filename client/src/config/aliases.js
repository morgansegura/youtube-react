const aliases = (prefix = `src`) => ({
	'@assets': `${prefix}/assets`,
	'@components': `${prefix}/components`,
	'@context': `${prefix}/context`,
	'@hooks': `${prefix}/hooks`,
	'@icons': `${prefix}/components/Icons`,
	'@pages': `${prefix}/pages`,
	'@skeletons': `${prefix}/skeletons`,
	'@src': `${prefix}/`,
	'@styled': `${prefix}/styled`,
	'@utils': `${prefix}/utils`
})

module.exports = aliases
