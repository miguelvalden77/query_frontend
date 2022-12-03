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
    const handleSearch = async ()=> {
        try{
            const response = await getSearchUsers(userSearch)
            console.log(response.data)
            setUsers(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    return <section className="search-section">
        <input onChange={handleChangeUser} value={userSearch} type="text" placeholder="search users"/>
        <button onClick={handleSearch}>Search</button>
    </section>

}

export default SearchUsers