var ClozeCard = function(text, cloze){
	if (text.indexOf(cloze) === -1){
		throw "error text not contained"
	}
	this.partialText = text.replace(cloze, "...");
	this.fullText = text;
	this.cloze = cloze;
};

module.exports = ClozeCard;