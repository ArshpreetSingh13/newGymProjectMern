export default function Blogs() {
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
                        Our Blogs
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
                        <li className="breadcrumb-item active text-primary">Blog</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Blog Start */}
            <div className="container-fluid blog py-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-primary"> Our Blogs</h4>
                        <h1 className="display-4 mb-4">Check out our latest stories</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                            adipisci facilis cupiditate recusandae aperiam temporibus corporis
                            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
                            obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="blog-carousel owl-carousel">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="img/feature-4.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div className="small">
                                        <span className="fa fa-user text-primary me-2" /> Martin.C
                                    </div>
                                    <div className="small">
                                        <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                                        2025
                                    </div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">
                                    Full Body Home Workout
                                </a>
                                <p className="mb-3">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                    libero soluta impedit eligendi? Quibusdam, laudantium.
                                </p>
                                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                                    {" "}
                                    <span className="me-2">Read More</span>{" "}
                                    <i className="fa fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="img/feature-3.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div className="small">
                                        <span className="fa fa-user text-primary me-2" /> Martin.C
                                    </div>
                                    <div className="small">
                                        <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                                        2025
                                    </div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">
                                    31-Day Fitness Calendar
                                </a>
                                <p className="mb-3">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                    libero soluta impedit eligendi? Quibusdam, laudantium.
                                </p>
                                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                                    {" "}
                                    <span className="me-2">Read More</span>{" "}
                                    <i className="fa fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.6s">
                            <div className="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="img/feature-2.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div className="small">
                                        <span className="fa fa-user text-primary me-2" /> Martin.C
                                    </div>
                                    <div className="small">
                                        <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                                        2025
                                    </div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">
                                    At Home Ab Workout
                                </a>
                                <p className="mb-3">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                    libero soluta impedit eligendi? Quibusdam, laudantium.
                                </p>
                                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                                    {" "}
                                    <span className="me-2">Read More</span>{" "}
                                    <i className="fa fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="img/feature-1.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div className="small">
                                        <span className="fa fa-user text-primary me-2" /> Martin.C
                                    </div>
                                    <div className="small">
                                        <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                                        2025
                                    </div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">
                                    Full Body Home Workout
                                </a>
                                <p className="mb-3">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                    libero soluta impedit eligendi? Quibusdam, laudantium.
                                </p>
                                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                                    {" "}
                                    <span className="me-2">Read More</span>{" "}
                                    <i className="fa fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
        </>
    )
}