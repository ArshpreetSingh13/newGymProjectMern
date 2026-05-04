import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'
import { allBatch, deleteBatch } from "../../../services/batchService"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageBatches() {
    const imageStyle = {
        height: "100px",
        width: "100px",
        borderRadius: "999px"
    }
    let baseUrl = BASE_URL
    let [color, setColor] = useState("#eb0c1b");
    let [loading, setLoading] = useState(false);
    const [Batch, setBatch] = useState([])
    useEffect(() => {
        getAllBatch()
    }, [])

    const getAllBatch = () => {
        setLoading(true)
        allBatch({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setBatch(res.data.data)
            }
            else {
                setLoading(false)
                toast.error(res.data.message)
            }
        }).catch((err) => {
            setLoading(false)
            console.log(err);
        })
    }

    const deleteBatchFun = (_id) => {
        setLoading(true)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBatch({ _id: _id }).then((res) => {
                    if (res.data.success) {
                        setLoading(false)
                        toast.success(res.data.message)
                        getAllBatch()
                    }
                    else {
                        setLoading(false)
                        toast.error(res.data.message)
                    }
                }).catch((err) => {
                    setLoading(false)
                    console.log(err);
                })
            }
            else {
                setLoading(false)
            }
        });
    }

    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Manage Batches
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
            <RingLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={100}
            />

            <div className="container-xxl">
                <div className="container">
                    <div className="row my-2">
                        <div className="col-md h4">
                            Manage Batches
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/batch/add">
                                <button className="btn btn-sm btn-primary rounded rounded-pill" type="submit">
                                    + Add New Batch
                                </button>
                            </Link>
                        </div>
                    </div>
                    <table className="table table-bordered text-dark">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Batch Name</th>
                                <th scope="col">Start Date </th>
                                <th scope="col">End Date</th>
                                <th scope="col">Total Slots</th>
                                <th scope="col">Session Type</th>
                                <th scope="col">Fees</th>
                                <th scope="col">TrainerAllot</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Batch.map((Batch, index) => (
                                    <tr>
                                        <th scope="row">
                                            {index + 1}
                                        </th>
                                        <td scope="row">
                                            {Batch.batchName}
                                        </td>
                                        <td scope="row">
                                            {Batch.startDate.substr(0,10)}
                                        </td>
                                        <td scope="row">
                                            {Batch.endDate.substr(0,10)}
                                        </td>
                                        <td scope="row">
                                            {Batch.totalSlots}
                                        </td>
                                        <td scope="row">
                                            {Batch.sessionType}
                                        </td>
                                         <td scope="row">
                                            {Batch.fees}
                                        </td>
                                         <td scope="row">
                                            {Batch.trainerAllot.name}
                                        </td>
                                        <td scope="row">
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
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                </div>
            </div>

            {/* Team End */}
        </>
    )
}