import { Profiler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/userService"

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [goal, setGoal] = useState('')
    const [image, setProfile] = useState(null)



    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        console.log("Hit");

        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("gender", gender)
        formData.append("phone", phone)
        formData.append("address", address)
        formData.append("image", image)
        formData.append("age", age)
        formData.append("goal", goal)




        //with Backend but (without photo upload)
        // let formData = {
        //     name: name,
        //     phone: phone,
        //     email: email,
        //     password: password,
        //     gender: gender,
        //     address: address,
        // }
        register(formData).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)
                nav("/login")
            }
            else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err);
            toast.error(err)
        })


        //without backend ....we use thius in frontend
        // if (name == "Admin" && email == "admin@gmail.com" && password == "1234") {
        //     localStorage.setItem("email", email)
        //     localStorage.setItem("isLoggedIn", true)
        //     toast.success("Login Successfully")
        //     nav("/admin/users/manage")
        // }
        // else if (name == "Saksham" && email == "saksham@gmail.com" && password == "1234") {
        //     localStorage.setItem("email", email)
        //     localStorage.setItem("isLoggedIn", true)
        //     toast.success("Login Successfully")
        //     nav("/")
        // }
        // else if (name == "Trainer" && email == "trainer@gmail.com" && password == "1234") {
        //     localStorage.setItem("email", email)
        //     localStorage.setItem("isLoggedIn", true)
        //     toast.success("Login Successfully")
        //     nav("/trainer/users/manage")
        // }
        // else {
        //     toast.error("Invalid email or password")
        // }

    }
    return (
        <>
            {/* Modal Search Start */}
            <div
                className="modal fade"
                id="searchModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Search by keyword
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body d-flex align-items-center bg-primary">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input
                                    type="search"
                                    className="form-control p-3"
                                    placeholder="keywords"
                                    aria-describedby="search-icon-1"
                                />
                                <span
                                    id="search-icon-1"
                                    className="btn bg-light border nput-group-text p-3"
                                >
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Regsiter Page
                    </h4>
                    <ol
                        className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Contact Start */}

            <div className="col-lg-6 offset-lg-3 wow fadeInRight" data-wow-delay="0.4s">
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-4 text-white mb-4 offset-4">Register</h1>
                    <form>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="name" value={name}
                                        placeholder="Your Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Name</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="name" value={phone}
                                        placeholder="Your Name"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Phone</label>
                                </div>
                            </div>

                            <div className=" col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="email"
                                        className="form-control border-0"
                                        id="email" value={email}
                                        placeholder="Project"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="project">Enter Email</label>
                                </div>
                            </div>

                            <div className=" col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="password"
                                        className="form-control border-0"
                                        id="email" value={password}
                                        placeholder="Project"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="project">Enter Password</label>
                                </div>
                            </div>
                            <div className=" col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="number"
                                        className="form-control border-0"
                                        id="email" value={age}
                                        placeholder="age"
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                    <label htmlFor="project">Enter Age</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <select className="form-control" id="subject"
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                    >
                                        <option value="">Select Goal</option>
                                        <option value="Fat Loss">Fat Loss</option>
                                        <option value="Muscle Gain">Muscle Gain</option>
                                        <option value="Strength Training">Strength Training</option>
                                        <option value="General Fitness">General Fitness</option>

                                    </select>
                                    <label htmlFor="subject">Enter Goal</label>
                                </div>
                            </div>
                            <div className=" col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="file"
                                        className="form-control border-0"
                                        id="email"
                                        placeholder="Project"
                                        onChange={(e) => setProfile(e.target.files[0])}
                                    />
                                    <label htmlFor="project">image</label>
                                </div>
                            </div>

                            <div className="col-12">
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
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        placeholder="address" value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    > </textarea>
                                    <label htmlFor="subject">Address</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue="#"
                                        id="flexCheck"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheck">
                                        I agree with the site privacy policy
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-section-col">
                                    <button className="btn-primary w-100 py-3 px-5" type="submit" onClick={submit}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
            {/* Contact End */}
        </>

    )
}