const supportedLanguages = require('../../utils/supportedLanguages');

function getImport(key) {
  const dictionary = require(`./${key}`);
  return dictionary;
}

function importDictionaries() {
  const dictionaries = {};
  supportedLanguages.forEach(key => {
    dictionaries[key] = getImport(key);
  });
  return dictionaries;
}

export default importDictionaries();
