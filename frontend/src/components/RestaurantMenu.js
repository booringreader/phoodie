import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
    const{resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setshowIndex] = useState(0);

    if(resInfo === null) {return <Shimmer />;}

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-lg font-semibold">{cuisines.join(", ")}</p>
            <h3>{avgRating} 🌟</h3>
            {categories.map((category, index) => 
                <MenuCategory 
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)}
                />
            )}
        </div>
    )
}

export default RestaurantMenu;