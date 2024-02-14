import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token,setToken] = useState(localStorage.getItem("token"))  
  const [loggedUser,setLoggedUser] = useState("");
  const authorizationToken = `Bearer ${token}`

  const storeTokenInLS = (serverToken) =>{
    localStorage.setItem('token',serverToken)
    setToken(serverToken);
  };
 
  let isLoggedIn = !!token;
  console.log(isLoggedIn)

  const LogoutUser =()=>{
    setToken("");
    return localStorage.removeItem("token")
  }
  //jwt authentication- to get currently logged in user data
const userAuthentication= async() =>{
  try {
    const response = await fetch('http://localhost:5000/api/auth/user',
    {
      method:"GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
   if(response.ok){
    const data = await response.json();
    console.log("user data",data.userData);
    setLoggedUser(data.userData);
   }
  } catch (error) {
    console.error("Error fetching user data")
  }
}

  useEffect(()=>{
    userAuthentication();
  },[])

    return (
    <AuthContext.Provider value={{ isLoggedIn ,storeTokenInLS, LogoutUser, loggedUser, authorizationToken}}>
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);
  
    if (!authContext) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return authContext;
  };