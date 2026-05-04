import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'
import { allCustomer, deleteCustomer } from "../../../services/customerService"
import { allBatchRequestsTrainer } from "../../../services/batchRegistrationService"

import ReactModal from "react-modal";
import { addProgress } from "../../../services/progressService"

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

export default function TrackProgress() {
    const [clientName, setClientName] = useState('')
    const [email, setEmail] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bodyFat, setBodyFat] = useState('')
    const [bmi, setBmi] = useState('')
    const [date, setDate] = useState('')
    const [customerId, setCustomerId] = useState("");
    const [trainerId, setTrainerId] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen1, setIsOpen1] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);


    const openModal = (id) => {
        setCustomerId(id);
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const openModal1 = (id) => {
        setCustomerId(id);
        setIsOpen1(true);
    }
    const closeModal1 = () => {
        setIsOpen1(false);
    }
    const openModal2 = () => {
        setIsOpen2(true);
    }
    const closeModal2 = () => {
        setIsOpen2(false);
    }

    const [searchParams] = useSearchParams()
    const nav = useNavigate()
    const batchIdParam = searchParams.get("batchId")

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
    }, [batchIdParam])

    const getAllCustomers = () => {
        const trainerId = localStorage.getItem("trainerId");
        if (!trainerId) return;

        setLoading(true)
        allBatchRequestsTrainer({ trainerId }).then((res) => {
            if (res.data.success) {
                setLoading(false)
                let requests = res.data.data;
                if (batchIdParam) {
                    requests = requests.filter(req => req.batchId?._id === batchIdParam);
                }
                setCustomers(requests);
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
        
        if (!trainerId) {
            toast.error("Missing Trainer");
            return;
        } else if (!customerId) {
            toast.error("Missing customer");
            return;
        }


        let formData = {
            clientName,
            bodyFat,
            bmi,
            email,
            date,
            height,
            weight,
            customerId: customerId,
            trainerId: trainerId
        }

        addProgress(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav("/trainer/customer/progress")
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
                        <h2 className="text-white text-center mb-4">Add Progress</h2>

                        <form onSubmit={submit}>
                            <div className="row g-4">

                                {/* Start Date */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={bodyFat}
                                            onChange={(e) => setBodyFat(e.target.value)}
                                        />
                                        <label htmlFor="name">Enter Body Fat</label>
                                    </div>
                                </div>
                                {/* End Date */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={bmi}
                                            onChange={(e) => setBmi(e.target.value)}
                                        />
                                        <label htmlFor="name">Enter BMI</label>
                                    </div>
                                </div>
                                {/* Time */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Trainer ID"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />
                                        <label htmlFor="name">Enter Weight</label>
                                    </div>
                                </div>
                                {/* Available Slots */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Trainer ID"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                        />
                                        <label htmlFor="name">Enter Height</label>
                                    </div>
                                </div>
                                {/* Submit */}
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3">
                                        Add Progress
                                    </button>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>


            </ReactModal>

            <ReactModal
                isOpen={modalIsOpen1}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="col-lg-12">
                    <div className="form-section bg-dark p-5 h-100">
                        <h1 className="display-5 text-white mb-4 text-center">Update Progress</h1>

                        <form onSubmit={submit}>
                            <div className="row g-4">

                                {/* Trainer Name */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            id="name"
                                            placeholder="Trainer Name"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                        />
                                        <label htmlFor="name">Cleint Name</label>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="email"
                                            className="form-control border-0"
                                            id="email"
                                            placeholder="Trainer Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="email">Client Email</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="number"
                                            className="form-control border-0"
                                            id="password"
                                            placeholder="Trainer Email"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />
                                        <label htmlFor="email">Enter Weight</label>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            id="experience"
                                            placeholder="Experience"
                                            value={bodyFat}
                                            onChange={(e) => setBodyFat(e.target.value)}
                                        />
                                        <label htmlFor="experience">Enter BodyFat</label>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            id="phone"
                                            placeholder="Phone"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                        />
                                        <label htmlFor="phone">Enter Height</label>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="col-12">
                                    <div className="form-floating form-section-col">
                                        <textarea
                                            className="form-control"
                                            id="address"
                                            placeholder="Address"
                                            value={bmi}
                                            onChange={(e) => setBmi(e.target.value)}
                                        ></textarea>
                                        <label htmlFor="address">Enter BMI</label>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="col-12">
                                    <div className="form-section-col">
                                        <button className="btn-primary w-100 py-3 px-5" type="submit">
                                            Update
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </ReactModal>
            <ReactModal
                isOpen={modalIsOpen2}
                onRequestClose={closeModal2}
                style={customStyles}
                contentLabel="View Progress"
            >
                <div className="col-lg-12">
                    <div className="form-section bg-dark p-5 text-white">
                        <h2 className="text-center mb-4">View Progress</h2>

                        {selectedCustomer ? (
                            <div className="row g-3">

                                <div className="col-6">
                                    <strong>Name:</strong> {selectedCustomer.name}
                                </div>

                                <div className="col-6">
                                    <strong>Email:</strong> {selectedCustomer.email}
                                </div>

                                <div className="col-6">
                                    <strong>Phone:</strong> {selectedCustomer.phone}
                                </div>

                                <div className="col-6">
                                    <strong>Gender:</strong> {selectedCustomer.gender}
                                </div>

                                <div className="col-6">
                                    <strong>Goal:</strong> {selectedCustomer.goal}
                                </div>

                                <div className="col-6">
                                    <strong>Age:</strong> {selectedCustomer.age}
                                </div>

                                {/* If progress data exists, show it */}
                                <div className="col-6">
                                    <strong>Weight:</strong> {selectedCustomer.weight || "N/A"}
                                </div>

                                <div className="col-6">
                                    <strong>Height:</strong> {selectedCustomer.height || "N/A"}
                                </div>

                                <div className="col-6">
                                    <strong>BMI:</strong> {selectedCustomer.bmi || "N/A"}
                                </div>

                                <div className="col-6">
                                    <strong>Body Fat:</strong> {selectedCustomer.bodyFat || "N/A"}
                                </div>

                                <div className="col-12 mt-3">
                                    <button className="btn btn-danger w-100" onClick={closeModal2}>
                                        Close
                                    </button>
                                </div>

                            </div>
                        ) : (
                            <p>No Data Found</p>
                        )}
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
                        Track Progress
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

            <div className="container-fluid">

                <div className="row my-2">
                    <div className="col-md h4">
                        Track Progress
                    </div>
                </div>
                <table className="table table-bordered text-dark">
                    <thead>
                        <tr>
                            <th scope="col">Sr.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Goal</th>
                            <th scope="col">Age</th>
                            <th scope="col">Progress</th>
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
                                        {batchReq.memberId?.gender}
                                    </td>

                                    <td scope="row">
                                        {batchReq.memberId?.goal}
                                    </td>
                                    <td scope="row">
                                        {batchReq.memberId?.age}
                                    </td>

                                    <td scope="row">


                                        <div className="d-flex gap-2">

                                            <button className="btn btn-sm btn-outline-primary" onClick={() => openModal(batchReq.memberId?._id)}>
                                                <i className="bi bi-plus"></i> Progress
                                            </button>

                                            <button className="btn btn-sm btn-outline-success" onClick={() => nav('/trainer/diet/manage')}>
                                                <i className="bi bi-apple"></i> Diet
                                            </button>

                                            <button className="btn btn-sm btn-outline-warning" onClick={() => nav('/trainer/excercise/manage')}>
                                                <i className="bi bi-activity"></i> Exercise
                                            </button>

                                            <button
                                                className="btn btn-sm btn-outline-primary"
                                                onClick={() => {
                                                    setSelectedCustomer(batchReq.memberId);
                                                    openModal2();
                                                }}
                                            >
                                                <i className="bi bi-eye"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-primary" onClick={() => openModal1(batchReq.memberId?._id)}>
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

            {/* Team End */}
        </>
    )
}