export default function AdminLogin() {
    return (
        <>

            {/* Contact Start */}
            <div className="col-lg-4 offset-lg-4 wow fadeInRight" data-wow-delay="0.4s">
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-4 text-white mb-4 offset-4">Login</h1>
                    <form>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                    <label htmlFor="name">Enter Name</label>
                                </div>
                            </div>


                            <div className=" col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="project"
                                        placeholder="Project"
                                    />
                                    <label htmlFor="project">Enter Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="subject"
                                        placeholder="Subject"
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
                                    <button className="btn-primary w-100 py-3 px-5">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Contact End */}
        </>
    )
}