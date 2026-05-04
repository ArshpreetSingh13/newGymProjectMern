import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'
import Modal from 'react-modal';
import { allContacts, updateContact } from "../../../services/contactService";


export default function ManageContact() {
    const [reply, setReply] = useState('')
    const [id, setId] = useState('')

    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        console.log("Hit");
        let formData = {
            reply: reply,
            _id: id
        }
        updateContact(formData).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)
                closeModal()
                getAllContacts()

            }
            else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err);
            toast.error(err)
        })
    }

    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    let [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        getAllContacts()
    }, [])

    function openModal(_id) {
        setId(_id)
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
          getAllContacts()
    }

    const getAllContacts = () => {
        setLoading(true)
        allContacts({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setContacts(res.data.data)
            }
            else {
                setLoading(false)
                toast.error(res.data.message)
            }
        }).catch((err) => {
            setLoading(false)
            console.log(err);
        })
    }

    return (
        <>

            {/* Reply Modal */}
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-4 text-white mb-4">Reply Customer Query</h1>
                    <form onSubmit={submit}>
                        <div className="row g-4">
                            <div className=" col-12">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        id="email"
                                        value={reply}
                                        placeholder="Enter Reply"
                                        onChange={(e) => setReply(e.target.value)}

                                    />
                                    <label htmlFor="project">Enter Reply</label>
                                </div>
                            </div>
                            <div className="row py-2 ">
                                <div className="col-md d-flex gap-3">
                                    <button className="btn-primary" type="submit" >
                                        Submit
                                    </button>
                                    <div className="col-md">
                                        <button className="btn-primary" type="button" onClick={closeModal} >
                                            CANCEL
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </Modal>
            {/* End Reply Modal */}


            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Contact
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
            {/* Team start */}
            {/* <RingLoader
                color="#eb0c1b"
                loading={loading}
                cssOverride={override}
                size={100}
            /> */}

            <div className="container-fluid">

                <div className="row my-2">
                    <div className="col-md h4">
                        Customers
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-dark">
                        <thead className="table-light">
                            <tr>
                                <th>Sr.no</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th className="d-none d-md-table-cell">Email</th>
                                <th className="d-none d-lg-table-cell">Subject</th>
                                <th className="d-none d-lg-table-cell">Message</th>
                                <th className="d-none d-xl-table-cell">Reply</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((c, index) => (
                                    <tr key={c._id || index}>
                                        <th scope="row">{index + 1}</th>

                                        <td>{c.name}</td>

                                        <td>{c.phone}</td>

                                        <td className="d-none d-md-table-cell">
                                            {c.email}
                                        </td>

                                        <td className="d-none d-lg-table-cell">
                                            {c.subject}
                                        </td>

                                        <td className="d-none d-lg-table-cell text-wrap" style={{ maxWidth: "200px" }}>
                                            {c.message}
                                        </td>

                                        <td className="d-none d-xl-table-cell text-wrap" style={{ maxWidth: "200px" }}>
                                            {c.reply || "-"}
                                        </td>

                                        <td>
                                            {c.status}
                                        </td>
                                        <td>

                                            <div>
                                                <button className="btn btn-sm btn-primary" onClick={() => {
                                                    openModal(c._id)
                                                }}>
                                                    Reply
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Team End */}
        </>
    )
}