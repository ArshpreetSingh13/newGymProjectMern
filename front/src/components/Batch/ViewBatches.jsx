import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { RingLoader } from "react-spinners"
import { allBatch } from "../../services/batchService"
import { addBatchRequest } from "../../services/batchRegistrationService"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}

export default function ViewBatches() {
    const [batches, setBatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [color] = useState("#eb0c1b")

    useEffect(() => {
        getAllBatch()
    }, [])

    const getAllBatch = () => {
        setLoading(true)
        allBatch({})
            .then((res) => {
                setLoading(false)
                if (res.data.success) {
                    setBatches(res.data.data)
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
                toast.error("Unable to load batches")
            })
    }

    const formatDate = (date) => {
        if (!date) return "-"
        return date.toString().substring(0, 10)
    }

    const trainerName = (trainerAllot) => {
        if (!trainerAllot) return "-"
        return trainerAllot.name || trainerAllot
    }

    const handleBuyBatch = (batchId) => {
        let customerData = localStorage.getItem("_id");
       
        
        // let customer = JSON.parse(customerData);
        let memberId = customerData;

        let reqData = {
            memberId: memberId,
            batchId: batchId,
            plan: "Standard" // Default plan for now
        };

        setLoading(true);
        addBatchRequest(reqData)
            .then(res => {
                setLoading(false);
                if (res.data.success) {
                    toast.success("Batch request submitted successfully! Waiting for admin approval.");
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(err => {
                setLoading(false);
                toast.error("Something went wrong");
                console.log(err);
            });
    }

    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">View Batches</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Batches</li>
                    </ol>
                </div>
            </div>

            <RingLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={100}
            />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row my-2 mb-4">
                        <div className="col-md h4">Batches</div>
                    </div>

                    <div className="row g-4">
                        {batches.map((batch, index) => (
                            <div className="col-md-6 col-lg-3" key={batch._id}>
                                <div className="feature-item h-100 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                                    <div className="feature-img">
                                        <img
                                            src={`/img/feature-${(index % 4) + 1}.jpg`}
                                            className="img-fluid w-100"
                                            alt={batch.batchName}
                                        />
                                    </div>
                                    <div className="feature-content p-4">
                                        <h4 className="mb-3">{batch.batchName}</h4>
                                        <p className="mb-2">
                                            <strong>Trainer:</strong> {trainerName(batch.trainerAllot)}
                                        </p>
                                        <p className="mb-2">
                                            <strong>Time:</strong> {batch.time} ({batch.sessionType})
                                        </p>
                                        <p className="mb-2">
                                            <strong>Total Slots:</strong> {batch.totalSlots}
                                        </p>
                                        <p className="mb-2">
                                            <strong>Date:</strong> {formatDate(batch.startDate)} to {formatDate(batch.endDate)}
                                        </p>
                                        <p className="mb-2">
                                            <strong>Fees:</strong> Rs. {batch.fees}
                                        </p>
                                        <p className="mb-3">
                                            <strong>Status:</strong> {batch.status ? "Active" : "Inactive"}
                                        </p>
                                        {localStorage.getItem("userType") == "2" ? (
                                            <button 
                                                className="btn btn-info py-2 px-4 w-100 text-white"
                                                onClick={() => window.location.href = `/trainer/customer/progress?batchId=${batch._id}`}
                                            >
                                                View Customers
                                            </button>
                                        ) : (
                                            <button 
                                                className="btn btn-primary py-2 px-4 w-100"
                                                onClick={() => handleBuyBatch(batch._id)}
                                                disabled={!batch.status}
                                            >
                                                Request Batch
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {!loading && !batches.length && (
                            <div className="col-12 text-center">
                                <p className="fs-5 mb-0">No batches available right now.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
