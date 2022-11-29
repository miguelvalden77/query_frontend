// Hooks
import { useState } from "react"

// Services
import { changePersonalDescription } from "../../services/user.services"

// Interfaces
import { propsPersonalInfo } from "../../interfaces/interfaces"


const PersonalDescription = ({userId, getData, info}: propsPersonalInfo)=>{

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
                console.log(err)
            }
            return
        }
        
        setClick(!click)

    }

    return <section className="description-section">
        {
            click ? <input onChange={handleChange} value={personalInfo} name="personalDescription"/> : <p>{personalInfo}</p>
        }
        {click ? <button onClick={handleClick}>Update</button> : <button style={{borderRadius: "3px"}} onClick={handleClick}>Update</button>}
    </section>

}

export default PersonalDescription