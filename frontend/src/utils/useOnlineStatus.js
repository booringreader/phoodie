// ? while creating hooks, establish a contract : what does the hook take as input and what does it return
// ? local state variable "OnlineStatus" keeps track of online status,
// ? if user online, it is "true" if not "false"
// ! event listener is triggered whenever the "OnlineStatus" goes false; the user: offline

import {useState, useEffect} from "react";
const useOnlineStatus = () => {
    const [OnlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => { // check whether online ?
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);
    return OnlineStatus; // boolean
}
export default useOnlineStatus;