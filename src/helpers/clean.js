export const Clean = (dirtyText) => {
	// Gets rid of anything we don't want in the final HTML output
	const cleanText = dirtyText
		.replace(/\u00A9/g, '&copy;')
		.replace(/\u2013/g, '-')
		.replace(/\u2014/g, '-')
		.replace(/\u2019/g, '\'')
		.replace(/\u201C/g, '"')
		.replace(/\u201D/g, '"')
		.replace(/\t/g, '')
		.replace('rgb(255, 255, 255)', '#fff')
		.replace('rgb(255, 255, 255)', '#fff')
		.replace('rgb(228, 229, 231)', '#e4e5e7')
		.replace('rgb(61, 98, 116)', '#3d6274');

	return cleanText;
};

export default Clean;
