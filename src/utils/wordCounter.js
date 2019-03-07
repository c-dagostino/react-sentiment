export const wordsToOmit = [
  'a',
  'the',
  'to',
  'for',
  'this',
  'that',
  'it',
  'in',
  'of',
  'if',
  'is',
  'on',
  'not',
  'so',
  'and',
  'rt'
];

function cleanString(str) {
  return str
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function extractSubstr(str, regexp) {
  return cleanString(str).match(regexp) || [];
}

export function getWordsByWordBoundaries(str) {
  return extractSubstr(str, /\b[a-z\d]+\b/g);
}

export function wordMap(str) {
  return getWordsByWordBoundaries(str).reduce((map, word) => {
    if (wordsToOmit.indexOf(word.toLowerCase()) === -1) {
      map[word] = (map[word] || 0) + 1;
    }
    return map;
  }, {});
}

function mapToTuples(map) {
  return Object.keys(map).map(key => [key, map[key]]);
}

function mapToSortedTuples(map, sortFn, sortOrder) {
  return mapToTuples(map).sort((a, b) =>
    sortFn.call(undefined, a, b, sortOrder)
  );
}

function convertToArrayOfMaps(wordArray) {
  const wordsAndCounts = wordArray
    .filter(w => w[1] > 1)
    .map(w => ({ text: w[0], value: w[1] }));

  return wordsAndCounts;
}

function wordFrequency(str) {
  return mapToSortedTuples(
    wordMap(str),
    (a, b, order) => {
      if (b[1] > a[1]) {
        return order[1] * -1;
      }
      if (a[1] > b[1]) {
        return order[1] * 1;
      }
      return order[0] * (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    },
    [1, -1]
  );
}

export function getWordCountFromText(textToParse) {
  const wordFrequencyArray = wordFrequency(textToParse);
  return convertToArrayOfMaps(wordFrequencyArray);
}

function makeTextStringFromTweets(tweets) {
  return tweets.reduce(
    (result, { fullText }) => (result += ` ${fullText}`),
    ''
  );
}

export function getWordCountFromTweets(tweets) {
  const text = makeTextStringFromTweets(tweets);
  return getWordCountFromText(text);
}
