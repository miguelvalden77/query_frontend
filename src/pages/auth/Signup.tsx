import { useState } from "react"


const Signup = ():JSX.Element =>{

    const [data, setData] = useState({})



    return <main>
        <section>
            <form action="#">
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" />
                </div>
            </form>
        </section>
    </main>

}

export default Signup