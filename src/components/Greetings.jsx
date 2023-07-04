/* eslint-disable react/prop-types */


const greatingsLang = {
  de: "Hallo",
  en: "Hi",
  es: "Hola",
  fr: "Bonjour"
}

function Greetings({ lang, children }) {
  return (
    <>
    <h2 className="modal-dialog modal-xl">{greatingsLang[lang]} {children}</h2>
    <hr />
    </>
  )
}

export default Greetings