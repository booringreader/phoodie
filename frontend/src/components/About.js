import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
   return (
      <div>
         <h1>react routing configuration test</h1>
         <div>
            LoggedInUser:
            <UserContext.Consumer>
               {(data) => <span className="px-1 font-bold">{data.loggedInUser}</span>}
            </UserContext.Consumer>
         </div>
         <div className="user">
            <ul>
               <li><UserClass name={"@boorignreader (UserClass)"} /></li>
            </ul>
         </div>
      </div>
   )
}

export default About;