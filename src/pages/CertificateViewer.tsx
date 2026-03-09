import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const certificates: Record<string, { title: string; pdfUrl: string }> = {
    "aws-developer-associate": {
        title: "AWS Certified Developer – Associate",
        pdfUrl: "/certificates/aws-developer-associate.pdf",
    },
    "google-vertex-ai": {
        title: "Prompt Design in Vertex AI",
        pdfUrl: "/certificates/google-vertex-ai.pdf",
    },
    "aws-cloud-foundations": {
        title: "AWS Academy Graduate – Cloud Foundations",
        pdfUrl: "/certificates/aws-cloud-foundations.pdf",
    },
    "aws-cloud-security": {
        title: "AWS Academy Graduate – Cloud Security Builder",
        pdfUrl: "/certificates/aws-cloud-security.pdf",
    },
    "simplilearn-python-ds": {
        title: "Python Libraries for Data Science",
        pdfUrl: "/certificates/simplilearn-python-ds.pdf",
    },
};

const CertificateViewer = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const cert = id ? certificates[id] : null;

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 group"
                >
                    <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="text-sm font-medium">Back</span>
                </button>
                <div className="h-4 w-px bg-white/20" />
                <h1 className="text-sm sm:text-base font-semibold text-white/90 truncate">
                    {cert ? cert.title : "Certificate"}
                </h1>
                {cert && (
                    <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-1.5 text-xs sm:text-sm text-pink-400 hover:text-pink-300 transition-colors duration-200"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Open in new tab
                    </a>
                )}
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
                {cert ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5"
                        style={{ height: "calc(100vh - 120px)" }}
                    >
                        <iframe
                            src={cert.pdfUrl}
                            title={cert.title}
                            className="w-full h-full"
                            style={{ border: "none" }}
                        />
                    </motion.div>
                ) : (
                    <div className="text-center text-white/50">
                        <p className="text-lg">Certificate not found.</p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-4 text-pink-400 hover:text-pink-300 underline"
                        >
                            Go back home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateViewer;
