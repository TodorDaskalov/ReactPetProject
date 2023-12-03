import { useEffect, useContext } from "react";
import { logoutFunc } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../appPaths";
import AuthContext from "../contexts/AuthContext";

export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        logoutFunc().then(() => {
            logoutHandler();
            navigate(Path.Home);
        });
    }, []);
}
