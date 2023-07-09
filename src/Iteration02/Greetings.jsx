

const greatingsLang = {
  de: "Hallo",
  en: "Hi",
  es: "Hola",
  fr: "Bonjour"
}
export const Greetings = ({ lang, children }) => {
  return (
    <div className='card'>
      <div className='header-4 m-1'>{greatingsLang[lang]} {children}</div>
    </div>
  )
}
