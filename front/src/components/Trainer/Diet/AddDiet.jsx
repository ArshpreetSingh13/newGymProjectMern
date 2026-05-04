import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { addDiet } from "../../../services/dietService"
import { allBatchRequestsTrainer } from "../../../services/batchRegistrationService"

export default function AddDiet() {

    const [dietType, setDietType] = useState('')
    const [restrictions, setRestrictions] = useState('')
    const [caloriesIntake, setCaloriesIntake] = useState('')  // fixed casing: SetCaloriesIntake → setCaloriesIntake
    const [batchRegistrationId, setBatchRegistrationId] = useState('')
    const [myCustomers, setMyCustomers] = useState([])
    const nav = useNavigate()
    const { batchRegId, customerId } = useParams()
    const trainerId = localStorage.getItem("trainerId")

    useEffect(() => {
        if (trainerId) {
            allBatchRequestsTrainer({ trainerId })
                .then(res => {
                    if (res.data.success) {
                        setMyCustomers(res.data.data)
                        if (batchRegId) setBatchRegistrationId(batchRegId)
                    }
                })
                .catch(err => console.log(err))
        }
    }, [trainerId, batchRegId])

    const submit = (e) => {
        e.preventDefault()

        if (!batchRegistrationId) {
            toast.error("Please select a customer batch.")
            return
        }

        const formData = {
            dietType,
            restrictions,
            caloriesIntake,
            trainerId,
            batchRegistrationId,
            customerId: customerId || myCustomers.find(r => r._id === batchRegistrationId)?.memberId?._id
        }

        addDiet(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav("/trainer/diet/manage")
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
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5 text-center">
                    <h1 className="display-3 text-white">Add Diet</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Add Diet</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <select
                                        className="form-select"
                                        value={batchRegistrationId}
                                        onChange={(e) => setBatchRegistrationId(e.target.value)}
                                    >
                                        <option value="">Select Customer</option>
                                        {myCustomers.map((req) => (
                                            <option key={req._id} value={req._id}>
                                                {req.memberId?.name} (Batch: {req.batchId?.batchName})
                                            </option>
                                        ))}
                                    </select>
                                    <label>Customer / Batch</label>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Diet Type"
                                        value={dietType}
                                        onChange={(e) => setDietType(e.target.value)}
                                    />
                                    <label>Diet Type</label>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Restrictions"
                                        value={restrictions}
                                        onChange={(e) => setRestrictions(e.target.value)}
                                    />
                                    <label>Restrictions</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Calories Intake"
                                        value={caloriesIntake}
                                        onChange={(e) => setCaloriesIntake(e.target.value)}
                                    />
                                    <label>Calories Intake</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                    Add Diet
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}