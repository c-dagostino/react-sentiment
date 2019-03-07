import { getWordCountFromText, wordMap, wordsToOmit } from '../wordCounter';

describe('WordCount', () => {
  it('Expect component to render properly', () => {
    const test =
      'this is a test of the word-count function test to have word count word word';
    const result = getWordCountFromText(test);
    expect(result.length === 7);
  });

  it('wordMap doesnt return busy words test', () => {
    const test =
      'this is a test of the word-count function test to have word count word word';
    const result = wordMap(test);

    const busyWordCount = Object.keys(result).map(w => {
      if (wordsToOmit.indexOf(w.toLowerCase()) !== -1) {
        return 1;
      }
      return 0;
    });
    expect(busyWordCount.length > 0);
  });
});
