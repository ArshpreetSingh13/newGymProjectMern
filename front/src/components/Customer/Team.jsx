export default function Team() {
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
                        Our Team
                    </h4>
                    <ol
                        className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Team</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Team Start */}
           <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-primary">Our Trainer</h4>
                        <h1 className="display-4 mb-4">Meet Our Amazing Team</h1>
                        <p className="mb-0">
                            Our team at FitLab is made up of passionate and certified fitness professionals dedicated to helping you reach your goals. With expertise in strength training, cardio, and nutrition guidance, our trainers provide the motivation, support, and knowledge you need to stay consistent, train smarter, and achieve lasting fitness results
                        </p>
                    </div>
                    <div className="row gy-5 gy-lg-4 gx-4">
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img
                                        src="/img/team-1.jpg"
                                        className="img-fluid w-100"
                                        alt="Image"
                                    />
                                    <div className="team-icon">
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4>Aisha Verma</h4>
                                    <p className="mb-0">Fitness & Aerobics</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img
                                        src="/img/team-2.jpg"
                                        className="img-fluid w-100"
                                        alt="Image"
                                    />
                                    <div className="team-icon">
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4>David Willson</h4>
                                    <p className="mb-0">Functional FItness Coach</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img
                                        src="/img/team-3.jpg"
                                        className="img-fluid w-100"
                                        alt="Image"
                                    />
                                    <div className="team-icon">
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4>Michael Carter</h4>
                                    <p className="mb-0">Powerlifting Coach</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img
                                        src="/img/team-4.jpg"
                                        className="img-fluid w-100"
                                        alt="Image"
                                    />
                                    <div className="team-icon">
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-primary btn-sm-square">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4>Rajat Singh</h4>
                                    <p className="mb-0">Bodybuilding Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </>

    )
}