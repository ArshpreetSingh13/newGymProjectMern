import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"

import { singleMembership, updateMembership } from "../../../services/membershipService"

export default function UpdateMembership() {

    const params = useParams()
    const _id = params._id
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [feature, setFeature] = useState('')
    const [discount, setDiscount] = useState('')
    const [onhold, setOnhold] = useState('')
    const nav = useNavigate()


    useEffect(() => {
        getsingleMembership()
    }, [])


    const getsingleMembership = () => {
        singleMembership({ _id: _id }).then((res) => {
            if (res.data.success) {
                setName(res.data.data.name)
                setDuration(res.data.data.duration)
                setPrice(res.data.data.price)
                setDescription(res.data.data.description)
                setFeature(res.data.data.feature)
                setDiscount(res.data.data.discount)
                setOnhold(res.data.data.onhold)
           
            }
            else {
                toast.error(res.data.message)
            }

        }).catch((err) => {
            console.log(err);
            toast.error(err)
        })

    }
    const submit = (e) => {
        e.preventDefault()
        console.log("form submitted");


        let formData = { 
            _id: _id,
            name,
            duration,
            price,
            description,
            feature,
            discount,
            onhold,
            
        }


        console.log(_id)

        updateMembership(formData).then((res) => {
            if (res.data.success) {

                toast.success(res.data.message)
                nav("/admin/membership/manage")

            }
            else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err);
            toast.error(err)
        })

    }
    return (
        <>
            {/* Header */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5 text-center">
                    <h1 className="display-3 text-white">Update Membership</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Update Membership</h2>

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
                                    <label htmlFor="name">Batch Name</label>
                                </div>
                            </div>
                            {/* Trainer ID */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Trainer ID"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <label htmlFor="name">Trainer Name</label>
                                </div>
                            </div>

                            {/* Start Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={feature}
                                        onChange={(e) => setFeature(e.target.value)}
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
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                    />
                                    <label htmlFor="name">End Date</label>
                                </div>
                            </div>
                            {/* duration */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="duration (e.g. 7AM-8AM)"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                    <label htmlFor="name">Duration</label>
                                </div>
                            </div>
                            {/* Available Slots */}
                            {/* <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Available Slots"
                                        value={availableSlot}
                                        onChange={(e) => setAvailableSlot(e.target.value)}
                                    />
                                    <label htmlFor="name">Available slots</label>
                                </div>
                            </div> */}
                            {/* Total Slots */}
                            {/* <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Total Slots"
                                        value={onhold}
                                        onChange={(e) => setOnhold(e.target.value)}
                                    />
                                    <label htmlFor="name">Total slots</label>
                                </div>
                            </div> */}
                            {/* Session Type */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <select
                                        className="form-control"
                                        value={onhold}
                                        onChange={(e) => setOnhold(e.target.value)}
                                    >
                                        <option value="">Select onhold</option>
                                        <option value="True">True</option>
                                        <option value="False">False</option>
                                    </select>
                                    <label htmlFor="name">Select</label>
                                </div>
                            </div>
                            {/* description */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <label htmlFor="name">description</label>
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                    Update
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
