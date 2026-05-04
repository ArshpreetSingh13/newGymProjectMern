export default function Courses() {
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
                        Our Courses
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
                        <li className="breadcrumb-item active text-primary">Course</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Fitness Goal start */}
                     <div className="container-fluid goal pt-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="goal-content">
                                <h4 className="text-primary">Fitness Goal</h4>
                                <h1 className="display-4 mb-4">
                                    Complete your possibilities, Achieve Your Fitness Goals.
                                </h1>
                                <div className="goal-item d-flex p-4">
                                    <div className="d-flex me-4">
                                        <div
                                            className="bg-primary d-inline p-3"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <img src="/img/icon-1.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Free Fitness Training</h4>
                                        <p className="text-white mb-0">
                                            Get stronger, healthier, and more confident with our free training!
                                        </p>
                                    </div>
                                </div>
                                <div className="goal-item d-flex p-4 mb-4">
                                    <div className="d-flex me-4">
                                        <div
                                            className="bg-primary d-inline p-3"
                                            style={{ width: 80, height: 80 }}
                                        >
                                            <img src="/img/icon-6.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Cardio and Strength</h4>
                                        <p className="text-white mb-0">
                                            Increase endurance, burn fat, stay energetic and build muscle every single day.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="h-100">
                                <img
                                    src="img/fitness-goal-banner.png"
                                    className="img-fluid h-100"
                                    style={{ objectFit: "cover" }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fitness Goal End */}
            {/* Courses Start */}
            <div className="container-fluid courses overflow-hidden py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-primary"> Our Courses</h4>
                        <h1 className="display-4 text-white mb-4">Out Our Highlights Below</h1>
                        <p className="text-white mb-0">
                            At FitLab, our courses are designed to help you build strength, improve endurance, and transform your lifestyle. From cardio and strength training to personalized workout plans, our expert trainers guide you every step of the way. Whether you're a beginner or experienced, our programs help you achieve real fitness results.
                        </p>
                    </div>
                    <div className="row gy-4 gx-0 justify-content-center">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="courses-item">
                                <div className="courses-item-inner p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="courses-icon-img p-3">
                                            <img src="img/icon-1.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: 25, height: 25 }}>
                                                    <img
                                                        src="img/testimonial-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="mb-0">Paul Flavius</p>
                                            </div>
                                            <div className="courses-date">
                                                <p className="mb-1">Date: Saturday</p>
                                                <p className="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="d-inline-block h4 mb-3">
                                        {" "}
                                        Gym Fitness Class
                                    </a>
                                    <p className="mb-4">
                                        Strength, Endurance, Energy, Power, Flexibility, Motivation, Performance, Discipline, Results.
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4">
                                        {" "}
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="courses-item">
                                <div className="courses-item-inner p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="courses-icon-img p-3">
                                            <img src="/img/icon-2.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: 25, height: 25 }}>
                                                    <img
                                                        src="img/testimonial-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="mb-0">Paul Flavius</p>
                                            </div>
                                            <div className="courses-date">
                                                <p className="mb-1">Date: Saturday</p>
                                                <p className="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="d-inline-block h4 mb-3">
                                        {" "}
                                        Power Lifting Class
                                    </a>
                                    <p className="mb-4">
                                        Strength, Power, Deadlift, Squat, Benchpress, Performance,Technique, Progress, Dominance.
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4">
                                        {" "}
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="courses-item">
                                <div className="courses-item-inner p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="courses-icon-img p-3">
                                            <img src="img/icon-3.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: 25, height: 25 }}>
                                                    <img
                                                        src="img/testimonial-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="mb-0">Paul Flavius</p>
                                            </div>
                                            <div className="courses-date">
                                                <p className="mb-1">Date: Saturday</p>
                                                <p className="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="d-inline-block h4 mb-3">
                                        {" "}
                                        Body Building Class
                                    </a>
                                    <p className="mb-4">
                                        Muscle, Strength, Growth, Aesthetics, Hypertrophy, Discipline, Training, Transformation
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4">
                                        {" "}
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="courses-item">
                                <div className="courses-item-inner p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="courses-icon-img p-3">
                                            <img src="img/icon-4.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: 25, height: 25 }}>
                                                    <img
                                                        src="img/testimonial-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="mb-0">Paul Flavius</p>
                                            </div>
                                            <div className="courses-date">
                                                <p className="mb-1">Date: Saturday</p>
                                                <p className="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="d-inline-block h4 mb-3">
                                        {" "}
                                        Aerobics &amp; Skipping Class
                                    </a>
                                    <p className="mb-4">
                                        Cardio, Endurance, Rhythm, Energy, Agility, Fat-burn, Stamina, Coordination.
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4">
                                        {" "}
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="courses-item">
                                <div className="courses-item-inner p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="courses-icon-img p-3">
                                            <img src="img/icon-5.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: 25, height: 25 }}>
                                                    <img
                                                        src="img/testimonial-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="mb-0">Paul Flavius</p>
                                            </div>
                                            <div className="courses-date">
                                                <p className="mb-1">Date: Saturday</p>
                                                <p className="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="d-inline-block h4 mb-3">
                                        {" "}
                                        Boxing Class
                                    </a>
                                    <p className="mb-4">
                                        Strength, Speed, Power, Footwork, Endurance, Discipline, Focus, Confidence.
                                    </p>
                                    <a href="#" className="btn btn-primary py-2 px-4">
                                        {" "}
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="courses-item">
                                <div className="courses-item-inner p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="courses-icon-img p-3">
                                            <img src="img/icon-6.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: 25, height: 25 }}>
                                                    <img
                                                        src="img/testimonial-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="mb-0">Paul Flavius</p>
                                            </div>
                                            <div className="courses-date">
                                                <p className="mb-1">Date: Saturday</p>
                                                <p className="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="d-inline-block h4 mb-3">
                                        {" "}
                                        Cardio Class
                                    </a>
                                    <p className="mb-4">
                                        Endurance, Energy, Fat-burn, Stamina, Heart-health, Movement, Fitness, Vitality.
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
            {/* Courses End */}
            {/* Testimonial Start */}
            {/* <div
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
                        className="testimonial-carousel owl-carousel wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                            <span className="fa fa-quote-left fa-3x quote-icon" />
                            <div className="testimonial-img mb-4">
                                <img
                                    src="img/testimonial-1.jpg"
                                    className="img-fluid"
                                    alt="Image"
                                />
                            </div>
                            <p className="fs-4 text-white mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi
                                deleniti ratione similique eaque blanditiis fugit voluptas ex
                                officiis expedita repellat doloribus veniam delectus tempore,
                                laudantium, aliquam ad? Rem, accusantium?
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
                                    src="img/testimonial-2.jpg"
                                    className="img-fluid"
                                    alt="Image"
                                />
                            </div>
                            <p className="fs-4 text-white mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi
                                deleniti ratione similique eaque blanditiis fugit voluptas ex
                                officiis expedita repellat doloribus veniam delectus tempore,
                                laudantium, aliquam ad? Rem, accusantium?
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
                                    src="img/testimonial-3.jpg"
                                    className="img-fluid"
                                    alt="Image"
                                />
                            </div>
                            <p className="fs-4 text-white mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi
                                deleniti ratione similique eaque blanditiis fugit voluptas ex
                                officiis expedita repellat doloribus veniam delectus tempore,
                                laudantium, aliquam ad? Rem, accusantium?
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
                    </div>
                </div>
            </div> */}
            {/* Testimonial End */}
        </>

    )
}