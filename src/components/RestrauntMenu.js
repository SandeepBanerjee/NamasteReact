import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestrauntMenu = () => {
    const {resId} = useParams();

    //custom hook
    const resInfo = useRestrauntMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    const dummy = 'Dummy data';

    if(!(resInfo)){ return <Shimmer /> }

    console.log('sandeep',resInfo)

    const {
        name,
        cuisines,
        cloudinaryImageId,
        costForTwoMessage,
        avgRating
    } = resInfo ? resInfo?.cards[2]?.card?.card?.info : []

    const {itemCards} = resInfo ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : []

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (cat) => cat.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );


    return !resInfo && !categories && !itemCards ? <Shimmer /> : (
        <div className="text-center p-4 m-4 shadow-sm" >
            <h1 className=" font-bold my-10 text-2xl" >{name}</h1>
            <h2 className=" font-bold text-lg" >{cuisines.join(', ')}</h2>
            <p className=" font-semibold" >{costForTwoMessage}</p>

            {/* categories accordion */}
            {categories.map( (category,index)=>
                (<RestrauntCategory
                    key={index+1}
                    data={category.card.card}
                    showItemList={index === showIndex?true:false}
                    setShowIndex = {()=>setShowIndex(index)}
                    dummy = {dummy}
                    />)
             )}

             <div className="w-50 rounded-lg flex justify-center items-center">
                <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt="restraunt image" />
             </div>

            <ul>
                {itemCards.map( (item, key) => <li key={item.card.info.id} >{item.card.info.name} - {item.card.info.price/100}</li> )}
            </ul>
        </div>
    )
}

export default RestrauntMenu;