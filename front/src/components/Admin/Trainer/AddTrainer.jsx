import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { addTrainers } from "../../../services/trainerService"

export default function AddTrainer() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('')
    const [speacilization, setSpeacilization] = useState('')
    const [about, setAbout] = useState('')
    const [image, setImage] = useState('')
    
    const nav = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        console.log("form submitted");
        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("phone", phone)
        formData.append("experience", experience)
        formData.append("speacilization", speacilization)
        formData.append("about", about)
        formData.append("image", image)
        addTrainers(formData).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)
                nav("/admin/trainer/manage")

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
                                Add Trainer
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
                    <h1 className="display-5 text-white mb-4 text-center">Add Trainer</h1>

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
                                    <label htmlFor="name">Trainer Name</label>
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
                                    <label htmlFor="name">Trainer Contact</label>
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
                                    <label htmlFor="email">Trainer Email</label>
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
                            </div>

                            {/* Experience */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="experience"
                                        placeholder="Experience"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                    />
                                    <label htmlFor="experience">Experience</label>
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
                                        value={speacilization}
                                        onChange={(e) => setSpeacilization(e.target.value)}
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
                                    <label htmlFor="phone">Speacilization</label>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        placeholder="Address"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    ></textarea>
                                    <label htmlFor="address">About</label>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="col-12">
                                <div className="form-section-col">
                                    <button className="btn-primary w-100 py-3 px-5" type="submit">
                                        Add Now
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
