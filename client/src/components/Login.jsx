    import React from "react";

    function Login() {

        console.log(process.env.REACT_APP_FIREBASE_API_KEY)

        return (
            <h1>firebase id is {process.env.REACT_APP_FIREBASE_API_KEY}</h1>
        );
    }

    export default Login;
