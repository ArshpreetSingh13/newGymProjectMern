import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import ReactModal from "react-modal";
import { login } from "../../../services/userService";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: "40%",
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        zIndex: 9999
    }
};

export default function CustomerHeader() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('')
    let [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('')

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const nav = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        toast.success("Logout Successfully")
        localStorage.clear()
        nav('/login')
    }

    const submit = (e) => {
        e.preventDefault()
        console.log("hello");

        setLoading(true)
        let payload = {
            email: email,
            password: password
        }
        login(payload).then((res) => {
            if (res.data.success) {
                setLoading(false)
                toast.success(res.data.message)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("email", res.data.data.email)
                localStorage.setItem("name", res.data.data.name)
                localStorage.setItem("_id", res.data.data._id)
                localStorage.setItem("userType", res.data.data.userType)
                if (res.data.data.userType == 1) {
                    nav("/admin/dashboard")
                }
                else if (res.data.data.userType == 2) {
                    nav("/trainer/dashboard")
                }
                else if (res.data.data.userType == 3) {
                    nav("/")
                }
                else {
                    toast.error("Invalid user type")
                }
            } else {
                setLoading(false)
                toast.error(res.data.message)
            }
        }).catch((err) => {
            setLoading(false)
            console.log(err);
            toast.error(err)
        })
    }
    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-4 text-white mb-4 offset-4">Login</h1>
                    <form onSubmit={submit}>
                        <div className="row g-4">
                            <div className=" col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="email"
                                        className="form-control border-0"
                                        id="email" value={email}
                                        placeholder="Project"
                                        onChange={getEmail}
                                    />
                                    <label htmlFor="project">Enter Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="password"
                                        className="form-control border-0"
                                        id="subject" value={password}
                                        placeholder="Subject"
                                        onChange={getPassword}
                                    />
                                    <label htmlFor="subject">Enter Password</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue="#"
                                        id="flexCheck"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheck">
                                        I agree with the site privacy policy
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-section-col">
                                    <button className="btn-primary w-100 py-3 px-5" type="submit" >
                                        LOGIN
                                    </button>
                                    <button className="btn-primary w-100 py-3 px-5" type="submit" onClick={closeModal} >
                                        CANCEL
                                    </button>
                                    {/* <button className="btn-primary w-100 py-3 px-5" type="submit" onClick={ChangePassword} >
                                            Change Password
                                        </button> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </ReactModal>

            {/* Navbar & Hero Start */}
            <div className="container-fluid header-top">
                <div className="nav-shaps-2" />
                <div className="container d-flex align-items-center">
                    <div className="d-flex align-items-center h-100">
                        <a href="#" className="navbar-brand" style={{ height: 125 }}>
                            <h1 className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                                <i className="fas fa-dumbbell text-danger" />
                                <span style={{ fontWeight: 900, letterSpacing: '2px', color: 'white' }}>FITLAB</span>
                            </h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                    </div>
                    <div className="w-100 h-100">
                        <div
                            className="topbar px-0 py-2 d-none d-lg-block"
                            style={{ height: 45 }}
                        >
                            <div className="row gx-0 align-items-center">
                                <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                                    <div className="d-flex flex-wrap">
                                        <div className="pe-4">
                                            <a
                                                href="mailto:example@gmail.com"
                                                className="text-muted small"
                                            >
                                                <i className="fas fa-envelope text-primary me-2" />
                                                Fitlab@gmail.com
                                            </a>
                                        </div>
                                        <div className="pe-0">
                                            <a
                                                href="mailto:example@gmail.com"
                                                className="text-muted small"
                                            >
                                                <i className="fa fa-clock text-primary me-2" />
                                                OPEN 24 hours, 7 days a week!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center text-lg-end">
                                    <div className="d-flex justify-content-end">


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-bar px-0 py-lg-0" style={{ height: 80 }}>
                            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                                <a href="#" className="navbar-brand-2">
                                    <h1 className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                                        <i className="fas fa-dumbbell text-danger" />
                                        <span style={{ fontWeight: 900, letterSpacing: '2px', color: 'white' }}>FITLAB</span>
                                    </h1>
                                    {/* <img src="img/logo.png" alt="Logo"> */}
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse"
                                >
                                    <span className="fa fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="navbar-nav mx-0 mx-lg-auto">
                                        <Link to="/" className="nav-item nav-link">Home</Link>
                                        <Link to="/about" className="nav-item nav-link">About</Link>
                                        <Link to="/courses" className="nav-item nav-link">Courses</Link>
                                        {localStorage.getItem("token") && (
                                            <Link to="/batches" className="nav-item nav-link">Batches</Link>
                                        )}
                                        {localStorage.getItem("token") && (
                                            <div className="nav-item dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">My Fitness</a>
                                                <div className="dropdown-menu">
                                                    <Link to="/customer/diet" className="dropdown-item">My Diet</Link>
                                                    <Link to="/customer/exercises" className="dropdown-item">My Exercises</Link>
                                                    <Link to="/customer/progress" className="dropdown-item">My Progress</Link>
                                                    <Link to="/ai-coach" className="dropdown-item">AI Coach</Link>
                                                </div>
                                            </div>
                                        )}

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                            <div className="dropdown-menu">
                                                <Link to="/feature" className="dropdown-item">Our Features</Link>
                                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                                <Link to="/FOF" className="dropdown-item">404 Page</Link>
                                            </div>
                                        </div>

                                        <Link to="/contact" className="nav-item nav-link">Contact</Link>

                                        {/* ✅ Manage Profile - RIGHT AFTER Contact, only when logged in */}
                                        {localStorage.getItem("token") && (
                                            <div className="nav-item dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                                    Manage Profile
                                                </a>
                                                <div className="dropdown-menu">
                                                    <Link to="/customer/update/:_id" className="dropdown-item">Update Profile</Link>
                                                    <Link to="/customer/changePassword" className="dropdown-item">Change Password</Link>
                                                </div>
                                            </div>
                                        )}

                                        {/* Login/Logout Buttons */}
                                        <div className="d-flex ms-lg-auto align-items-center">
                                            {localStorage.getItem("token") ? (
                                                <div className="nav-btn ps-3">
                                                    <button className="btn btn-primary py-2 px-3" onClick={logout}>
                                                        LOGOUT
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="nav-btn ps-3">
                                                        <Link to="/register" className="btn btn-primary py-2 px-2">
                                                            <span>REGISTER</span>
                                                        </Link>
                                                    </div>
                                                    <div className="nav-btn ps-3">
                                                        <button className="btn btn-primary py-2 px-3" onClick={openModal}>
                                                            <span>LOGIN</span>
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className="nav-shaps-1" />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
        </>
    )
}
