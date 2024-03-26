import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    let btnName = 'Login';
    const [btnNameReact, setBtnNameReact] = useState('Login');

    /**
     * if there is no second parameter, use effect will call every render of that perticular componenet
     * if there is one empty array as second parameter use effect will call only once when the componenet renders first
     * if there is dependency array, useEffect will call everytime whenever that dependecy updated
     */

    useEffect(()=>{

    }, [btnNameReact])

    const onlineStatus = useOnlineStatus();

    const userInfo = useContext(UserContext)

    const cartItems = useSelector( (store)=>store.cart.items )

    // console.log('reducx ka data', cart)

    return (
        <div className='flex justify-between shadow-lg m-2' >
            <div className='logo-container'>
                <img className='w-40' src={LOGO_URL} />
            </div>
            <div className='flex items-center' >
                <ul className="flex p-4 m-4" >
                    <li className="px-4" > Online Status: {onlineStatus? '🟢' : '🔴' } </li>
                    <li className="px-4"> <Link> Home</Link> </li>
                    <li className="px-4"> <Link to='/about' > About Us</Link></li>
                    <li className="px-4"> <Link to='/contact'> Contact Us</Link> </li>
                    <li className="px-4"> <Link to='/grocery'> Grocery</Link> </li>
                    <li className="px-4" >Cart <span className=" font-bold" ><Link to='/cart'>({cartItems.length} items)</Link></span> </li>
                <button className="login px-4" onClick={()=>{
                    btnNameReact==='Login'?
                    setBtnNameReact('Logout'):
                    setBtnNameReact('Login')
                    }} >{btnNameReact}</button>
                    <li className="px-4 font-bold">{userInfo.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;