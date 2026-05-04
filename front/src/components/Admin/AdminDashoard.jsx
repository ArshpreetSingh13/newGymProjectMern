import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allUsers } from "../../services/userService";
import { adminDashboard } from "../../services/userService"

export default function AdminDashboard() {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(false)
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#2BC5D4");
    const [trainersCount, setTrainersCount] = useState('')
    const [batchesCount, setBatchesCount] = useState('')
    const [customersCount, setCustomersCount] = useState('')
    const [membershipsCount, setMembershipsCount] = useState('')


    // useEffect(() => {
    //     getAllUsers()
    // }, [])

    // const getAllUsers = () => {
    //     setLoading(true)
    //     allUsers({}).then((res) => {
    //         if (res.data.success) {
    //             setLoading(false)
    //             setUsers(res.data.data)
    //         }
    //         else {
    //             setLoading(false)
    //             toast.error(res.data.message)
    //         }
    //     }).catch((err) => {
    //         setLoading(false)
    //         console.log(err);
    //     })
    // }

    useEffect(() => {
        getDashboard()
    }, [])

    const getDashboard = () => {
        setLoading(true)
        adminDashboard({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setTrainersCount(res.data.totalTrainers)
                setBatchesCount(res.data.totalBatches)
                setCustomersCount(res.data.totalCustomers)
                setMembershipsCount(res.data.totalMemberships)

            }
            else {
                setLoading(false)
                toast.error("Something went wrong")
            }

        }).catch((err) => {
            setLoading(false)
            console.log(err);
            toast.error("Something went wrong")

        })

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
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Welcome to Admin Dashboard
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
                        <li className="breadcrumb-item active text-primary">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ol>
                </div>
            </div>
            {/* Header End */}


            <div className="row m-3">
                {/* Card 1 */}
                <div className="col-md-3 ">
                    <div className="card text-center shadow">
                        <div className="card-body bg-primary">
                            <h5>Total Customers</h5>
                            <h3>{customersCount}</h3>
                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="col-md-3 ">
                    <div className="card text-center shadow">
                        <div className="card-body bg-success">
                            <h5>Active Memberships</h5>
                            <h3>{membershipsCount}</h3>
                        </div>

                    </div>
                </div>

                {/* card 3 */}

                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body bg-warning">
                            <h5>Total Trainers</h5>
                            <h3>{trainersCount}</h3>

                        </div>
                    </div>
                </div>
                {/* card 4 */}

                <div className="col-md-3">

                    <div className="card text-center shadow">
                        <div className="card-body bg-info">
                            <h5>Total Batches</h5>
                            <h3>{batchesCount}</h3>

                        </div>
                    </div>
                </div>

            </div>




            {/* Team start */}
            {/* < div className="container-xxl" >
                <div className="container">
                    <div className="row my-2">
                        <div className="col-md h4">
                            Manage User
                        </div>
                        <div className="col-md text-end">
                            <button className="btn btn-sm btn-primary rounded rounded-pill">
                                + Add New User
                            </button>
                        </div>
                    </div>

                    <table className="table table-bordered text-dark">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Plan</th>
                                <th scope="col">Admission Date</th>
                                <th scope="col">Expiry Date</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope="row">
                                            {index + 1}
                                        </th>
                                        <td scope="row">
                                            {user.name}
                                        </td>
                                        <td scope="row">
                                            {user.email}
                                        </td>
                                        <td scope="row">
                                            {user.phone}
                                        </td>
                                        <td scope="row">
                                            {user.userType == 2 ? "Trainer" : "Customer"}
                                        </td>
                                        <td scope="row">
                                            {user.plan}
                                        </td>
                                        <td scope="row">
                                            {user.sessionType}
                                        </td>
                                        <td scope="row">
                                            {user.fees}
                                        </td>
                                        <td scope="row">
                                            {user.trainerAllot}
                                        </td> */}
            {/* <td scope="row">
                                            {Batch.status}

                                            <Link to={`/admin/batch/update/${Batch._id}`}>
                                                <button className="btn btn-sm text-primary">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </Link>
                                            <button className="btn text-danger" onClick={() => {
                                                deleteBatchFun(Batch._id)
                                            }}>

                                                <i class="bi bi-trash-fill"></i>
                                            </button>
                                        </td> */}
            {/* </tr>
                                ))
                            }

                            <tr>
                                <th scope="row">2</th>
                                <td>Rohit</td>
                                <td>rohit@gmail.com</td>
                                <td>5678909876</td>
                                <td>Trainer</td>
                                <td>--</td>
                                <td>2026-01-01</td>
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
            </div > */}

            {/* Team End */}
        </>

    )
}