import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { changePassword } from "../../services/userService";


export default function ChangeCustomerPswd() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const nav = useNavigate()

    const submit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem("_id")
        if (!userId) {
            return toast.error("User not logged in");
        }
        try {
            const payload = {
                _id: userId,
                currentPassword: oldPassword,
                newPassword,
                confirmPassword
            };

            const result = await changePassword(payload);
            if (result?.data?.success) {
                toast.success(result.data.message || "Password changed successfully");
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                toast.error(result?.data?.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error(
                error?.response?.data?.message || "Server error. Please try again"
            );
        }
    };
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Change Password
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Service Start */}
            <div className="col-lg-6 offset-lg-3 my-3">
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-5 text-white mb-4 text-center">Change Password</h1>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Old Password */}
                            <div className="col-12">
                                <div className="form-floating form-section-col position-relative">
                                    <input
                                        type={showOld ? "text" : "password"}
                                        className="form-control border-0"
                                        id="oldPassword"
                                        placeholder="Old Password"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                    <label htmlFor="oldPassword">Old Password</label>

                                    <button
                                        type="button"
                                        onClick={() => setShowOld(!showOld)}
                                        style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                        👁
                                    </button>
                                </div>
                            </div>

                            {/* New Password */}
                            <div className="col-12">
                                <div className="form-floating form-section-col position-relative">
                                    <input
                                        type={showNew ? "text" : "password"}
                                        className="form-control border-0"
                                        id="newPassword"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <label htmlFor="newPassword">New Password</label>

                                    <button
                                        type="button"
                                        onClick={() => setShowNew(!showNew)}
                                        style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                        👁
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="col-12">
                                <div className="form-floating form-section-col position-relative">
                                    <input
                                        type={showConfirm ? "text" : "password"}
                                        className="form-control border-0"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <label htmlFor="confirmPassword">Confirm Password</label>

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                        👁
                                    </button>
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


        </>
    )
}
