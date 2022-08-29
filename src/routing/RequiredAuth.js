import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { keys } from "../Constant";

const RequiredAuth = ({children}) => {
    const loginKey = localStorage.getItem(keys.loginToken)
    const navigate = useNavigate()

    useEffect(() => {   
        if (!loginKey) {     
          navigate("/", { replace: false });
        }
      }, []);
    
      return <div>{children}</div>
};

export default RequiredAuth;