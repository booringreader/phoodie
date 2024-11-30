// ! functional component
import {useState} from "react";

const User = (props) => {
    const [counter] = useState(0);
    return <div className="user-card">
        <h2>username: {props.name}</h2>
        <h3>location: srinagar</h3>
        <h3>count: {counter}</h3>
    </div>
}
export default User;