import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // ? state variable declaration
    const [listRest, setlistRest] = useState([]); // default values to listRest state variable are passed through useState()
    const [searchText, setsearchText] = useState([]);
    const [searchRest, setsearchRest] = useState([]);

    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    useEffect(() => { //? fetching data from API 
        fetchData();
    }, []);

    // ? function declaring method to fetch data from API
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setlistRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) // optional chaining
        setsearchRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const {loggedInUser, setUserName} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>OFFLINE</h1>
        );

    // ? contents of the body component
    return listRest.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search my-2 ml-4 p-4">
                    {/* ? search bar */}
                    <input type="text" className="border border-solid border-black rounded-md" value={searchText} onChange={(e) =>
                        setsearchText(e.target.value)}></input>
                    <button className="px-3 bg-green-200 m-2 rounded-lg" onClick={() => {
                        const filteredRes = listRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setsearchRest(filteredRes);
                    }}>Search
                    </button>
                </div>
                <div className="m-2 p-4 flex items-center">
                    {/*"top restaurant" filter button */}
                    <button className="search px-4 py-1 bg-cyan-200 rounded-lg" onClick={() => {
                        const filteredList = listRest.filter((res) => res.info.avgRating > 4.3);
                        setsearchRest(filteredList); // ?  with filteredList
                    }}>Top Restaurants
                    </button>
                </div>
                <div className="m-2 p-4 flex items-center">
                    <label>Username: </label>
                    <input className="border border-black mx-2 rounded-md pl-2 pb-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value || username)}></input>
                </div>
            </div>

            <div className="resCard-container flex flex-wrap">
                {searchRest.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.avgRating < 4.3 ? <PromotedRestaurant resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                    </Link>))}
            </div>
        </div >
    );
};

export default Body;