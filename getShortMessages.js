function filterMessages(item) {
	return item.message.length < 50;
}

module.exports = function getShortMessages(messages) {
	var messageObject = messages.filter(filterMessages);
	return messageObject.map(function(item) {
		return item.message;
	});
}