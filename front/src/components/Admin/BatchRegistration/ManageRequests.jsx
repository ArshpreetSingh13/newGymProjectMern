import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import { allBatchRequestsAdmin, approveBatchRequest } from "../../../services/batchRegistrationService";
import { allTrainers } from "../../../services/trainerService";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageRequests() {
    const [requests, setRequests] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color] = useState("#eb0c1b");

    useEffect(() => {
        getRequests();
        getTrainers();
    }, []);

    const getRequests = () => {
        setLoading(true);
        allBatchRequestsAdmin({})
            .then(res => {
                setLoading(false);
                if (res.data.success) {
                    setRequests(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(err => {
                setLoading(false);
                toast.error("Failed to load requests");
                console.log(err);
            });
    };

    const getTrainers = () => {
        allTrainers({})
            .then(res => {
                if (res.data.success) {
                    setTrainers(res.data.data);
                }
            })
            .catch(err => console.log(err));
    };

    const handleApprove = (reqId, trainerId) => {
        if (!trainerId) {
            toast.warning("Please select a trainer to assign.");
            return;
        }

        setLoading(true);
        approveBatchRequest({ registrationId: reqId, trainerId: trainerId })
            .then(res => {
                setLoading(false);
                if (res.data.success) {
                    toast.success("Request approved and trainer assigned!");
                    getRequests(); // Refresh list
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(err => {
                setLoading(false);
                toast.error("Approval failed");
                console.log(err);
            });
    };

    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">Batch Requests</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Admin</a></li>
                        <li className="breadcrumb-item active text-primary">Requests</li>
                    </ol>
                </div>
            </div>

            <RingLoader color={color} loading={loading} cssOverride={override} size={100} />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row my-2 mb-4">
                        <div className="col-md h4">Manage Batch Requests</div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-striped text-dark">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Customer Name</th>
                                    <th>Batch Name</th>
                                    <th>Status</th>
                                    <th>Assign Trainer</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((req, index) => (
                                    <tr key={req._id}>
                                        <td>{index + 1}</td>
                                        <td>{req.memberId?.name || "N/A"}</td>
                                        <td>{req.batchId?.batchName || "N/A"}</td>
                                        <td>
                                            <span className={`badge bg-${req.approvalStatus === 'Approved' ? 'success' : 'warning'}`}>
                                                {req.approvalStatus}
                                            </span>
                                        </td>
                                        <td>
                                            {req.approvalStatus === 'Approved' ? (
                                                req.trainerId?.name || "Assigned"
                                            ) : (
                                                <select 
                                                    className="form-select form-select-sm"
                                                    id={`trainer-select-${req._id}`}
                                                >
                                                    <option value="">Select Trainer</option>
                                                    {trainers.map(t => (
                                                        <option key={t._id} value={t._id}>{t.name}</option>
                                                    ))}
                                                </select>
                                            )}
                                        </td>
                                        <td>
                                            {req.approvalStatus === 'Pending' && (
                                                <button 
                                                    className="btn btn-sm btn-success"
                                                    onClick={() => {
                                                        const trainerId = document.getElementById(`trainer-select-${req._id}`).value;
                                                        handleApprove(req._id, trainerId);
                                                    }}
                                                >
                                                    Approve & Assign
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {!loading && requests.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="text-center">No requests found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
