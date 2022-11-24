// Hooks
import { useState } from "react"

// Services
import { changePersonalDescription } from "../../services/user.services"

// Interfaces
import { propsPersonalInfo } from "../../interfaces/interfaces"


const PersonalDescription = ({userId, getData}: propsPersonalInfo)=>{

    const [personalInfo, setPersonalInfo] = useState<any>()
    const [click, setClick] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
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

    return <section>
        {
            click ? <textarea onChange={handleChange} value={personalInfo} name="personalDescription" cols={30} rows={10}></textarea> : null
        }
        <button onClick={handleClick}>Update</button>
    </section>

}

export default PersonalDescription