import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allExcercise } from "../../services/excerciseService";

export default function MyExercise() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        loadExercises();
    }, []);

    const loadExercises = () => {
        const userId = localStorage.getItem("_id");
        if (!userId) {
            toast.error("Please login first");
            return;
        }

        allExcercise({ memberId: userId })
            .then((res) => {
                if (res.data.success) {
                    setExercises(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Unable to load exercises");
            });
    };

    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">My Exercises</h4>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {exercises.map((exercise) => (
                        <div className="col-md-6 col-lg-4" key={exercise._id}>
                            <div className="feature-item h-100">
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">{exercise.excerciseName}</h4>
                                    <p className="mb-2"><strong>Sets:</strong> {exercise.sets}</p>
                                    <p className="mb-2"><strong>Repetitions:</strong> {exercise.repetitions}</p>
                                    <p className="mb-0"><strong>Duration:</strong> {exercise.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!exercises.length && (
                        <div className="col-12 text-center">
                            <p className="fs-5 mb-0">No exercises assigned yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
