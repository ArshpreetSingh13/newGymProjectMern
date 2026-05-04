import { Link } from "react-router-dom";
export default function About() {
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
            About Us
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
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
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
                      <img src="img/icon-1.png" className="img-fluid" alt="" />
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
                      <img src="img/icon-6.png" className="img-fluid" alt="" />
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
            className="text-center mx-auto pb-5 wow fadeInUp"
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
          <div className="feature-carousel owl-carousel">
            <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="feature-img">
                <img src="img/feature-1.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="feature-content p-4">
                <h4 className="mb-3">Work Your Butt Off</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur obcaecati voluptatum,
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="feature-img">
                <img src="img/feature-2.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="feature-content p-4">
                <h4 className="mb-3">Get In The groove</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur obcaecati voluptatum,
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-img">
                <img src="img/feature-3.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="feature-content p-4">
                <h4 className="mb-3">It's more Than A Game</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur obcaecati voluptatum,
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-img">
                <img src="img/feature-4.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="feature-content p-4">
                <h4 className="mb-3">Get Fit Don't Quit</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur obcaecati voluptatum,
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="feature-shaps" />
        </div>
      </div>
      {/* Features End */}
      {/* Explore Fitness Start */}
      <div
        className="container-fluid explore py-5 wow zoomIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5 text-center">
          <h1 className="display-1 text-white mb-0"> Explore Fitness Center</h1>
          <a
            className="btn btn-primary py-3 px-4 px-md-5 me-2"
            href="https://www.youtube.com/embed/DWRcNpR6Kdc"
          >
            <i className="fas fa-play-circle me-2" /> <span>Watch Video</span>
          </a>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row gy-5 gy-lg-4 gx-4">
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="img/team-1.jpg"
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
                  <h4>Trainer Name</h4>
                  <p className="mb-0">Profession</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="img/team-2.jpg"
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
                  <h4>Trainer Name</h4>
                  <p className="mb-0">Profession</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="img/team-3.jpg"
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
                  <h4>Trainer Name</h4>
                  <p className="mb-0">Profession</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="img/team-4.jpg"
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
                  <h4>Trainer Name</h4>
                  <p className="mb-0">Profession</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Back to Top */}
      <div className="back-to-top">
        <a href="#" className="btn">
          <i className="fa fa-arrow-up" />
        </a>
      </div>
    </>


  )
}