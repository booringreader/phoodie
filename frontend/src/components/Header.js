import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart?.items || []); // selectors are hooks
    console.log(cartItems)


    return (
        <div className="flex justify-between bg-[#FFDF0F] bg-opacity-90 shadow-md mb-2 px-2 h-28">
            <div className="logo-container">
                <img className="w-8" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-5">Online: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="pl-4 text-xl text-amber-950 font-semibold">
                        <Link to="/cart">Cart({cartItems.length})</Link>
                    </li>
                    <li className="px-2 text-lg text-amber-950">
                        <Link to="/">| Home</Link>
                    </li>
                    <li className="px-2 text-lg text-amber-950">
                        <Link to="/grocery">Instamart</Link>
                    </li>
                    <li className="px-2 text-lg text-amber-950">
                        <Link to="about">About Us</Link>
                    </li>
                    <li className="px-2 text-lg text-amber-950">
                        <Link to="contact">Contact Us</Link>
                    </li>
                    <button className="login border px-2 rounded-lg bg-white border-black" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-2">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;