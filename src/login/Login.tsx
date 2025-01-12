import {useState} from "react";
import {useAuth} from "../auth/AuthContext.tsx";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    // @ts-expect-error need to fix this
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            await login(email, password);
            navigate("/main");
        } catch (err) {
            setError("Nie udało się zalogować");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Zaloguj się</button>
            </form>
        </div>
    );
}