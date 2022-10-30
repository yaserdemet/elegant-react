import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from  "../locales/en/en.json"
import translationTR from   "../locales/tr/tr.json"
// the translations

const resources = {
    
en: {
translation: translationEN
},
tr:{
translation: translationTR
}
};
i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    resources,
    lng : "en",
    keySeparator : false,
    interpolation : {
        escapeValue : false 
    }
})
export default i18n;