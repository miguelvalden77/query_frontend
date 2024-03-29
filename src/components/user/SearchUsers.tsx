// Services
import { getSearchUsers } from "../../services/user.services"

// Hooks
import React, { useState } from "react"


interface propsSearchUser {
    setUsers: any
}

const SearchUsers = ({setUsers}:propsSearchUser):JSX.Element =>{

    const [userSearch, setUserSearch] = useState<string>("")

    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>)=> setUserSearch(e.target.value)
    const handleSearch = async (): Promise<void>=> {
        try{
            const response = await getSearchUsers(userSearch)
            console.log(response.data)
            setUsers(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    return <section className="search-section" style={{marginTop: "2.5rem"}}>
        <input onChange={handleChangeUser} value={userSearch} type="text" placeholder="search users"/>
        <button onClick={handleSearch}>Busca</button>
    </section>

}

export default SearchUsers