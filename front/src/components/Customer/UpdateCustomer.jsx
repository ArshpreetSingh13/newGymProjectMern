import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
// import { singleCustomer, updateCustomer } from "../../../services/trainerService"
import { singleCustomer, updateCustomer } from "../../services/customerService"

export default function UpdateCustomer() {

    const params = useParams()
    const _id = params._id
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [goal, setGoal] = useState('')
    const [about, setAbout] = useState('')
    const [image, setImage] = useState('')
    const [address, setAddress] = useState('')
    const nav = useNavigate()


    useEffect(() => {
        getSingleCustomer()
    }, [])


    const getSingleCustomer = () => {
        singleCustomer({ _id: localStorage.getItem("_id") }).then((res) => {
            if (res.data.success) {
                setName(res.data.data.name)
                setGender(res.data.data.gender)
                // setEmail(res.data.data.email)
                setPhone(res.data.data.phone)
                setAddress(res.data.data.address)
                setAbout(res.data.data.about)
                // setPassword(res.data.data.password)
                setGoal(res.data.data.speacilization)
                setImage(res.data.data.image)
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
        let formData = new FormData()
        formData.append("_id", localStorage.getItem("_id"))
        formData.append("name", name)
        // formData.append("email", email)
        formData.append("image", image)
        formData.append("phone", phone)
        formData.append("address", address)
        formData.append("gender", gender)

        console.log(_id)

        updateCustomer(formData).then((res) => {
            if (res.data.success) {

                toast.success(res.data.message)
                nav("/")

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
                                Change Password
                            </h1>
                            {/* <nav aria-label="breadcrumb">
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
                            </nav> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Service Start */}
            <div className="col-lg-6 offset-lg-3 wow fadeInRight" data-wow-delay="0.4s">
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-5 text-white mb-4 text-center">Change Password</h1>

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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control border-0"
                                        id="name"
                                        placeholder="Trainer Contact"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <label htmlFor="name">Your Contact</label>
                                </div>
                            </div>


                            {/* <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="email"
                                        className="form-control border-0"
                                        id="email"
                                        placeholder="Trainer Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="password"
                                        className="form-control border-0"
                                        id="password"
                                        placeholder="Trainer Email"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="email">Password</label>
                                </div>
                            </div> */}

                            {/* gender */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <select className="form-control" id="subject" value={gender} onChange={(e) =>
                                        setGender(e.target.value)}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label htmlFor="subject">Select Gender</label>
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
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                    />
                                    <label htmlFor="phone">Speacilization</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="file"
                                        className="form-control border-0"
                                        id="phone"
                                        placeholder="Phone"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                    <label htmlFor="phone">Your Image</label>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></textarea>
                                    <label htmlFor="address">Address</label>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="col-12">
                                <div className="form-section-col">
                                    <button className="btn-primary w-100 py-3 px-5" type="submit">
                                        Change Password
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
