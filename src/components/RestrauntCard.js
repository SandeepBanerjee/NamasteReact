import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
    backgroundColor:'#f0f0f0'
}
const RestrauntCard = (props) => {
    const userInfo = useContext(UserContext)
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo
    } = props?.resData;

    return (
        <div className='m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200' >
            <img alt="Meghnafood" className='rounded-lg'
            src={CDN_URL+cloudinaryImageId} />
            <h3 className=" font-bold py-2" >{name}</h3>
            <h4 className=" text-sm" >{cuisines.join(', ')}</h4>
            <h4 className=" text-orange-400" >{avgRatingString+ '★'}</h4>
            <h4 className=" font-semibold" >{costForTwo}</h4>
            <span>{userInfo.loggedInUser}</span>
        </div>
    )
}

//higher order component
/**
 * input: restraunt card
 * output: restraunt card with aggregatedDiscountInfoV2
 */

export const withDiscountCoupon = (RestrauntCard) => {
    return (props) => {
        return (
            <div>
                <label className=" absolute bg-black text-white mx-4 p-2 rounded-r-lg " >{props?.resData?.aggregatedDiscountInfoV3?.header}</label>
                <RestrauntCard {...props} />
            </div>
        )
    }
}


export default RestrauntCard