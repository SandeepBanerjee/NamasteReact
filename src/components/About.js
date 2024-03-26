import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"

class About extends React.Component{

    constructor(){
        super()

    }

    componentDidMount(){

    }
    render(){

        return (
            <div>
                <h1>About Us (Class Component)</h1>
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is namaste react webseries</h2>
                <User name={'Sandeep Banerjee (Function)'} />
                <UserClass name={'Sandeep Bandhopadhyay (Class)'} location={'Shahdara, Delhi'} />
            </div>
        )
    }
}

/* const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is namaste react webseries</h2>
            <User name={'Sandeep Banerjee (Function)'} />
            <UserClass name={'Sandeep Bandhopadhyay (Class)'} location={'Shahdara, Delhi'} />
        </div>
    )
} */

export default About