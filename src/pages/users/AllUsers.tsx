// Components
import SearchUsers from "../../components/user/SearchUsers"

// Hooks
import { useState } from "react"

// Interfaces
import user from "../../interfaces/context.interfaces"

// Recursos
import avatar from "../../assets/avatar.png"
import { Link } from "react-router-dom"


const AllUsers = (): JSX.Element =>{

    const [users, setUsers] = useState<user[]>()

    return <main>
        <SearchUsers setUsers={setUsers}/>
        <section className="all-users-container">
            {
                (users != undefined && users?.length > 0) ? users.map((e: user, index: number)=>{
                    return <article key={index} className="user-container">
                        <div className="user-photo-container">
                            <img src={e.profilePhoto ? e.profilePhoto : avatar} alt="profile foto" />
                        </div>
                        <Link to={`/user/${e._id}`}><h3>{e.username}</h3></Link>
                    </article>
                })
                : <h2 className="no-users">Sin resultados</h2>
            }
        </section>
    </main>

}

export default AllUsers