import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'
import { allCustomer, deleteCustomer } from "../../../services/customerService"
import { allBatchRequestsTrainer } from "../../../services/batchRegistrationService"
import ReactModal from "react-modal";
import { addExcercise } from "../../../services/excerciseService";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: "50%",
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        zIndex: 9999
    }
};

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageExcercise() {
    const [excerciseName, setExcerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [repetitions, setRepetetion] = useState('')
    const [duration, setDuration] = useState('')
    const [memberId, setMemberId] = useState('')
    const [batchRegistrationId, setBatchRegistrationId] = useState('');

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = (batchReqId, custId) => {
        setBatchRegistrationId(batchReqId);
        setMemberId(custId);
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const imageStyle = {
        height: "100px",
        width: "100px",
        borderRadius: "999px"
    }
    let baseUrl = BASE_URL
    let [color, setColor] = useState("#eb0c1b");
    let [loading, setLoading] = useState(false);
    const [Customers, setCustomers] = useState([])
    
    useEffect(() => {
        getAllCustomers()
    }, [])

    const getAllCustomers = () => {
        const trainerId = localStorage.getItem("_id");
        if (!trainerId) return;

        setLoading(true)
        allBatchRequestsTrainer({ trainerId }).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setCustomers(res.data.data) // data is batch requests
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

    const deleteCustomerFun = (_id) => {
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
                deleteCustomer({ _id: _id }).then((res) => {
                    if (res.data.success) {
                        setLoading(false)
                        toast.success(res.data.message)
                        getAllCustomers()
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
    };

    const submit = (e) => {
        e.preventDefault()

        const trainerId = localStorage.getItem("_id");
        if (!trainerId || !memberId) {
            toast.error("Missing trainer or member");
            return;
        }

        let formData = {
            trainerId,
            memberId,
            batchRegistrationId,
            excerciseName,
            sets,
            repetitions,
            duration
        }

        addExcercise(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setIsOpen(false)
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error("Something went wrong")
            })
    }

    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="col-lg-12 ">
                    <div className="form-section bg-dark p-5">
                        <h2 className="text-white text-center mb-4">Add Exercise</h2>

                        <form onSubmit={submit}>
                            <div className="row g-4">

                                {/* Exercise Name */}
                                <div className="col-12">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Exercise Name"
                                            value={excerciseName}
                                            onChange={(e) => setExcerciseName(e.target.value)}
                                        />
                                        <label htmlFor="name">Exercise Name</label>
                                    </div>
                                </div>
                                {/* Sets */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Sets"
                                            value={sets}
                                            onChange={(e) => setSets(e.target.value)}
                                        />
                                        <label htmlFor="name">Exercise Sets</label>
                                    </div>
                                </div>

                                {/* Repetitions */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Repetitions"
                                            value={repetitions}
                                            onChange={(e) => setRepetetion(e.target.value)}
                                        />
                                        <label htmlFor="name">Exercise Repetitions</label>
                                    </div>
                                </div>
                                {/* Duration */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Duration"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                        <label htmlFor="name">Exercise Duration</label>
                                    </div>
                                </div>
                                {/* Submit */}
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3">
                                        Add Exercise
                                    </button>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn btn-secondary w-100 py-3" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>

            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Add Workout
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
            <RingLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={100}
            />

            <div className="container-fluid">

                <div className="row my-2">
                    <div className="col-md h4">
                        Add Workout
                    </div>
                </div>
                <table className="table table-bordered text-dark">
                    <thead>
                        <tr>
                            <th scope="col">Sr.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Batch Name</th>
                            <th scope="col">Goal</th>
                            <th scope="col">Age</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Customers.map((batchReq, index) => (
                                <tr key={batchReq._id}>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td scope="row">
                                        {batchReq.memberId?.name}
                                    </td>
                                    <td scope="row">
                                        {batchReq.memberId?.email}
                                    </td>
                                    <td scope="row">
                                        {batchReq.memberId?.phone}
                                    </td>
                                    <td scope="row">
                                        {batchReq.batchId?.batchName}
                                    </td>

                                    <td scope="row">
                                        {batchReq.memberId?.goal}
                                    </td>
                                    <td scope="row">
                                        {batchReq.memberId?.age}
                                    </td>

                                    <td scope="row">
                                        <div className="d-flex gap-3">
                                            <button className="btn btn-sm btn-outline-primary" onClick={() => openModal(batchReq._id, batchReq.memberId?._id)}>
                                                <i className="bi bi-plus"></i> Add Exercise
                                            </button>

                                            <button className="btn btn-sm btn-outline-primary">
                                                <i className="bi bi-eye"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-primary">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
