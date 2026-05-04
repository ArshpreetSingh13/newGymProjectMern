export default function ManageClients() {
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
                        Manage Clients
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
                        <li className="breadcrumb-item active text-primary">Contact</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Team start */}
            <div className="container-xxl">
                <div className="container">
                    <div className="row my-2">
                        <div className="col-md h4">
                            Manage Clients
                        </div>
                        <div className="col-md text-end">
                            <button className="btn btn-sm btn-primary rounded ">
                                + Add New User
                            </button>
                        </div>
                    </div>
                    <table className="table table-bordered text-dark">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Address</th>
                                <th scope="col">Attendance</th>
                                <th scope="col">Progress</th>
                                <th scope="col">Expiry</th>
                                <th scope="col">Actions</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Saksham</td>
                                <td>saksham@gmail.com</td>
                                <td>5678909876</td>
                                <td>Client</td>
                                <td>Annual</td>
                                <td>2026-01-01</td>
                                <td>2026-03-01</td>
                                <td>2026-03-01</td>


                                <td>
                                    <button className="btn btn-sm text-primary">
                                        <i className="bi bi-pencil-square"></i>


                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>Saksham</td>
                                <td>saksham@gmail.com</td>
                                <td>5678909876</td>
                                <td>Trainer</td>
                                <td>--</td>
                                <td>2026-01-01</td>
                                <td>2026-03-01</td>
                                <td>2026-03-01</td>

                                <td>
                                    <button className="btn btn-sm text-primary">
                                        <i className="bi bi-pencil-square"></i>


                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>Saksham</td>
                                <td>saksham@gmail.com</td>
                                <td>5678909876</td>
                                <td>Trainer</td>
                                <td>--</td>
                                <td>2026-01-01</td>
                                <td>2026-03-01</td>
                                <td>2026-03-01</td>

                                <td>
                                    <button className="btn btn-sm text-primary">
                                        <i className="bi bi-pencil-square"></i>


                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td>Saksham</td>
                                <td>saksham@gmail.com</td>
                                <td>5678909876</td>
                                <td>client</td>
                                <td>Quarterly</td>
                                <td>2026-01-01</td>
                                <td>2026-03-01</td>
                                <td>2026-03-01</td>

                                <td>
                                    <button className="btn btn-sm text-primary">
                                        <i className="bi bi-pencil-square"></i>


                                    </button>
                                </td>
                            </tr>

                             <tr>
                                <th scope="row">5</th>
                                <td>Saksham</td>
                                <td>saksham@gmail.com</td>
                                <td>5678909876</td>
                                <td>Client</td>
                                <td>Annual</td>
                                <td>2026-01-01</td>
                                <td>2026-03-01</td>
                                <td>2026-03-01</td>
                                
                                <td>
                                    <button className="btn btn-sm text-primary">
                                        <i className="bi bi-pencil-square"></i>


                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>

            {/* Team End */}
        </>

    )
}