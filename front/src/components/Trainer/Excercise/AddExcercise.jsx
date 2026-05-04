import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { addExcercise } from "../../../services/excerciseService"
import { allBatchRequestsTrainer } from "../../../services/batchRegistrationService"

export default function AddExcercise() {

    const [excerciseName, setExcerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [repetitions, setRepetetion] = useState('')
    const [duration, setDuration] = useState('')
    const [batchRegistrationId, setBatchRegistrationId] = useState('')
    const [myCustomers, setMyCustomers] = useState([])
    const trainerId = localStorage.getItem("_id")
    const { batchRegId, customerId } = useParams()

    const nav = useNavigate()

    useEffect(() => {
        if (trainerId) {
            allBatchRequestsTrainer({ trainerId: trainerId })
                .then(res => {
                    if (res.data.success) {
                        setMyCustomers(res.data.data)
                        // Pre-select if coming from trainer customer progress
                        if (batchRegId) {
                            setBatchRegistrationId(batchRegId)
                        }
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

        let formData = {
            excerciseName,
            sets,
            repetitions,
            duration,
            trainerId,
            batchRegistrationId,
            memberId: myCustomers.find(r => r._id === batchRegistrationId)?.memberId?._id
        }

        addExcercise(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav("/trainer/excercise/manage")
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
            {/* Header */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5 text-center">
                    <h1 className="display-3 text-white">Add Exercise</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Add Exercise</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Customer / Batch */}
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
                                    <label htmlFor="customer">Customer / Batch</label>
                                </div>
                            </div>

                            {/* Exercise Name */}
                            <div className="col-6">
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
                            {/* Exercise Sets */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Exercise Sets"
                                        value={sets}
                                        onChange={(e) => setSets(e.target.value)}
                                    />
                                    <label htmlFor="sets">Exercise Sets</label>
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
                                    <label htmlFor="repetitions">Repetitions</label>
                                </div>
                            </div>
                            {/* Duration */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Duration (mins)"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                    <label htmlFor="duration">Duration (mins)</label>
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                    Add Exercise
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}