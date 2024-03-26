import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const RestrauntItemList = ({items}) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item))
    }

    return (
        <div> { items.map( (item)=>(
        <div className="p-2 m-2 border-b-2 border-gray-100 text-left" key={item?.card?.info?.id} >
            <div className="py-2 flex justify-between">
                <div className="w-9/12" >
                    <span className="font-bold pr-2" >{item.card.info.name}</span>
                    <span className="font-bold">{' ₹ '+(item.card.info.defaultPrice?item.card.info.defaultPrice:item.card.info.price)/100}</span>
                    <p className=" text-sm pr-2" >{item.card.info.description}</p>
                </div>
                <div className="w-3/12" >
                    <div className=" absolute" >
                        <button className="p-2 ml-6 mt-[75px] font-bold bg-white text-green-700 shadow-lg rounded-lg w-24"
                        onClick={()=>handleAddItem(item) } >Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info?.imageId} className=" w-full" />
                </div>
            </div>
        </div>

        ) ) } </div>
    )
}

export default RestrauntItemList