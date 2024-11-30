import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-handler">
            <h1>page NOT configured 😢</h1>
            <h3>{err.error.message}</h3>
        </div>
    )
}

export default Error;