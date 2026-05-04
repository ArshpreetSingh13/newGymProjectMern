import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { singleExcercise, updateExcercise } from "../../../services/excerciseService"

export default function UpdateExcercise() {

    const params = useParams()
    const _id = params._id
    const [excerciseName, setExcerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [repetitions, setRepetetion] = useState('')
    const [duration, setDuration] = useState('')
    const nav = useNavigate()


    useEffect(() => {
        getSingleExcercise()
    }, [])


    const getSingleExcercise = () => {
        singleExcercise({ _id: _id }).then((res) => {
            if (res.data.success) {
                setExcerciseName(res.data.data.excerciseName)
                setSets(res.data.data.sets)
                setRepetetion(res.data.data.repetitions)
                setDuration(res.data.data.duration)

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
            excerciseName,
            sets,
            repetitions,
            duration,
        }
        console.log(_id)

        updateExcercise(formData).then((res) => {
            if (res.data.success) {

                toast.success(res.data.message)
                nav("/trainer/excercise/manage")

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
                    <h1 className="display-3 text-white">Update Excercise</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Update Excercise</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Batch Name */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Batch Name"
                                        value={excerciseName}
                                        onChange={(e) => setExcerciseName(e.target.value)}
                                    />
                                    <label htmlFor="name">Exercise Name</label>
                                </div>
                            </div>
                            {/* Trainer ID */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Trainer ID"
                                        value={sets}
                                        onChange={(e) => setSets(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Sets</label>
                                </div>
                            </div>

                            {/* Start Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={repetitions}
                                        onChange={(e) => setRepetetion(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Repetitions</label>
                                </div>
                            </div>
                           
                            {/* Available Slots */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Available Slots"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                    <label htmlFor="name">Enter Duration</label>
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
