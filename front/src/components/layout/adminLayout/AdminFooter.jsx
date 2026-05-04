import { Link } from "react-router-dom";
export default function AdminFooter() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5 mb-5 align-items-center">
            <div className="col-lg-7">
              {/* <div
            className="position-relative d-flex"
            style={{ transform: "skew(18deg)" }}
          >
            <input
              className="form-control border-0 w-100 py-3 pe-5"
              type="text"
              placeholder="Email address to Subscribe"
            />
            <button type="button" className="btn-primary py-2 px-4 ms-3">
              {" "}
              <span>Subscribe</span>
            </button>
          </div> */}
            </div>
            <div className="col-lg-5">
              {/* <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
            <a className="btn btn-primary btn-md-square me-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-primary btn-md-square me-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-primary btn-md-square me-3" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="btn btn-primary btn-md-square me-0" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div> */}
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h1 className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-dumbbell text-danger" />
                  <span style={{ fontWeight: 900, letterSpacing: '2px', color: 'white' }}>FITLAB</span>
                </h1>
                <p className="mb-0">
                  JOIN THE FITLAB TODAY AND EXPLORE YOUR POTENTIAL!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link to="/"> Home</Link>
                <Link to="/about"> About us</Link>
                <Link to="/courses"> Our Courses</Link>
                <Link to="/feature"> Our Features</Link>
                <Link to="/blog"> Our Blog &amp; news</Link>
                <Link to="/testimonial"> Testimonial</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4"> Contact Info</h4>
                <div className="row g-2">
                  <div className="col-12">
                    <div className="d-flex">
                      <i className="fas fa-map-marker-alt text-primary me-2" />
                      <div>
                        <h5 className="text-white mb-2">Address</h5>
                        <p className="mb-0">100-B,Connaught Place,New Delhi</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                      <i className="fas fa-envelope text-primary me-2" />
                      <div>
                        <h5 className="text-white mb-2">Mail Us</h5>
                        <p className="mb-0">Fitlab@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                      <i className="fa fa-phone-alt text-primary me-2" />
                      <div>
                        <h5 className="text-white mb-2">Telephone</h5>
                        <p className="mb-0">(+91) 9828384858</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Recent Work</h4>
                <div className="row g-2">
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-9.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-10.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-11.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-12.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-1.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-2.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-3.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-4.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-5.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-6.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-7.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="footer-item-img">
                      <a href="#">
                        <img src="img/work-8.jpg" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2" />
                  FITLAB@2026
                </a>
                , All right reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top */}
      <div className="back-to-top">
        <a href="#" className="btn">
          <i className="fa fa-arrow-up" />
        </a>
      </div>
    </>


  )
}