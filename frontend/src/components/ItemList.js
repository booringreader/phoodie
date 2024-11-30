import { useDispatch } from "react-redux";
import { ITEM_IMAGE } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch(); // useSelector for reading, useDispatch for writing
    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item)); // action.payload = cart
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-300 border-b-2 text-left">
                    <div className="py-1 flex justify-between">
                        <div>
                            <span className="p-2">{item?.card?.info?.name}</span>
                            <span className="text-sm text-gray-600">| ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.finalPrice / 100 || item?.card?.info?.price / 100}</span>
                            <p className="text-xs text-gray-400 text-balance">{item.card.info.description}</p>
                        </div>
                        <div className="relative">
                            <div className="Img-container overflow-hidden w-[120px]">
                                <img src={ITEM_IMAGE + item?.card?.info?.imageId}></img>
                            </div>
                            <button
                                className="absolute left-[1px] bottom-1 bg-white text-green-600 px-5 py-[2px] rounded-lg shadow-lg transform -translate-y-1/4 -translate-x-1/4"
                                onClick={() => handleAddItem(item)}
                            // onClick={handleAddItem()}
                            // onClick={handleAddItem(item)} // calling a function right away
                            >ADD</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ItemList;