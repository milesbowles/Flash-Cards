    // This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
    // The constructor should accept two arguments: text and cloze.
    // The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
    // The constructed object should have a partial property that contains only the partial text.
    // The constructed object should have a fullText property that contains only the full text.
    // The constructor should throw or log an error when the cloze deletion does not appear in the input text.
    // Use prototypes to attach these methods, wherever possible.

    exports.ClozeCard = function(text, cloze) {
        // Convert the incoming strings to lower case
        var textToLower = text.toLowerCase();
        var clozeToLower = cloze.toLowerCase();

        // Confirm that the cloze statement appears within the complete text
        if (!textToLower.includes(clozeToLower)) {
            console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
            return;
        }

        this.fullText = text;
        this.cloze = cloze;
        this.partial = text.replace(cloze, '...');
    };