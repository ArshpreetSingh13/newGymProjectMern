import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { addContact, updateContact } from "../../services/contactService";
import { useState } from "react";


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        console.log("Hit");

        let formData = {
            name,
            email,
            phone,
            subject,
            message
        }

        addContact(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav("/contact")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error("Something went wrong")
            })
    }

    // updateContact(formData).then((res) => {
    //     if (res.data.success) {

    //         toast.success(res.data.message)
    //         nav("/contact")

    //     }
    //     else {
    //         toast.error(res.data.message)
    //     }
    // }).catch((err) => {
    //     console.log(err);
    //     toast.error(err)
    // })

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
                        Contact Us
                    </h4>
                    <ol
                        className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Contact</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="mb-4">
                                <h4 className="text-primary">Contact Us</h4>
                                <h1 className="display-4 mb-4">Contact With Team Of Experts</h1>
                                <p className="mb-4">
                                    Have questions or need guidance? Connect with our expert trainers anytime and take the next step towards your fitness goals with FitLab.
                                </p>
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fas fa-map-marker-alt fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Address</h4>
                                                <p className="mb-0">100-B,Connaught Place,New Delhi</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fas fa-envelope fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Mail Us</h4>
                                                <p className="mb-0">Fitlab@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bg-white d-flex">
                                            <i className="fa fa-phone-alt fa-2x text-primary me-2" />
                                            <div>
                                                <h4>Telephone</h4>
                                                <p className="mb-0">(+91) 9828384858</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-banner">
                                <div className="row g-0">
                                    <div className="col-9">
                                        <div className="p-4 pe-0">
                                            <h4 className="display-5 mb-0">
                                                Want To Join Our Talanded Team
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <Link to={"/"} className="h5 mb-0 me-3">
                                                    visit our website
                                                </Link>
                                                <a
                                                    className="text-primary py-3"
                                                    href="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                                >
                                                    <i className="fas fa-play-circle me-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="form-section bg-dark p-5 h-100">
                                <h1 className="display-4 text-white mb-4">Get In touch</h1>
                                <form onSubmit={submit}>
                                    <div className="row g-4">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="name"
                                                    value={name}
                                                    placeholder="Your Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input
                                                    type="email"
                                                    className="form-control border-0"
                                                    id="email"
                                                    value={email}
                                                    placeholder="Your Email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input
                                                    type="phone"
                                                    className="form-control border-0"
                                                    id="phone"
                                                    placeholder="Phone"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                                <label htmlFor="phone">Your Phone</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="project"
                                                    placeholder="Project"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                />
                                                <label htmlFor="project">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control border-0"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 160 }}
                                                    defaultValue={""}
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                                <label htmlFor="message">Message</label>
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
                                                <button className="btn-primary w-100 py-3 px-5" onClick={submit}>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="h-100 overflow-hidden">
                                <iframe
                                    className="w-100"
                                    style={{ height: 400 }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447994.31886201614!2d76.4661137495659!3d28.690974262482456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1775847405616!5m2!1sen!2sin"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>

    )
}