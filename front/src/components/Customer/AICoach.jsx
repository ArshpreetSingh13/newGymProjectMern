import { useState } from "react";
import { toast } from "react-toastify";
import { askAi } from "../../services/aiService";

export default function AICoach() {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!prompt.trim()) {
            toast.error("Please enter your question");
            return;
        }

        setLoading(true);
        askAi({ prompt })
            .then((res) => {
                setLoading(false);
                if (res.data.success) {
                    setAnswer(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                toast.error("Unable to get AI response");
            });
    };

    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4">AI Fitness Coach</h4>
                </div>
            </div>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="form-section bg-dark p-5">
                            <form onSubmit={submit}>
                                <div className="form-floating form-section-col mb-4">
                                    <textarea
                                        className="form-control"
                                        style={{ height: 140 }}
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="Ask about workout, diet, fat loss, muscle gain..."
                                    />
                                    <label>Ask fitness question</label>
                                </div>
                                <button className="btn btn-primary w-100 py-3" disabled={loading}>
                                    {loading ? "Thinking..." : "Ask AI Coach"}
                                </button>
                            </form>

                            {answer && (
                                <div className="bg-light text-dark p-4 mt-4">
                                    <h4 className="mb-3">Answer</h4>
                                    <p className="mb-0" style={{ whiteSpace: "pre-line" }}>{answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
