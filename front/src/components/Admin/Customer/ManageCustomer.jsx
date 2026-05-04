import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'
import { allCustomer, deleteCustomer } from "../../../services/customerService"
import ReactModal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: "50%",
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        zIndex: 9999
    }
};

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageCustomer() {
    const [clientName, setClientName] = useState('')
    const [email, setEmail] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bodyFat, setBodyFat] = useState('')
    const [bmi, setBmi] = useState('')
    const [date, setDate] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const imageStyle = {
        height: "100px",
        width: "100px",
        borderRadius: "999px"
    }
    let baseUrl = BASE_URL
    let [color, setColor] = useState("#eb0c1b");
    let [loading, setLoading] = useState(false);
    const [Customers, setCustomers] = useState([])
    useEffect(() => {
        getAllCustomers()
    }, [])

    const getAllCustomers = () => {
        setLoading(true)
        allCustomer({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setCustomers(res.data.data)
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

    const deleteCustomerFun = (_id) => {
        setLoading(true)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCustomer({ _id: _id }).then((res) => {
                    if (res.data.success) {
                        setLoading(false)
                        toast.success(res.data.message)
                        getAllCustomers()
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
            else {
                setLoading(false)
            }
        });
    };

    const submit = (e) => {
        e.preventDefault()

        let formData = {
            clientName,
            bodyFat,
            bmi,
            email,
            date,
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
           
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4
                        className="text-white display-4 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Customers
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
            <RingLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={100}
            />

            <div className="container-fluid">

                <div className="row my-2">
                    <div className="col-md h4">
                        Customers
                    </div>
                </div>
                <table className="table table-bordered text-dark">
                    <thead>
                        <tr>
                            <th scope="col">Sr.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>

                            <th scope="col">Goal</th>
                            <th scope="col">Age</th>

                            <th scope="col">Image</th>

                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Customers.map((Customer, index) => (
                                <tr>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td scope="row">
                                        {Customer.name}
                                    </td>
                                    <td scope="row">
                                        {Customer.email}
                                    </td>
                                    <td scope="row">
                                        {Customer.phone}
                                    </td>
                                    <td scope="row">
                                        {Customer.gender}
                                    </td>
                                    <td scope="row">
                                        {Customer.address}
                                    </td>
                                    <td scope="row">
                                        {Customer.goal}
                                    </td>
                                    {/* <td scope="row">
                                            {Customer.userId}
                                        </td> */}
                                    <td scope="row">
                                        {Customer.age}
                                    </td>
                                    <td>
                                        <a href={Customer.image} target="_blank">
                                            <img src={Customer.image} alt="unable to load" style={imageStyle} />
                                        </a>
                                    </td>
                                    {/* <td scope="row">
                                            {Trainer.Specialization}
                                        </td> */}
                                    <td scope="row">
                                        {Customer.status}

                                        {/* <Link to={`/admin/trainer/update/${Trainer._id}`}>
                                                <button className="btn btn-sm text-primary">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </Link> */}
                                        <button className="btn text-danger" onClick={() => {
                                            deleteCustomerFun(Customer._id)
                                        }}>

                                            <i class="bi bi-trash-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Team End */}
        </>
    )
}