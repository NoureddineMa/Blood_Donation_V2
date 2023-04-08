import { useState } from 'react'
import { PostReq } from '../../Utils/Requests'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'
import CustomLabel from '../CustomLabel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FormPostDonnateur() {

    const [First_Name ,setFirstName] = useState('')
    const [Second_Name  ,setLastName] = useState('')
    const [Email ,setEmail] = useState('')
    const [Adresse, setAdresse] = useState('')
    const [City , setCity] = useState('')
    const [Phone_Number, setPhoneNumber] = useState('')
    const [NatureDeSang, setNatureDeSang] = useState('')
    const [DateDeNaissance, setDateDeNaissance] = useState('')

     // handle F_N
     const handleFirstName = (e) => {
        return setFirstName(e.target.value)
    }
    // handle L_N
    const handleLastName = (e) => {
        return setLastName(e.target.value)
    }
    // handle Email
    const handleEmail = (e) => {
        return setEmail(e.target.value)
    }
    // handle Adresse 
    const handleAdresse = (e) => {
        return setAdresse(e.target.value)
    }
    // handle City 
    const handleCity = (e) => {
        return setCity(e.target.value)
    }
    // handle Phone Number 
    const handlePhoneNumber = (e) => {
        return setPhoneNumber(e.target.value)
    }
    // handle Nature de sang 
    const handleNatureDeSang = (e) => {
        return setNatureDeSang(e.target.value)
    }
    // handle Date de naissance
    const handleDate = (e) => {
        return setDateDeNaissance(e.target.value)
    }

     // function In case Notifu succes 
    function notify(){
        toast.success('Demande envoyé Avec Succes !! En attente une acceptation Par Admin', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }

         // function in case Notify Error
    function notifyerr(){
        toast.error('Un erreur est Survenue , Merci de reessayez plus tard !', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    // Send Data through API:
        const token = localStorage.getItem('token')

        const handleSubmit = async (e) => {
            e.preventDefault();
            const Data = {
                First_Name,
                Second_Name,
                Email,
                Adresse,
                City,
                Phone_Number,
                NatureDeSang,
                DateDeNaissance
            }
            try {
                PostReq(Data,token).then((data) => {
                    console.log(data.message);
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setAdresse('')
                    setCity('')
                    setPhoneNumber('')
                    setNatureDeSang('')
                    setDateDeNaissance('')
                    notify()
                }).catch((err) => {
                    notifyerr()
                })
            } catch (error) {
                    notifyerr()
            }
        }




  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-8">
             {/* input name */}
            <div>
                <CustomLabel label="Nom" />
                <CustomInput
                    type="text"
                    name="Nom"
                    placeholder="Veuillez entrez votre nom"
                    value={First_Name}
                    onChange={handleFirstName}
                />
            </div>
            {/* input prenom */}
            <div>
                <CustomLabel label="Prenom" />
                <CustomInput
                    type="text"
                    name="Prenom"
                    placeholder="Veuillez entrez votre Prenom"
                    value={Second_Name}
                    onChange={handleLastName}
                />
            </div>
           {/* input Email */}
            <div>
                <CustomLabel label="Email" />
                <CustomInput
                    type="email"
                    name="email"
                    placeholder="Veuillez entrez votre Email"
                    value={Email}
                    onChange={handleEmail}
                />
            </div>
           {/* input Adresse */}
            <div>
                <CustomLabel label="Adresse" />
                <CustomInput
                    type="text"
                    name="Adresse"
                    placeholder="Veuillez entrez votre Adresse" 
                    value={Adresse}
                    onChange={handleAdresse} 
                />
            </div>
           {/* input City */}
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="text" 
                    label="City"
                />
                <CustomInput
                    type="text"
                    name="City"
                    placeholder="Veuillez entrez votre Adresse"  
                    value={City} 
                    onChange={handleCity}
                />
            </div>
            {/* input Numero de telephone */}
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="text" 
                    label="Numero de telephone"
                />
                <CustomInput
                    type="tel" 
                    id="phone" 
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    placeholder="Veuillez entrez votre Numero de telephone"  
                    value={Phone_Number} 
                    onChange={handlePhoneNumber}
                />
            </div>
            {/* input Nature de sang */}
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="text" 
                    label="Nature de Sang"
                />
               <select onChange={handleNatureDeSang} value={NatureDeSang} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="" disabled selected>--Groupe Sanguin--</option>
              <option value="O-">O-</option>
            <option value="O+">O+</option>
            <option value="B">B-</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="A+">A+</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
                </select>
            </div>
             {/* input Date de naissance */}
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="date" 
                    label="Date de Naissance"
                />
               <CustomInput 
                    type="date" 
                    id="date"
                    name="datedenaissance"
                    onChange={handleDate}
                    value={DateDeNaissance}
                />
            </div>
            {/* Button Submit */}
            <CustomButton
                type="submit"
                content="Envoyez"
                onClick={handleSubmit}
            />
        </form>
    </div>
    <ToastContainer position="bottom-right"/>
</section>
  )
}

export default FormPostDonnateur
