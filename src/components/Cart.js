import { useSelector, useDispatch } from "react-redux"
import RestrauntItemList from "./RestrauntItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () =>{
    const cartItems = useSelector( (store)=>store.cart.items )
    const dispatch = useDispatch()

    const handleClearCart = () => {
        //Dispatch an action
        dispatch(clearCart())
    }


    return(
        <div className=" text-center m-8 p-8" >
            <h1 className="font-bold text-2xl" >Cart Page</h1>
            <div className="w-6/12 m-auto" >
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={()=>handleClearCart()} >Clear Cart</button>
                <RestrauntItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart