import { useState } from "react";
import { variables } from './Variables';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const users = [{ username: "Jane", password: "testpassword" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(variables.API_URL + 'login?username=' + username + '&password=' + password)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    //alert(JSON.stringify(data));
                    alert('User Found');
                    // this.props.navigate('/home');
                    navigate("/home");
                } else {
                    alert('User Not found!!');
                }
            })
    };
    return (
        <div>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                UserName   <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                /><br /><br />
                Password  <input
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};
export default Login;