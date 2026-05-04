import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { addBatch } from "../../../services/batchService"
import { allTrainers } from "../../../services/trainerService"

export default function AddBatch() {

    const [batchName, setBatchName] = useState('')
    const [time, setTime] = useState('')
    const [trainerAllot, setTrainerAllot] = useState('')
    const [fees, setFees] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [totalSlot, setTotalSlot] = useState('')
    const [sessionType, setSessionType] = useState('')
    const [trainers, setTrainers] = useState([])

    const nav = useNavigate()

    useEffect(() => {
        getAllTrainers()
    }, [])

    const getAllTrainers = () => {
        allTrainers({})
            .then((res) => {
                if (res.data.success) {
                    setTrainers(res.data.data)
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error("Unable to load trainers")
            })
    }

    const submit = (e) => {
        e.preventDefault()

        let formData = {
            batchName,
            startDate,
            endDate,
            time,
            totalSlot,
            fees,
            trainerAllot,
            sessionType
        }

        addBatch(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav("/admin/batch/manage")
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
                    <h1 className="display-3 text-white">Add Batch</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Add Batch</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Batch Name */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Batch Name"
                                        value={batchName}
                                        onChange={(e) => setBatchName(e.target.value)}
                                    />
                                    <label htmlFor="name">Batch Name</label>
                                </div>
                            </div>
                            {/* Trainer */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <select
                                        className="form-control"
                                        value={trainerAllot}
                                        onChange={(e) => setTrainerAllot(e.target.value)}
                                    >
                                        <option value="">Select Trainer</option>
                                        {trainers.map((trainer) => (
                                            <option value={trainer._id} key={trainer._id}>
                                                {trainer.name}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="name">Trainer Name</label>
                                </div>
                            </div>

                            {/* Start Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                    <label htmlFor="name">Start Date</label>
                                </div>
                            </div>
                            {/* End Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                    <label htmlFor="name">End Date</label>
                                </div>
                            </div>
                            {/* Time */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Time (e.g. 7AM-8AM)"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                    <label htmlFor="name">Timings</label>
                                </div>
                            </div>

                            {/* Total Slots */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Total Slots"
                                        value={totalSlot}
                                        onChange={(e) => setTotalSlot(e.target.value)}
                                    />
                                    <label htmlFor="name">Total slots</label>
                                </div>
                            </div>
                            {/* Session Type */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <select
                                        className="form-control"
                                        value={sessionType}
                                        onChange={(e) => setSessionType(e.target.value)}
                                    >
                                        <option value="">Select Session</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                    <label htmlFor="name">Select Session</label>
                                </div>
                            </div>
                            {/* Fees */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Fees"
                                        value={fees}
                                        onChange={(e) => setFees(e.target.value)}
                                    />
                                    <label htmlFor="name">Fees</label>
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                    Add Batch
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
