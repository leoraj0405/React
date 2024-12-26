import React, { useEffect } from 'react'
import  { useNavigate, Outlet } from 'react-router-dom'



function Home({loggedInfo}) {
    const navigate = useNavigate();
    const {isLogged, userName } = loggedInfo

    useEffect(() => {
        if(isLogged === false) {
            return navigate("/");
        }
    }, [isLogged, navigate])

    return (
        <div>
            <div className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1>Welcome, {userName}!</h1>
                    <p className="lead">Your personalized dashboard at a glance</p>
                    <button className="btn btn-light btn-lg mt-3">Get Started</button>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Profile</h5>
                                <p className="card-text">View and update your personal information.</p>
                                <a href="profile" className="btn btn-primary">
                                    Go to Profile
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Settings</h5>
                                <p className="card-text">Manage your preferences and account settings.</p>
                                <a href="managesetting" className="btn btn-primary">
                                    Manage Settings
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Support</h5>
                                <p className="card-text">Need help? Contact our support team anytime.</p>
                                <a href="/support" className="btn btn-primary">
                                    Get Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Home
