import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getIp = () => {
        fetch('https://ipinfo.io?token=bb263c59053c8a')
            .then((response) => response.json())
            .then((data) =>{
                sessionStorage.setItem('ip', JSON.stringify(data.ip));
            });
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        if (token) {
            navigate('/dashboard');
        }
    }

    const logOut = () => {
        sessionStorage.clear();
        navigate('/login')
    }

    const http = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        headers: {
            "content-type": "application/json",
            "Authorization":`Bearer ${token}`
        }
    });
    return {
        http,
        token,
        setToken: saveToken,
        getToken,
        logOut,
        getUser,
        getIp
    }
}