import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const pass = formData.get('password');

        const raw = JSON.stringify({
            "userId": username,
            "password": pass
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };
            let requset = fetch("http://localhost:4000/api/user/login", requestOptions)
            requset.then((response) => {
                if(response.status === 200 ){
                    props.setLoginUser(true, username)
                    navigate('/home');
                }else{
                     alert('Invalid user')
                }
            })
    }


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow" style={{ width: '25rem' }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login
