import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allProgress } from "../../services/progressService";
import { singleCustomer } from "../../services/customerService";

export default function MyProgress() {
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        loadProgress();
    }, []);

    const loadProgress = () => {
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
                return allProgress({ customerId: customerRes.data.data._id });
            })
            .then((progressRes) => {
                if (!progressRes) return;
                if (progressRes.data.success) {
                    setProgress(progressRes.data.data);
                } else {
                    toast.error(progressRes.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Unable to load progress");
            });
    };

    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">My Progress</h4>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {progress.map((item) => (
                        <div className="col-md-6 col-lg-3" key={item._id}>
                            <div className="feature-item h-100">
                                <div className="feature-content p-4">
                                    <h4 className="mb-3">Progress</h4>
                                    <p className="mb-2"><strong>Weight:</strong> {item.weight}</p>
                                    <p className="mb-2"><strong>Height:</strong> {item.height}</p>
                                    <p className="mb-2"><strong>Body Fat:</strong> {item.bodyFat}</p>
                                    <p className="mb-0"><strong>BMI:</strong> {item.bmi}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!progress.length && (
                        <div className="col-12 text-center">
                            <p className="fs-5 mb-0">No progress added yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
