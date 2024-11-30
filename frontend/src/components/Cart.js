import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart())
    }
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className=" text-center p-4 m-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-1 m-2 rounded-md bg-gray-300" onClick={handleClear}>Clear Cart</button>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;