import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const trainer = JSON.parse(localStorage.getItem("user"))

export default function TrainerHeader() {
    const nav = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        toast.success("Logout Successfully")
        localStorage.clear()
        nav('/login')
    }
    return (
        <>
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
                                                Open 24 hours, 7 days a week!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center text-lg-end">

                                </div>
                            </div>
                        </div>
                        <div className="nav-bar px-0 py-lg-0" style={{ height: 80 }}>
                            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                                <a href="#" className="navbar-brand-2">
                                    <h1 className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                                        <Link to="/trainer/dashboard" className="nav-item nav-link ">
                                            Dashboard
                                        </Link>
                                        <Link to="/trainer/users/manage" className="nav-item nav-link">
                                            Manage-Clients
                                        </Link>
                                        <Link to="/trainer/batches" className="nav-item nav-link">
                                            View Batches
                                        </Link>
                                        <Link to="/trainer/customer/progress" className="nav-item nav-link">
                                            Track progress
                                        </Link>
                                        <Link to="/trainer/excercise/manage" className="nav-item nav-link">
                                            Add Workout
                                        </Link>

                                        <Link to="/trainer/diet/manage" className="nav-item nav-link">
                                            Add Diet
                                        </Link>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                                Manage Profile
                                            </a>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/trainer/update/profile"
                                                >
                                                    Update Profile
                                                </Link>
                                                <Link to="/team" className="dropdown-item">
                                                    Change Password
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="nav-btn ps-3">
                                            {/* <button
                                                className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                                                data-bs-toggle="modal"
                                                data-bs-target="#searchModal"
                                            >
                                                <i className="fas fa-search" />
                                            </button> */}
                                            <a
                                                href="#"
                                                className="btn btn-primary py-2 px-4 ms-0 ms-lg-3"
                                                onClick={logout}
                                            >
                                                {" "}
                                                <span>Logout</span>
                                            </a>
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
