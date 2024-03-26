import RestrauntCard, {withDiscountCoupon} from "./RestrauntCard"
import { useEffect, useState, useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Body = () => {
    const [listOfRestaurants, setListOfRestraunts] = useState([])
    const [filterdRestaurants, setFilterdRestaurants] = useState([])
    const [searchText, setSearchText] = useState("");

    const EnhancedComponenet = withDiscountCoupon(RestrauntCard);

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6682224&lng=77.2933104&collection=83670&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await data.json();
        const filtredDataOfSwiggy = json.data.cards.filter(
            (res)=>res.card.card.info
        )
        setListOfRestraunts(filtredDataOfSwiggy)
        setFilterdRestaurants(filtredDataOfSwiggy)
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return(
            <h1>Looks like you are offline, Please chek internet connection</h1>
        )
    }

    const {loggedInUser, setUserInfo} = useContext(UserContext)

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className='body shadow-lg' >
            <div className='flex' >
                <div className="m-4 p-4" >
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    <button className="px-4 py-1 bg-blue-100 m-4 rounded-lg" onClick={()=>{
                        let filteredRestraunt = listOfRestaurants
                        if(searchText){
                            filteredRestraunt = listOfRestaurants.filter(
                                (res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                        }
                        setFilterdRestaurants(filteredRestraunt)
                    }} >Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-1 m-4 bg-sky-100 rounded-lg" onClick={ ()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=>res.card.card.info.avgRating>4.1
                        )
                        setListOfRestraunts(filteredList)
                    } } >Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4">
                    <label>User name</label>
                    <input
                        className="border border-solid border-black p-2"
                        onChange={(e)=>(setUserInfo(e.target.value))}
                        type="text"
                        value={loggedInUser}
                        />
                </div>
            </div>
            <div className='flex flex-wrap' >
                {
                    filterdRestaurants.map(restaurant =>
                    <Link key={restaurant.card.card.info.id} className="res-card-link" to= {'restraunt/'+restaurant.card.card.info.id}>
                        { (restaurant.card.card.info.aggregatedDiscountInfoV3 && restaurant.card.card.info.aggregatedDiscountInfoV3.header)?
                        <EnhancedComponenet resData={restaurant.card.card.info} /> :
                        (<RestrauntCard resData={restaurant.card.card.info} />) }
                        {/* <RestrauntCard resData={restaurant.card.card.info} /> */}
                    </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body