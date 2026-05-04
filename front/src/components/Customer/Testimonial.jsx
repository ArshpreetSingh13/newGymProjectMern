import { Link } from "react-router-dom";
export default function Testimonial() {
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
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Testimonial
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
                        <li className="breadcrumb-item active text-primary">Testimonial</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Testimonial Start */}
             <div
                className="container-fluid testimonial bg-dark py-5"
                style={{ marginBottom: 90 }}
            >
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-primary">Testimonial</h4>
                        <h1 className="display-4 text-white">What Our Customers Are Saying</h1>
                    </div>
                    <div
                        className="testimonial-carousel  wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <div style={{marginLeft:'46.5%'}} className="d-block">
                            <h4 className="text-white">Client Name</h4>
                            <p className="m-1 pb-3">Profession</p>
                            <div className="d-flex">
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-white" />
                            </div>
                        </div>
                        <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                            <span className="fa fa-quote-left fa-3x quote-icon" />
                            <div className="testimonial-img mb-4">
                                <img
                                    src="/img/testimonial-1.jpg"
                                    className="img-fluid"
                                    alt="Image"
                                />
                            </div>
                            <p className="fs-4 text-white mb-4">
                                "Joining FitLab Gym was the best decision for my fitness journey. The trainers are supportive, the equipment is modern, and the environment keeps me motivated every day."
                            </p>
                            <div className="d-block">
                                <h4 className="text-white">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                            <span className="fa fa-quote-left fa-3x quote-icon" />
                            <div className="testimonial-img mb-4">
                                <img
                                    src="/img/testimonial-2.jpg"
                                    className="img-fluid"
                                    alt="Image"
                                />
                            </div>
                            <p className="fs-4 text-white mb-4">
                                "FitLab Gym helped me stay consistent and achieve my fitness goals. The trainers guide you properly and the workouts are really effective."
                            </p>
                            <div className="d-block">
                                <h4 className="text-white">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-primary" />
                                    <i className="fas fa-star text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                            <span className="fa fa-quote-left fa-3x quote-icon" />
                            <div className="testimonial-img mb-4">
                                <img
                                    src="/img/testimonial-3.jpg"
                                    className="img-fluid"
                                    alt="Image"
                                />
                            </div>
                            <p className="fs-4 text-white mb-4">
                               "Amazing gym with great trainers and a motivating atmosphere. FitLab helped me become stronger, healthier, and more confident."
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </>

    )
}