
interface propsFollow {
    userId: string | undefined,
    id: string | undefined,
    friendsArr: string[] | undefined
}

const Follow = ({userId, id, friendsArr}: propsFollow):JSX.Element =>{


    const handleFollow = async ()=>{
        try{

            if(userId && friendsArr?.includes(userId)){
                console.log("Lo sigues")
                return
            }

            console.log("No lo sigues")

        }
        catch(err){
            console.log(err)
        }
    }

    return <button onClick={handleFollow}>Follow</button>
}

export default Follow