import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0)
    const [count2] = useState(1)
    useEffect = () => {
        // used to call effect
    }

    async function getUserInfo(){

    }

    return (
        <div className="user-card" >
            <h2>Count: {count}</h2>
            <h2>Count 2: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: Shahdara, Delhi</h3>
            <h3>Contact: @sandeepJee</h3>
        </div>
    )
}

export default User;