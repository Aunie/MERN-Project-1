import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token; // 

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    };

    // JWT AUTHENTCATION - to get the currently logged User Data
    const userAuthentication = async () => {
        try {
            const response = await fetch ("http://localhost:5000/api/auth/user", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);

                console.log("User Data: ", data.userData);
            }
        } catch (error) {
            console.log("Error fetching the user data");
        }
    }
    useEffect(() => {
        userAuthentication()
    },[]);
    return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, LogoutUser, user}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return authContextValue;
}