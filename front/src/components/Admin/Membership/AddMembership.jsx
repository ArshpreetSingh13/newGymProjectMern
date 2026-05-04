import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { addMembership } from "../../../services/membershipService"

export default function AddMembership() {

    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    // const [fees, setFees] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [discount, setDiscount] = useState('')
    const [onhold, setOnhold] = useState('')
    // const [sessionType, setSessionType] = useState('')

    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        let formData = {
            name,
            duration,
            price,
            description,
            features,
            discount,
            onhold
        }

        addMembership(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav("/admin/membership/manage")
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
                    <h1 className="display-3 text-white">Add Membership</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Add Membership</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Batch Name */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Batch Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name">Membership Name</label>
                                </div>
                            </div>
                            {/* Trainer ID */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Trainer ID"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                    <label htmlFor="name">Duration</label>
                                </div>
                            </div>

                            {/* Start Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <label htmlFor="name">Price</label>
                                </div>
                            </div>
                            {/* End Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={features}
                                        onChange={(e) => setFeatures(e.target.value)}
                                    />
                                    <label htmlFor="name">Features</label>
                                </div>
                            </div>
                            {/* Time */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="Number"
                                        className="form-control"
                                        placeholder="Discount"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                    />
                                    <label htmlFor="name">Discount</label>
                                </div>
                            </div>
                            {/* Available Slots */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Available Slots"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <label htmlFor="name">Description</label>
                                </div>
                            </div>
                           
                            {/* Session Type */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <select
                                        className="form-control"
                                        value={onhold}
                                        onChange={(e) => setOnhold(e.target.value)}
                                    >
                                        <option value="">Select </option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                    <label htmlFor="name">Onhold</label>
                                </div>
                            </div>
        
                            {/* Submit */}
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                    Add Membership
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}