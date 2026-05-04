import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
// import { singleTrainer, updateTrainers } from "../../../services/trainerService"
// import { singleCustomer } from "../../../services/customerService"
import { singleProgress, updateProgress } from "../../../services/progressService"

export default function UpdateProgress() {

    const params = useParams()
    const _id = params._id
    const [clientName, setClientName] = useState('')
    const [bmi, setBmi] = useState('')
    const [email, setEmail] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bodyFat, setBodyFat] = useState('')
    const nav = useNavigate()


    useEffect(() => {
        getSingleProgress()
    }, [])


    const getSingleProgress = () => {
        singleProgress({ _id: _id }).then((res) => {
            if (res.data.success) {
                setClientName(res.data.data.clientName)
                setWeight(res.data.data.weight)
                setEmail(res.data.data.email)
                setBmi(res.data.data.bmi)
                setBodyFat(res.data.data.bodyFat)
                setHeight(res.data.data.height)
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
            clientName,
            weight,
            email,
            bmi,
            bodyFat,
            height
        }
        console.log(_id)

        updateProgress(formData).then((res) => {
            if (res.data.success) {

                toast.success(res.data.message)
                nav("/trainer/customer/progress")

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
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Update Progress
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Categories
                                        </a>
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Service Start */}
            <div className="col-lg-6 offset-lg-3 wow fadeInRight" data-wow-delay="0.4s">
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

            {/* Team End */}
        </>
    )
}
