import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function About({loggedInfo}) {
    console.log(loggedInfo)
    const navigate = useNavigate();
    const {isLogged} = loggedInfo

    useEffect(() => {
        if(isLogged === false) {
            return navigate("/");
        }
    }, [isLogged, navigate])
    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    {/* Profile Picture */}
                    <div className="col-md-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="User Profile"
                            className="rounded-circle img-fluid"
                        />
                    </div>
                    {/* User Details */}
                    <div className="col-md-8">
                        <h2>John Doe</h2>
                        <p className="text-muted">Software Engineer</p>
                        <p>
                            Passionate about creating impactful solutions using the latest
                            technology. Experienced in building web and mobile applications
                            with React, Node.js, and more.
                        </p>
                        <button className="btn btn-primary me-2">Edit Profile</button>
                        <button className="btn btn-outline-secondary">Message</button>
                    </div>
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="container mt-5">
                <h3>About John</h3>
                <p>
                    John is a dedicated professional with over 5 years of experience in
                    software development. He has worked on various projects across
                    industries, focusing on delivering high-quality solutions tailored to
                    client needs.
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Skills</h5>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Bootstrap</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Hobbies</h5>
                        <p>Reading, Traveling, Coding, Gaming</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
