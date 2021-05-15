const text = 'installation-of-a-phosphatide-drying-line';

const func = () => {
  const text2 = text.split('-').map((word, index) => {
    return index > 0 ? word.replace(word[0], word[0].toUpperCase()) : word;
  });
  return text2.join('');
}

console.log(func());