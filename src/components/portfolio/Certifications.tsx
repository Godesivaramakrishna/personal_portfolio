import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, X, ChevronLeft } from "lucide-react";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    badgeImageUrl?: string;
    certificateId: string;
    hasPdf: boolean;
    hasBadge: boolean;
    logo?: string;
    logoClass?: string;
    logoStyle?: React.CSSProperties;
    color: string;
    bgColor: string;
    iconColor: string;
    borderColor: string;
}

type ModalType = "badge" | "pdf" | null;

const certPdfMap: Record<string, string> = {
    "aws-developer-associate": "/certificates/aws-developer-associate.pdf",
    "aws-cloud-foundations": "/certificates/aws-cloud-foundations.pdf",
    "aws-cloud-security": "/certificates/aws-cloud-security.pdf",
    "simplilearn-python-ds": "/certificates/simplilearn-python-ds.pdf",
};

const AwsLogoIcon = () => (
    <svg viewBox="0 0 60 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7">
        <text fill="white" fontSize="20" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" x="50%" y="18" textAnchor="middle" letterSpacing="0.5">aws</text>
        <path d="M12 25 C22 33, 38 33, 48 25" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />
        <polyline points="45,22 49,25.5 45,29" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [modalType, setModalType] = useState<ModalType>(null);
    const [activeCert, setActiveCert] = useState<Certification | null>(null);

    const openModal = (cert: Certification, type: ModalType) => {
        setActiveCert(cert);
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
        setActiveCert(null);
    };

    const certifications: Certification[] = [
        {
            title: "AWS Certified Developer - Associate",
            issuer: "Amazon Web Services",
            date: "Issued Mar 2026 · Expires Mar 2029",
            badgeImageUrl: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
            certificateId: "aws-developer-associate",
            hasPdf: true,
            hasBadge: true,
            logo: "aws",
            color: "from-pink-400 via-sky-400 to-rose-500",
            bgColor: "bg-gradient-to-br from-pink-500/20 to-sky-500/20",
            iconColor: "text-pink-400",
            borderColor: "hover:border-pink-400/50",
        },
        {
            title: "Prompt Design in Vertex AI",
            issuer: "Google Cloud",
            date: "Issued 2025",
            badgeImageUrl: "/certificates/badge-vertex-ai.png",
            certificateId: "google-vertex-ai",
            hasPdf: false,
            hasBadge: true,
            logo: "https://www.gstatic.com/pantheon/images/welcome/supercloud.svg",
            color: "from-blue-400 via-purple-400 to-purple-500",
            bgColor: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
            iconColor: "text-blue-400",
            borderColor: "hover:border-blue-400/50",
        },
        {
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "AWS Academy",
            date: "Training Badge",
            badgeImageUrl: "/certificates/badge-aws-cloud-foundations.png",
            certificateId: "aws-cloud-foundations",
            hasPdf: true,
            hasBadge: true,
            logo: "aws",
            color: "from-pink-400 via-rose-400 to-sky-500",
            bgColor: "bg-gradient-to-br from-pink-500/20 to-sky-500/20",
            iconColor: "text-pink-400",
            borderColor: "hover:border-pink-400/50",
        },
        {
            title: "AWS Academy Graduate - Cloud Security Builder",
            issuer: "AWS Academy",
            date: "Training Badge",
            badgeImageUrl: "/certificates/badge-aws-cloud-security.png",
            certificateId: "aws-cloud-security",
            hasPdf: true,
            hasBadge: true,
            logo: "aws",
            color: "from-sky-400 via-cyan-400 to-pink-500",
            bgColor: "bg-gradient-to-br from-sky-500/20 to-pink-500/20",
            iconColor: "text-sky-400",
            borderColor: "hover:border-sky-400/50",
        },
        {
            title: "Python Libraries for Data Science",
            issuer: "Simplilearn SkillUp",
            date: "Issued Mar 2026",
            certificateId: "simplilearn-python-ds",
            hasPdf: true,
            hasBadge: false,
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            color: "from-pink-400 via-purple-400 to-sky-500",
            bgColor: "bg-gradient-to-br from-pink-500/20 to-sky-500/20",
            iconColor: "text-pink-400",
            borderColor: "hover:border-pink-400/50",
        },
    ];

    return (
        <>
            <section id="certifications" className="py-16 sm:py-20 md:py-32 relative bg-black text-white" ref={ref}>
                <div className="container px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="text-pink-200/70 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">Achievements</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
                            Licences &{" "}
                            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                                Certifications
                            </span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
                            Professional validations of technical expertise and skills
                        </p>
                    </motion.div>

                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" as const, stiffness: 100, damping: 15 }}
                                whileHover={{ y: -6, transition: { type: "spring" as const, stiffness: 300, damping: 20 } }}
                                className="group will-change-transform"
                            >
                                <div className={`rounded-2xl border border-white/10 ${cert.borderColor} bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg h-full relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex items-start gap-3 sm:gap-4 p-5 sm:p-6 pb-3">
                                        {/* Clickable logo — opens badge if cert has one */}
                                        <motion.div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${cert.bgColor} flex items-center justify-center flex-shrink-0 will-change-transform ${cert.hasBadge ? "cursor-pointer" : ""}`}
                                            whileHover={cert.hasBadge ? { scale: 1.15, rotate: 5 } : { scale: 1.05 }}
                                            transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
                                            onClick={() => cert.hasBadge && openModal(cert, "badge")}
                                            title={cert.hasBadge ? "Click to view badge" : undefined}
                                        >
                                            {cert.logo === "aws" ? (
                                                <AwsLogoIcon />
                                            ) : cert.logo ? (
                                                <img src={cert.logo} alt={cert.issuer} className={`h-5 w-5 sm:h-6 sm:w-6 object-contain ${cert.logoClass ?? ""}`} style={cert.logoStyle} />
                                            ) : null}
                                        </motion.div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className={`font-display font-bold text-base sm:text-lg mb-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                                                {cert.title}
                                            </h3>
                                            <p className="text-white/60 text-xs sm:text-sm mb-1">{cert.issuer}</p>
                                            <p className="text-xs text-white/40">{cert.date}</p>
                                        </div>
                                    </div>

                                    {/* Bottom action — only show View Certificate when hasPdf */}
                                    {cert.hasPdf && (
                                        <div className="relative z-10 px-5 sm:px-6 pb-5 pt-2 flex items-center gap-2">
                                            <button
                                                onClick={() => openModal(cert, "pdf")}
                                                className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 ${cert.iconColor}`}
                                            >
                                                <FileText className="h-3 w-3 flex-shrink-0" />
                                                View Certificate
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Overlay */}
            <AnimatePresence>
                {modalType && activeCert && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

                        {modalType === "badge" ? (
                            /* Badge Modal */
                            <motion.div
                                className="relative z-10 bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl"
                                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button onClick={closeModal} className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors">
                                    <X className="h-5 w-5" />
                                </button>
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={activeCert.badgeImageUrl}
                                        alt={activeCert.title}
                                        className="w-44 h-44 object-contain drop-shadow-2xl"
                                    />
                                </div>
                                <h3 className={`font-display font-bold text-lg mb-1 bg-gradient-to-r ${activeCert.color} bg-clip-text text-transparent`}>
                                    {activeCert.title}
                                </h3>
                                <p className="text-white/50 text-sm mb-1">{activeCert.issuer}</p>
                                <p className="text-white/30 text-xs">{activeCert.date}</p>
                            </motion.div>
                        ) : (
                            /* PDF Modal */
                            <motion.div
                                className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 flex flex-col"
                                style={{ height: "88vh" }}
                                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* PDF Header */}
                                <div className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-white/10 bg-zinc-900/80 flex-shrink-0">
                                    <button
                                        onClick={closeModal}
                                        className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                        Close
                                    </button>
                                    <div className="h-4 w-px bg-white/20" />
                                    <span className="text-white/80 text-sm font-medium truncate">{activeCert.title}</span>
                                </div>

                                {/* PDF iframe */}
                                <iframe
                                    src={certPdfMap[activeCert.certificateId]}
                                    title={activeCert.title}
                                    className="w-full flex-1"
                                    style={{ border: "none" }}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Certifications;
