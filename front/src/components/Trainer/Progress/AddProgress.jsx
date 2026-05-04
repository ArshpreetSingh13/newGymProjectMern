import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { addProgress } from "../../../services/progressService"

export default function AddProgress() {


    const [clientName, setClientName] = useState('')
    const [email, setEmail] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bodyFat, setBodyFat] = useState('')
    const [bmi, setBmi] = useState('')
    const [date, setDate] = useState('')
    // const [availableSlot, setAvailableSlot] = useState('')
    // const [sessionType, setSessionType] = useState('')

    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        let formData = {
            clientName,
            bodyFat,
            bmi,
            email,
            height,
            weight,

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
            {/* Header */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5 text-center">
                    <h1 className="display-3 text-white">Add Progress</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Add Progress</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Batch Name */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Batch Name"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                    />
                                    <label htmlFor="name">Client Name</label>
                                </div>
                            </div>
                            {/* Trainer ID */}

                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Time (e.g. 7AM-8AM)"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Email</label>
                                </div>
                            </div>
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

                            {/* <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Total Slots"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Date</label>
                                </div>
                            </div> */}

                            {/* Submit */}
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                    Add Progress
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )



}