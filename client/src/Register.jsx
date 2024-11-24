import axios from "axios";
import { useState } from "react"

const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassowrd] = useState('');
    async function register(e) {
        e.preventDefault();
        await axios.post('/register', {username,password}, { withCredentials: true })
        
    }
    // vid paused 44:10
    return (
        <div className="bg-blue-50 h-screen flex items-center ">
            <form className="w-64 mx-auto mb-12" onSubmit={register}>
                <input
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    type="text"
                    placeholder="enter user name"
                    className="outline-blue-500 block w-full p-2 mb-2 rounded-sm border" />
                <input
                    value={password}
                    onChange={e => setPassowrd(e.target.value)}
                    type="password" placeholder="enter password"
                    className="outline-blue-500 block w-full p-2 mb-2 rounded-sm border" />
                <button className="block bg-blue-500 text-white w-full p-2 rounded-sm">Register</button>
            </form>
        </div>
    )
}

export default Register