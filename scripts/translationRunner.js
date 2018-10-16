const manageTranslations = require('react-intl-translations-manager').default;
const supportedLanguages = require('../src/utils/supportedLanguages');

console.log(supportedLanguages);

manageTranslations({
  messagesDirectory: 'src/i18n/messages',
  translationsDirectory: 'src/i18n/locales',
  languages: supportedLanguages
});
