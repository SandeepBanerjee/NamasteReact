import { useState } from "react";
import RestrauntItemList from "./RestrauntItemList";




const RestrauntCategory = ({data, showItemList, setShowIndex, dummy}) => {
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-6 bg-green-50 shadow-lg p-4" >
                <div className="flex justify-between cursor-pointer " onClick={handleClick} >
                    <span className=" font-bold text-lg" >{data.title} ({data.itemCards.length}) </span>
                    <span className=" font-extrabold text-lg">↓</span>
                </div>
                {showItemList && <RestrauntItemList  dummy={dummy} items = {data.itemCards} />}
            </div>
        </div>
    )
}

export default RestrauntCategory;