// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminHeader() {
    const nav = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        toast.success("Logout Successfully")
        localStorage.clear()
        nav('/login')
    }
    return (
        <>
            {/* Modal Search Start */}
            <div
                className="modal fade"
                id="searchModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Search by keyword
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body d-flex align-items-center bg-primary">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input
                                    type="search"
                                    className="form-control p-3"
                                    placeholder="keywords"
                                    aria-describedby="search-icon-1"
                                />
                                <span
                                    id="search-icon-1"
                                    className="btn bg-light border nput-group-text p-3"
                                >
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid header-top">
                <div className="nav-shaps-2" />
                <div className="container d-flex align-items-center">
                    <div className="d-flex align-items-center h-100">
                        <a href="#" className="navbar-brand" style={{ height: 125 }}>
                            <h1 className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                                    <h1 className="text-primary mb-0">
                                        <i className="fas fa-hand-rock me-2" /> Fitness
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
                                        <Link to="/admin/dashboard" className="nav-item nav-link ">
                                            Dashboard
                                        </Link>
                                        <Link to="/admin/customers" className="nav-item nav-link ">
                                            Customers
                                        </Link>
                                        <Link to="/admin/trainer/manage" className="nav-item nav-link">
                                            Manage Trainers
                                        </Link>
                                        <Link to="/admin/batch/manage" className="nav-item nav-link">
                                            Manage Batches
                                        </Link>
                                        <Link to="/admin/requests/manage" className="nav-item nav-link">
                                            Manage Requests
                                        </Link>
                                        <Link to="/admin/contact/manage" className="nav-item nav-link">
                                            Manage Contact
                                        </Link>


                                        {/* <Link to="/contact" className="nav-item nav-link">
                                            Contact
                                        </Link> */}
                                        <div className="d-flex ms-lg-auto align-items-center">

                                            {
                                                localStorage.getItem("token") ? (

                                                    <div className="nav-btn ps-3">
                                                        <button
                                                            className="btn btn-primary py-2 px-3"
                                                            onClick={logout}
                                                        >
                                                            LOGOUT
                                                        </button>
                                                    </div>
                                                ) : (

                                                    <>
                                                        {/* Register Button */}
                                                        <div className="nav-btn ps-3">
                                                            <Link
                                                                to="/register"
                                                                className="btn btn-primary py-2 px-2"
                                                            >
                                                                <span>REGISTER</span>
                                                            </Link>
                                                        </div>

                                                        {/* Login Button */}
                                                        <div className="nav-btn ps-3">
                                                            <Link
                                                                to="/login"
                                                                className="btn btn-primary py-2 px-3"
                                                            >
                                                                <span>LOGIN</span>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )
                                            }

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

            {/* Header Start
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Welcome to Admin Page
                    </h4>
                    <ol
                        className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ol>
                </div>
            </div> */}
            {/* Header End */}
        </>

    )
}