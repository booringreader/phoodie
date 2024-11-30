import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo } = resData?.info;  // ? optional chaining
    const stylecard = { backgroundColor: "rgb(183, 172, 183)" } // ? JS object
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[250px] rounded-md bg-gray-200 hover:bg-gray-300">
            <div className="resImage-container rounded-lg overflow-hidden">
                <img alt="resImage" className="res-logo" src={CDN_URL + cloudinaryImageId} />
            </div>
            <h3 className="font-bold">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{avgRating}</h6>
            <h6>{deliveryTime}</h6>
            <h6>{costForTwo}</h6>
            <h6>{loggedInUser}</h6>
        </div>
    )
}
export const withPromotedLabel = (RestaurantCard) => { //? taking component as input
    return (props) => { //? returning a component(component itself has a return statement)
        return (
            <div>
                <label className="absolute bg-black text-white px-1 mt-2 rounded-md">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;