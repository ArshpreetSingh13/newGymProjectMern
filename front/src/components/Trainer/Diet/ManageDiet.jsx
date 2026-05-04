import { useEffect, useState } from "react";
import { BASE_URL } from "../../../endPoints";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Swal from 'sweetalert2';
import { allCustomer, deleteCustomer } from "../../../services/customerService";
import { allBatchRequestsTrainer } from "../../../services/batchRegistrationService";
import ReactModal from "react-modal";
import { addDiet, singleDiet, updateDiet } from "../../../services/dietService";

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
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageDiet() {
    const [dietType, setDietType] = useState('');
    const [restrictions, setRestrictions] = useState('');
    const [caloriesIntake, SetCaloriesIntake] = useState('');
    const [customerId, setCustomerId] = useState('');
    const nav = useNavigate();

    // Modal States
    const [modalIsOpen, setIsOpen] = useState(false); // Add Modal
    const [viewModalIsOpen, setViewModalIsOpen] = useState(false); // View Modal
    const [editModalIsOpen, setEditModalIsOpen] = useState(false); // Edit Modal
    
    const [currentDiet, setCurrentDiet] = useState(null); // For viewing details
    const [editDietId, setEditDietId] = useState(''); // Tracking which diet is being updated

    const [color, setColor] = useState("#eb0c1b");
    const [loading, setLoading] = useState(false);
    const [Customers, setCustomers] = useState([]);
    const [batchRegistrationId, setBatchRegistrationId] = useState('');

    useEffect(() => {
        getAllCustomers();
    }, []);

    const getAllCustomers = () => {
        const trainerId = localStorage.getItem("trainerId");
        if (!trainerId) return;

        setLoading(true);
        allBatchRequestsTrainer({ trainerId }).then((res) => {
            if (res.data.success) {
                setCustomers(res.data.data);
            } else {
                toast.error(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });
    };

    const deleteCustomerFun = (_id) => {
        setLoading(true);
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
                        toast.success(res.data.message);
                        getAllCustomers();
                    } else {
                        toast.error(res.data.message);
                    }
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        });
    };

    // --- ADD DIET LOGIC ---
    const openModal = (batchReqId, custId) => {
        // Reset fields for new entry
        setDietType('');
        setRestrictions('');
        SetCaloriesIntake('');
        
        setBatchRegistrationId(batchReqId);
        setCustomerId(custId);
        setIsOpen(true);
    };

    const submitAdd = (e) => {
        e.preventDefault();
        const trainerId = localStorage.getItem("_id");

        if (!trainerId || !customerId) {
            toast.error("Missing Trainer or customer");
            return;
        }

        let formData = {
            dietType,
            restrictions,
            caloriesIntake,
            trainerId: trainerId,
            customerId: customerId,
            batchRegistrationId: batchRegistrationId
        };

        addDiet(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    setIsOpen(false);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong");
            });
    };

    // --- VIEW DIET LOGIC ---
    const handleView = async (batchReqId, custId) => {
        try {
            setLoading(true);
            const res = await singleDiet({ customerId: custId, batchRegistrationId: batchReqId });
            
            if (res.data.success && res.data.data) {
                setCurrentDiet(res.data.data);
                setViewModalIsOpen(true);
            } else {
                toast.error(res.data.message || "No diet assigned yet.");
            }
        } catch (err) {
            toast.error("Failed to fetch diet details");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // --- EDIT/UPDATE DIET LOGIC ---
    const handleEdit = async (batchReqId, custId) => {
        try {
            setLoading(true);
            const res = await singleDiet({ customerId: custId, batchRegistrationId: batchReqId });
            if (res.data.success && res.data.data) {
                const diet = res.data.data;
                // Populate the state with fetched data
                setEditDietId(diet._id);
                setDietType(diet.dietType);
                setRestrictions(diet.restrictions);
                SetCaloriesIntake(diet.caloriesIntake);
                setEditModalIsOpen(true);
            } else {
                toast.error(res.data.message || "No diet found to update.");
            }
        } catch (err) {
            toast.error("Failed to fetch diet details");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const submitUpdate = (e) => {
        e.preventDefault();
        
        let formData = {
            _id: editDietId,
            dietType,
            restrictions,
            caloriesIntake
        };

        updateDiet(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    setEditModalIsOpen(false);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong during update");
            });
    };

    return (
        <>
            {/* ADD DIET MODAL */}
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="col-lg-12">
                    <div className="form-section bg-dark p-5 position-relative">
                        <button className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={() => setIsOpen(false)}></button>
                        <h2 className="text-white text-center mb-4">Add Diet</h2>
                        <form onSubmit={submitAdd}>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="form-floating form-section-col">
                                        <input type="text" className="form-control" placeholder="Diet Type" value={dietType} onChange={(e) => setDietType(e.target.value)} required />
                                        <label htmlFor="name">Diet Type</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input type="text" className="form-control" placeholder="Restrictions" value={restrictions} onChange={(e) => setRestrictions(e.target.value)} />
                                        <label htmlFor="name">Restrictions</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input type="number" className="form-control" placeholder="Calories" value={caloriesIntake} onChange={(e) => SetCaloriesIntake(e.target.value)} required />
                                        <label htmlFor="name">Calories Intake</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Add Diet</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>

            {/* VIEW DIET MODAL */}
            <ReactModal
                isOpen={viewModalIsOpen}
                onRequestClose={() => setViewModalIsOpen(false)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="col-lg-12">
                    <div className="form-section bg-dark p-5 position-relative text-white">
                        <button className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={() => setViewModalIsOpen(false)}></button>
                        <h2 className="text-white text-center mb-4">Diet Details</h2>
                        {currentDiet ? (
                            <div>
                                <p><strong>Diet Type:</strong> {currentDiet.dietType}</p>
                                <p><strong>Restrictions:</strong> {currentDiet.restrictions || "None"}</p>
                                <p><strong>Calories Intake:</strong> {currentDiet.caloriesIntake} kcal</p>
                            </div>
                        ) : (
                            <p className="text-center">Loading details...</p>
                        )}
                        <button className="btn btn-secondary w-100 mt-4" onClick={() => setViewModalIsOpen(false)}>Close</button>
                    </div>
                </div>
            </ReactModal>

            {/* EDIT DIET MODAL */}
            <ReactModal
                isOpen={editModalIsOpen}
                onRequestClose={() => setEditModalIsOpen(false)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="col-lg-12">
                    <div className="form-section bg-dark p-5 position-relative">
                        <button className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={() => setEditModalIsOpen(false)}></button>
                        <h2 className="text-white text-center mb-4">Update Diet</h2>
                        <form onSubmit={submitUpdate}>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="form-floating form-section-col">
                                        <input type="text" className="form-control" placeholder="Diet Type" value={dietType} onChange={(e) => setDietType(e.target.value)} required />
                                        <label htmlFor="name">Diet Type</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input type="text" className="form-control" placeholder="Restrictions" value={restrictions} onChange={(e) => setRestrictions(e.target.value)} />
                                        <label htmlFor="name">Restrictions</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating form-section-col">
                                        <input type="number" className="form-control" placeholder="Calories" value={caloriesIntake} onChange={(e) => SetCaloriesIntake(e.target.value)} required />
                                        <label htmlFor="name">Calories Intake</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>

            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Diet</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-primary">Manage Diet</li>
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

            <div className="container-fluid mt-4">
                <div className="row my-2">
                    <div className="col-md h4">Manage Diets</div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-dark align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Batch Name</th>
                                <th scope="col">Goal</th>
                                <th scope="col">Age</th>
                                <th scope="col" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Customers.map((batchReq, index) => (
                                <tr key={batchReq._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{batchReq.memberId?.name}</td>
                                    <td>{batchReq.memberId?.email}</td>
                                    <td>{batchReq.memberId?.phone}</td>
                                    <td>{batchReq.batchId?.batchName}</td>
                                    <td>{batchReq.memberId?.goal}</td>
                                    <td>{batchReq.memberId?.age}</td>
                                    <td>
                                        <div className="d-flex gap-2 justify-content-center">
                                            <button className="btn btn-sm btn-outline-success" title="Add Diet" onClick={() => openModal(batchReq._id, batchReq.memberId?._id)}>
                                                <i className="bi bi-plus"></i> Add
                                            </button>
                                            <button className="btn btn-sm btn-outline-info" title="View Diet" onClick={() => handleView(batchReq._id, batchReq.memberId?._id)}>
                                                <i className="bi bi-eye"></i> View
                                            </button>
                                            <button className="btn btn-sm btn-outline-warning" title="Edit Diet" onClick={() => handleEdit(batchReq._id, batchReq.memberId?._id)}>
                                                <i className="bi bi-pencil-square"></i> Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {Customers.length === 0 && !loading && (
                                <tr>
                                    <td colSpan="8" className="text-center">No records found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}