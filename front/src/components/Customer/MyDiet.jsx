import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allDiet } from "../../services/dietService";
import { singleCustomer } from "../../services/customerService";

export default function MyDiet() {
    const [diets, setDiets] = useState([]);

    useEffect(() => {
        loadDiet();
    }, []);

    const loadDiet = () => {
        const userId = localStorage.getItem("_id");
        if (!userId) {
            toast.error("Please login first");
            return;
        }

        singleCustomer({ _id: userId })
            .then((customerRes) => {
                if (!customerRes.data.success) {
                    toast.error(customerRes.data.message);
                    return;
                }
                return allDiet({ customerId: customerRes.data.data._id });
            })
            .then((dietRes) => {
                if (!dietRes) return;
                if (dietRes.data.success) {
                    setDiets(dietRes.data.data);
                } else {
                    toast.error(dietRes.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Unable to load diet");
            });
    };

    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">My Diet</h4>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {diets.map((diet) => (
                        <div className="col-md-6 col-lg-4" key={diet._id}>
                            <div className="feature-item h-100">
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">{diet.dietType}</h4>
                                    <p className="mb-2"><strong>Calories:</strong> {diet.caloriesIntake}</p>
                                    <p className="mb-2"><strong>Restrictions:</strong> {diet.restrictions}</p>
                                    <p className="mb-0"><strong>Status:</strong> {diet.status ? "Active" : "Inactive"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!diets.length && (
                        <div className="col-12 text-center">
                            <p className="fs-5 mb-0">No diet plan assigned yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
