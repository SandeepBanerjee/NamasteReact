import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count:0,
            count2:0,
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"Defailt Img",
                company:"Defailt Img"
            }

        }
        console.log('Child constructor')
    }

    async componentDidMount(){
        //componenet did mount is used to make an api call
        console.log('component did mount called')

        const data = await fetch("https://api.github.com/users/SandeepBanerjee")
        const profile = await data.json();
        this.setState(
            {userInfo : profile}
        )
    }

    render(){
        const {name, location, avatar_url, company} = this.state.userInfo

        return (
            <div className="user-card" >
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @{company}</h3>
            </div>
        )
    }
}

export default UserClass;