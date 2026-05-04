import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { singleExcercise, updateExcercise } from "../../../services/excerciseService"
import { singleDiet } from "../../../services/dietService"

export default function UpdateDiet() {

    const params = useParams()
    const _id = params._id
    const [dietType, setDietType] = useState('')
    const [caloriesIntake, SetCaloriesIntake] = useState('')
    const [restrictions, setRestrictions] = useState('')
    const nav = useNavigate()


    useEffect(() => {
        getSingleDiet()
    }, [])


    const getSingleDiet = () => {
        singleDiet({ _id: _id }).then((res) => {
            if (res.data.success) {
                setDietType(res.data.data.dietType)
                SetCaloriesIntake(res.data.data.caloriesIntake)
                setRestrictions(res.data.data.restrictions)
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
            dietType,
            caloriesIntake,
            restrictions,
        }
        console.log(_id)

        updateExcercise(formData).then((res) => {
            if (res.data.success) {

                toast.success(res.data.message)
                nav("/trainer/diet/manage")

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
                    <h1 className="display-3 text-white">Update Diet</h1>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-3">
                <div className="form-section bg-dark p-5">
                    <h2 className="text-white text-center mb-4">Update Diet</h2>

                    <form onSubmit={submit}>
                        <div className="row g-4">

                            {/* Batch Name */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Batch Name"
                                        value={dietType}
                                        onChange={(e) => setDietType(e.target.value)}
                                    />
                                    <label htmlFor="name">Diet Type</label>
                                </div>
                            </div>
                            {/* Trainer ID */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Trainer ID"
                                        value={caloriesIntake}
                                        onChange={(e) => SetCaloriesIntake(e.target.value)}
                                    />
                                    <label htmlFor="name">calories Inatke</label>
                                </div>
                            </div>

                            {/* Start Date */}
                            <div className="col-6">
                                <div className="form-floating form-section-col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={restrictions}
                                        onChange={(e) => setRestrictions(e.target.value)}
                                    />
                                    <label htmlFor="name">Restrictions</label>
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
