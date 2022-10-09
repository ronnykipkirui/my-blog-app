import "./login.css"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="register">
            <span className="registertittle">Login</span>

            <form className="registerform">

                <label>Email</label>
                <input className="registerinput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerinput" type="text" placeholder="Enter your password..." />
                <button className="loginbutton">Login
                </button>
                <button className="registerbutton">
                    <Link className="link" to="/Register">Register</Link>
                </button>

            </form>
        </div>
    )
}
