import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allBatch } from "../../services/batchService";

import BMICalculator from "../layout/customerLayout/BmiCalculator";

export default function Home() {
    const [batches, setBatches] = useState([])

    useEffect(() => {
        getAllBatch()
    }, [])

    const getAllBatch = () => {
        allBatch({})
            .then((res) => {
                if (res.data.success) {
                    setBatches(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const formatDate = (date) => {
        if (!date) return "-"
        return date.toString().substring(0, 10)
    }

    const trainerName = (trainerAllot) => {
        if (!trainerAllot) return "-"
        return trainerAllot.name || trainerAllot
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
            {/* Carousel Start */}
            <div className="header-carousel  overflow-hidden bg-dark">
                <div className="header-carousel-item hero-section">
                    <div className="hero-bg-half-2" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-7 animated fadeInLeft">
                                    <div className="text-sm-center text-md-start">
                                        <h4 className="text-primary text-uppercase fw-bold mb-3 fs-2">
                                            Welcome to the FITLAB
                                        </h4>
                                        <h1 className="display-2 text-white mb-4">
                                            Push yourself because no one else will!
                                        </h1>
                                        <p className="mb-5 fs-5">
                                            FITLAB Gym is more than just a place to work out — it's a place where goals become reality. With modern equipment, expert trainers, and a motivating environment, we help you push beyond limits and transform into the best version of yourself. Your fitness journey starts here.
                                        </p>
                                        <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                            <Link className="btn btn-dark py-3 px-4 px-md-5 me-2" to="/login">
                                                {" "}
                                                <span>JOIN NOW</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
            {/* About Start */}
            <div className="container-fluid about pt-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-content h-100">
                                <h4 className="text-primary">About FITLAB</h4>
                                <h1 className="display-4 text-white mb-4">
                                    We are the best at fulfilling your potential and achieving your
                                    goals.
                                </h1>

                                <div className="tab-class pb-4">
                                    <ul className="nav d-flex mb-2">
                                        <li className="nav-item mb-3">
                                            <a
                                                className="d-flex py-2 active"
                                                data-bs-toggle="pill"
                                                href="#tab-1"
                                            >
                                                <span style={{ width: 150 }}>Our Mission</span>
                                            </a>
                                        </li>
                                        <li className="nav-item mb-3">
                                            <a
                                                className="d-flex py-2 mx-3"
                                                data-bs-toggle="pill"
                                                href="#tab-2"
                                            >
                                                <span style={{ width: 150 }}>Our Vision</span>
                                            </a>
                                        </li>
                                        <li className="nav-item mb-3">
                                            <a
                                                className="d-flex py-2"
                                                data-bs-toggle="pill"
                                                href="#tab-3"
                                            >
                                                <span style={{ width: 150 }}>Our Goal</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="tab-1" className="tab-pane fade show p-0 active">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="d-flex align-items-center border-top border-bottom py-4">
                                                        <span className="fas fa-rocket text-white fa-4x me-4" />
                                                        <p className="mb-0">
                                                            Our MISION at FitLab Gym is to inspire healthier lifestyles by providing expert training, modern equipment, and a supportive environment that helps individuals build strength, confidence, discipline, and achieve lasting fitness results. 💪
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab-2" className="tab-pane fade show p-0">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="d-flex align-items-center border-top border-bottom py-4">
                                                        <span className="fas fa-rocket text-white fa-4x me-4" />
                                                        <p className="mb-0">
                                                            Our VISION is to become a leading fitness community that inspires people to live healthier lives by promoting strength, discipline, and confidence through innovative training, expert guidance, and a motivating environment. 💪
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab-3" className="tab-pane fade show p-0">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="d-flex align-items-center border-top border-bottom py-4">
                                                        <span className="fas fa-rocket text-white fa-4x me-4" />
                                                        <p className="mb-0">
                                                            Our GOAL is to help members achieve their fitness goals by providing personalized training, modern equipment, expert guidance, and a motivating environment that supports strength, health, confidence, and long-term wellness. 💪
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 align-items-center">
                                    <div className="col-sm-6">
                                        <Link to="/courses" className="btn btn-primary py-3 px-5">
                                            {" "}
                                            <span>VIEW PLANS</span>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex flex-shrink-0 ps-4">
                                            <a
                                                href="#"
                                                className="btn btn-light btn-lg-square position-relative wow tada"
                                                data-wow-delay=".9s"
                                            >
                                                <i className="fa fa-phone-alt fa-2x" />
                                                <div
                                                    className="position-absolute"
                                                    style={{ top: 5, right: 5 }}
                                                >
                                                    <span>
                                                        <i className="fa fa-comment-dots text-dark" />
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="d-flex flex-column ms-3">
                                                <span>Call to Our Experts</span>
                                                <a href="tel:+ 0123 456 7890">
                                                    <span className="text-white">Free: + 0123 456 7890</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="about-img h-100">
                                <div className="about-img-inner d-flex h-100">
                                    <img
                                        src="/img/about-2.png"
                                        className="img-fluid w-100"
                                        style={{ objectFit: "cover" }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
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

                            Train Smart. Train Strong. Train at FitLab. 
                        </p>
                    </div>
                    <br />
                    <div className="feature-carousel ">

                        <div className="container">
                            <div className="row g-4">
                                {batches.map((batch, index) => (
                                    <div className="col-md-6 col-lg-3" key={batch._id}>
                                        <div className="feature-item wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                                            <div className="feature-img">
                                                <img src={`/img/feature-${(index % 4) + 1}.jpg`} className="img-fluid w-100" alt={batch.batchName} />
                                            </div>
                                            <div className="feature-content p-4">
                                                <h4 className="mb-3">{batch.batchName}</h4>
                                                <p className="mb-2"><strong>Trainer:</strong> {trainerName(batch.trainerAllot)}</p>
                                                <p className="mb-2"><strong>Time:</strong> {batch.time} ({batch.sessionType})</p>
                                                <p className="mb-2"><strong>Total Slots:</strong> {batch.totalSlots}</p>
                                                <p className="mb-4">{formatDate(batch.startDate)} to {formatDate(batch.endDate)} | Rs. {batch.fees}</p>
                                                <Link to="/batches" className="btn btn-primary py-2 px-4">
                                                    <span>View Batch</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {!batches.length && <>
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
                                </>
                                }
                            </div>
                        </div>





                    </div>
                    {/* <div className="feature-shaps" /> */}
                </div>
            </div>
            {/* Features End */}
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
            {/* BMI Calculator Start */}
            <div className="container-fluid py-5" style={{ background: "#f8f8f8" }}>
                <div className="container py-5">

                    {/* Header */}
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
                        <h1 className="display-4 fw-bold text-uppercase mb-2">Calculate Your BMI</h1>
                        <div style={{ width: 40, height: 3, background: "#c0392b", margin: "10px auto 20px" }} />
                        <p className="fs-5">
                            Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.<br />
                            Use The Tool Below To Compute Yours
                        </p>
                    </div>

                    {/* Calculator Box */}
                    <BMICalculator />


                </div>
            </div>
            {/* BMI Calculator End */}
            {/* Explore Fitness Start */}
            <div
                className="container-fluid explore py-5 wow zoomIn"
                data-wow-delay="0.2s"
            >
                <div className="container py-5 text-center">
                    <h1 className="display-1 text-white mb-0"> Begin your Journey</h1>
                    <Link
                        className="btn btn-primary py-3 px-4 px-md-5 me-2"
                        to="/contact"
                    >
                        <i className="fas me-2" /> <span>JOIN NOW</span>
                    </Link>
                </div>
            </div>
            {/* Explore Fitness End */}
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
                        className="testimonial-carousel  wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <div style={{ marginLeft: '46.5%' }} className="d-block">
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
            </div> */}
            {/* Testimonial End */}

            {/* {Gym Fees start} */}

            {/* {Gym Fees start} */}
            <div className="container-fluid py-5" style={{ background: "#fff" }}>
                <div className="container py-5">

                    {/* Section Header */}
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary text-uppercase fw-bold">Membership Plans</h4>
                        <div style={{ width: 40, height: 3, background: "#c0392b", margin: "10px auto 16px" }} />
                        <h1 className="display-4 mb-3">FITLAB Membership Fee Packages</h1>
                        <p className="mb-0 fs-5">
                            Designed by the world's best industry experts to help you get the best possible results.
                            Find a comprehensive fitness plan, for free. Ready... Set... Sweat!
                        </p>
                    </div>

                    {/* Cards Row */}
                    <div className="row g-4 justify-content-center">

                        {/* Basic Plan */}
                        <div className="col-md-6 col-lg-4">
                            <div className="text-center p-4 h-100" style={{ border: "1px solid #ddd", borderRadius: 10, background: "#fff" }}>
                                <h3 className="text-primary text-uppercase fw-bold mb-1">Basic</h3>
                                <p className="text-muted text-uppercase mb-3" style={{ fontSize: 12, letterSpacing: 1 }}>Daily Plan</p>
                                <hr />
                                <div className="text-start mb-2">
                                    <p className="mb-1"><span className="text-primary me-2">✓</span><strong>₹500</strong>  — <small className="text-muted">1 Day</small></p>
                                    <p className="mb-0"><span className="text-primary me-2"></span><strong>(INCLUDES GST)</strong></p>
                                </div>
                                <hr />
                                <Link to="/register" className="btn btn-primary py-2 px-4 mt-2 text-uppercase fw-bold">
                                    Join Now
                                </Link>
                            </div>
                        </div>

                        {/* Premium Plan - Featured */}
                        <div className="col-md-6 col-lg-4">
                            <div className="text-center p-4 h-100" style={{ border: "2px solid #c0392b", borderRadius: 10, background: "#fff" }}>
                                <h3 className="text-primary text-uppercase fw-bold mb-1">Premium</h3>
                                <p className="text-muted text-uppercase mb-3" style={{ fontSize: 12, letterSpacing: 1 }}>Monthly / Yearly Plan</p>
                                <hr />
                                <div className="text-start mb-2">
                                    <p className="mb-2"><span className="text-primary me-2">✓</span><strong>₹3000</strong>  — <small className="text-muted">1 Month</small></p>
                                    <p className="mb-2"><span className="text-primary me-2">✓</span><strong>₹7000</strong>  — <small className="text-muted">3 Months</small></p>
                                    <p className="mb-2"><span className="text-primary me-2">✓</span><strong>₹15000</strong>  — <small className="text-muted">6 Months</small></p>
                                    <p className="mb-2"><span className="text-primary me-2">✓</span><strong>₹22000</strong>  — <small className="text-muted">1 Year</small></p>
                                    <p className="mb-0"><span className="text-primary me-2">✓</span><strong>(INCLUDES GST)</strong></p>
                                </div>
                                <hr />
                                <Link to="/register" className="btn btn-primary py-2 px-4 mt-2 text-uppercase fw-bold">
                                    Join Now
                                </Link>
                            </div>
                        </div>

                        {/* Standard Plan */}
                        <div className="col-md-6 col-lg-4">
                            <div className="text-center p-4 h-100" style={{ border: "1px solid #ddd", borderRadius: 10, background: "#fff" }}>
                                <h3 className="text-primary text-uppercase fw-bold mb-1">Standard</h3>
                                <p className="text-muted text-uppercase mb-3" style={{ fontSize: 12, letterSpacing: 1 }}>Weekly Plan</p>
                                <hr />
                                <div className="text-start mb-2">
                                    <p className="mb-2"><span className="text-primary me-2">✓</span><strong>₹1500</strong>  — <small className="text-muted">1 Week</small></p>
                                    <p className="mb-2"><span className="text-primary me-2">✓</span><strong>₹2500</strong>  — <small className="text-muted">2 Weeks</small></p>
                                    <p className="mb-0"><span className="text-primary me-2">✓</span><strong>(INCLUDES GST)</strong></p>
                                </div>
                                <hr />
                                <Link to="/register" className="btn btn-primary py-2 px-4 mt-2 text-uppercase fw-bold">
                                    Join Now
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* {Gym Fees end} */}

            {/* {Gym Fees end} */}
        </>
    )
}
