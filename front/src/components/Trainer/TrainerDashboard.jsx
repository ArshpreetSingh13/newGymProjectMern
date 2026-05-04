import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allUsers } from "../../services/userService";
import { trainerDashboard } from "../../services/userService"
import { toast } from 'react-toastify'

export default function TrainerDashboard() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#2BC5D4");
    const [customerCount, setCustomerCount] = useState(0)
    const [dietCount, setDietCount] = useState(0)
    const [workoutCount, setWorkoutCount] = useState(0)


    useEffect(() => {
        getDashboard()
    }, [])

    const getDashboard = () => {
        setLoading(true)
        trainerDashboard({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setCustomerCount(res.data.totalCustomers)
                setDietCount(res.data.totalDiet)
                setWorkoutCount(res.data.totalWorkout)

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
                        Trainer Dashboard
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

            <div className="row m-3">
                {/* Card 1 */}
                <div className="col-md-4  ">
                    <div className="card text-center shadow">
                        <div className="card-body bg-primary">
                            <h5>My Clients</h5>
                            <h3>{customerCount}</h3>
                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                {/* <div className="col-md-3 ">
                    <div className="card text-center shadow">
                        <div className="card-body bg-success">
                            <h5>Active Clients </h5>
                            <h3>{activeCustomerCount}</h3>
                        </div>

                    </div>
                </div> */}

                {/* card 3 */}

                <div className="col-md-4">
                    <div className="card text-center shadow">
                        <div className="card-body bg-warning">
                            <h5>Diet Added</h5>
                            <h3>2</h3>

                        </div>
                    </div>
                </div>
                {/* card 4 */}

                <div className="col-md-4">

                    <div className="card text-center shadow">
                        <div className="card-body bg-info">
                            <h5>Workout Added</h5>
                            <h3>5</h3>

                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}