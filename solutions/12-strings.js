// BEGIN
export default function makeCensored(text, stopWords) {
  const words = text.split(' ');
  const censoredWords = words.map((word) => {
    if (stopWords.includes(word)) {
      return '$#%!';
    }
    return word;
  });
  return censoredWords.join(' ');
}

// END