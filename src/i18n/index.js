import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export const geti18n = ({ currentLocale = 'es' }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    // default
    return spanish
}