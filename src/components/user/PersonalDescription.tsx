// Hooks
import { useContext, useState } from "react"

// Services
import { changePersonalDescription } from "../../services/user.services"

// Interfaces
import { propsPersonalInfo } from "../../interfaces/interfaces"
import { AuthContext } from "../../context/auth.context"

// Paquetes externos
import { useNavigate } from "react-router-dom"


const PersonalDescription = ({userId, getData, info}: propsPersonalInfo)=>{

    const {usuario} = useContext(AuthContext)
    const navigate = useNavigate()

    const [personalInfo, setPersonalInfo] = useState<any>(info)
    const [click, setClick] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfo(e.target.value)
    }
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{

        if(click){

            const userDescription = {userDescription: personalInfo}

            try{

                await changePersonalDescription(userDescription, userId)
                setClick(!click)

                getData()
            }
            catch(err){
                navigate("/error")
            }
            return
        }
        
        setClick(!click)

    }

    return <section className="description-section">
        {
            click ? <input onChange={handleChange} value={personalInfo} name="personalDescription"/> : <p>{personalInfo ? personalInfo : "No hay estado aún"}</p>
        }
        {userId == usuario?.id && <button style={click ? {borderRadius: "0px 3px 3px 0px"} : {borderRadius: "3px"}} onClick={handleClick}>Update</button>}
    </section>

}

export default PersonalDescription