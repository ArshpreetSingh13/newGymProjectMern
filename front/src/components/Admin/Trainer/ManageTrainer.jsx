import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { allTrainers, deleteTrainer } from "../../../services/trainerService"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageTrainer() {
    const imageStyle = {
        height: "100px",
        width: "100px",
        borderRadius: "999px"
    }
    let baseUrl = BASE_URL
    let [color, setColor] = useState("#eb0c1b");
    let [loading, setLoading] = useState(false);
    const [Trainers, setTrainers] = useState([])
    useEffect(() => {
        getAllTrainers()
    }, [])

    const getAllTrainers = () => {
        setLoading(true)
        allTrainers({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setTrainers(res.data.data)
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

    const deleteTrainerFun = (_id) => {
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
                deleteTrainer({ _id: _id }).then((res) => {
                    if (res.data.success) {
                        setLoading(false)
                        toast.success(res.data.message)
                        getAllTrainers()
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
                        Manage Trainers
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
                            Manage Trainers
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/trainer/add">
                                <button className="btn btn-sm btn-primary rounded rounded-pill" type="submit">
                                    + Add New Trainer
                                </button>
                            </Link>
                        </div>
                    </div>
                    <table className="table table-bordered text-dark">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Experience</th>

                                <th scope="col">Image</th>
                                <th scope="col">Specialization</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Trainers.map((Trainer, index) => (
                                    <tr>
                                        <th scope="row">
                                            {index + 1}
                                        </th>
                                        <td scope="row">
                                            {Trainer.name}
                                        </td>
                                        <td scope="row">
                                            {Trainer.email}
                                        </td>
                                        <td scope="row">
                                            {Trainer.experience}
                                        </td>
                                        <td scope="row">
                                            {Trainer.phone}
                                        </td>
                                        <td>
                                            <a href={Trainer.image} target="_blank">
                                                <img src={Trainer.image} alt="unable to load" style={imageStyle} />
                                            </a>
                                        </td>
                                        <td scope="row">
                                            {Trainer.speacilization}
                                        </td>
                                        <td scope="row">
                                            {Trainer.status}

                                            <Link to={`/admin/trainer/update/${Trainer._id}`}>
                                                <button className="btn btn-sm text-primary">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </Link>
                                            <button className="btn text-danger" onClick={() => {
                                                deleteTrainerFun(Trainer._id)
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