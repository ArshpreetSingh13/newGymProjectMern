export default function Features() {
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
                        Our Features
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
                        <li className="breadcrumb-item active text-primary">Feature</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Features Start */}
            <div className="container-fluid feature bg-light py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-6 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-primary"> Why choose us?</h4>
                        <h1 className="display-4 mb-4">BEST GYM IN THE CITY</h1>
                        <p className="mb-0 fs-4">
                            Certified Trainers,
                            Modern Equipment,
                            Personalized Workout Plans,
                            Nutrition Guidance,
                            Flexible Timings,
                            Affordable Membership,
                            <br />

                            Train Smart. Train Strong. Train at FitLab. 🔥
                        </p>
                    </div>
                    <br />
                    <div className="feature-carousel ">

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="feature-img">
                                            <img src="/img/feature-1.jpg" className="img-fluid " alt="" />
                                        </div>
                                        <div className="feature-content p-4">
                                            <h4 className="mb-3">Work Your Butt Off</h4>
                                            <p className="mb-4">
                                                Push your limits, and give your maximum effort to achieve the strength you always wanted.
                                            </p>
                                            <a href="#" className="btn btn-primary py-2 px-4">
                                                {" "}
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="feature-img">
                                            <img src="/img/feature-2.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="feature-content p-4">
                                            <h4 className="mb-3">Get In The groove</h4>
                                            <p className="mb-4">
                                                Find your rhythm, enjoy every workout, and make fitness a part of your daily lifestyle.
                                            </p>
                                            <a href="#" className="btn btn-primary py-2 px-4">
                                                {" "}
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="feature-img">
                                            <img src="/img/feature-3.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="feature-content p-4">
                                            <h4 className="mb-3">It's more Than A Game</h4>
                                            <p className="mb-4">
                                                Fitness is not just a workout; it’s a lifestyle, discipline, and commitment.
                                            </p>
                                            <a href="#" className="btn btn-primary py-2 px-4">
                                                {" "}
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="feature-item">
                                        <div className="feature-img">
                                            <img src="/img/feature-4.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="feature-content p-4">
                                            <h4 className="mb-3">Get Fit Don't Quit</h4>
                                            <p className="mb-4">
                                                Stay committed to your goals, push your limits, and never give up, now matter what!
                                            </p>
                                            <a href="#" className="btn btn-primary py-2 px-4">
                                                {" "}
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                    {/* <div className="feature-shaps" /> */}
                </div>
            </div>
            {/* Features End */}
        </>

    )
}