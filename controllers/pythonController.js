

const matchingInputs = (req, res) => {
    const { word, word1 } = req.body;

    if (!word || !word1) {
        return res.status(400).json({ error: 'Please insert word in both fields' });
    }

    const sortedWord = word.toLowerCase().split('').sort().join('');
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');

    if (sortedWord === sortedWord1) {
        res.json({ message: `${word} is an anagram of ${word1}` });
    } else {
        res.json({ message: `${word} is NOT an anagram of ${word1}` });
    }
};

export { matchingInputs };