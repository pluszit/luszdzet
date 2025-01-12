import './App.css'
import {AuthProvider} from "./auth/AuthProvider.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./auth/PrivateRoute.tsx";
import {Login} from "./login/Login.tsx";
import {Main} from "./main/Main.tsx";

function App() {

    return (
        <AuthProvider>
            <HashRouter basename="/">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/main"
                        element={
                            <PrivateRoute>
                                <Main />
                            </PrivateRoute>
                        }
                    />
                    **<Route path="*" element={<Login />} />**
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App
