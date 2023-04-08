import React from 'react'
import Navbar from '../../components/compnentsDonnateur/Navbar'
import FormPostDonnateur from '../../components/compnentsDonnateur/FormPostDonnateur'

function FormDonnateur() {
  return (
    <div>
        <Navbar />
        <div className=' max-w-screen-xl mx-auto mt-11'>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Devenir donneur de sang et sauver des vies</h2>
    <p className="mb-3 px-9  font-light text-center  text-black">Vous pouvez aider à sauver des vies en devenant un donneur de sang sur notre plateforme. Le sang que vous donnez peut être utilisé pour aider des personnes qui ont subi une intervention chirurgicale, des patients atteints de cancer, des personnes souffrant de maladies chroniques, des blessés graves, des femmes enceintes et des nourrissons, entre autres. Devenir donneur de sang est une action simple mais importante que chacun de nous peut accomplir pour aider les autres. En remplissant ce formulaire, vous pouvez commencer le processus pour devenir un donneur de sang.</p>
        <FormPostDonnateur />
        </div>
    </div>
  )
}

export default FormDonnateur
