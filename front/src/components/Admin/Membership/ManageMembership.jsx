import { useEffect, useState } from "react"
import { BASE_URL } from "../../../endPoints"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Swal from 'sweetalert2'
import { allMembership, deleteMembership } from "../../../services/membershipService"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageMembership() {
    const imageStyle = {
        height: "100px",
        width: "100px",
        borderRadius: "999px"
    }
    let baseUrl = BASE_URL
    let [color, setColor] = useState("#eb0c1b");
    let [loading, setLoading] = useState(false);
    const [Membership, setMembership] = useState([])
    useEffect(() => {
        getallMembership()
    }, [])

    const getallMembership = () => {
        setLoading(true)
        allMembership({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setMembership(res.data.data)
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

    const deleteMembershipFun = (_id) => {
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
                deleteMembership({ _id: _id }).then((res) => {
                    if (res.data.success) {
                        setLoading(false)
                        toast.success(res.data.message)
                        getallMembership()
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
                        Manage Membership
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

            <div className="container-xxl">
                <div className="container">
                    <div className="row my-2">
                        <div className="col-md h4">
                            Manage Membership
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/membership/add">
                                <button className="btn btn-sm btn-primary rounded rounded-pill" type="submit">
                                    + Add New Membership
                                </button>
                            </Link>
                        </div>
                    </div>
                    <table className="table table-bordered text-dark">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Duration </th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Features</th>
                                <th scope="col">Discount</th>
                                <th scope="col">On Hold</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Membership.map((Membership, index) => (
                                    <tr>
                                        <th scope="row">
                                            {index + 1}
                                        </th>
                                        <td scope="row">
                                            {Membership.name}
                                        </td>
                                        <td scope="row">
                                            {Membership.duration}
                                        </td>
                                        <td scope="row">
                                            {Membership.price}
                                        </td>
                                        <td scope="row">
                                            {Membership.description}
                                        </td>
                                        <td scope="row">
                                            {Membership.features}
                                        </td>
                                        <td scope="row">
                                            {Membership.discount}
                                        </td>
                                        <td scope="row">
                                            {Membership.onhold ? 'true' : 'false'}
                                        </td>
                                        <td scope="row">
                                            {Membership.status}

                                            <Link to={`/admin/membership/update/${Membership._id}`}>
                                                <button className="btn btn-sm text-primary">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </Link>
                                            <button className="btn text-danger" onClick={() => {
                                                deleteMembershipFun(Membership._id)
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
            </div>

            {/* Team End */}
        </>
    )
}