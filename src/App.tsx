import './App.css'
import {AuthProvider} from "./auth/AuthProvider.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./auth/PrivateRoute.tsx";
import {Login} from "./login/Login.tsx";
import {Main} from "./main/Main.tsx";

function App() {

    return (
        <AuthProvider>
            <BrowserRouter basename={"/luszdzet"}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/main"
                        element={
                            <PrivateRoute>
                                <Main />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App
