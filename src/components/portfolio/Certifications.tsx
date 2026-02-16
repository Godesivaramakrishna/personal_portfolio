import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const certifications = [
        {
            title: "Prompt Design in Vertex AI",
            issuer: "Google Cloud",
            date: "Issued 2024",
            link: "https://www.credly.com/badges/1178ca1c-555b-4f01-8325-92ea53f08e66/public_url",
            icon: Award,
            color: "from-blue-400 via-purple-400 to-purple-500",
            bgColor: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
            iconColor: "text-blue-400",
            borderColor: "hover:border-blue-400/50",
        },
        {
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "AWS Academy",
            date: "Training Badge",
            link: "https://www.credly.com/badges/92e71f28-9e24-4d0f-b69c-3172ba827d26/public_url",
            icon: Award,
            color: "from-pink-400 via-rose-400 to-sky-500",
            bgColor: "bg-gradient-to-br from-pink-500/20 to-sky-500/20",
            iconColor: "text-pink-400",
            borderColor: "hover:border-pink-400/50",
        },
        {
            title: "AWS Academy Graduate - Cloud Security Builder",
            issuer: "AWS Academy",
            date: "Training Badge",
            link: "https://www.credly.com/badges/0c7972c6-8b38-4930-b9eb-ea3ebeaccd2a/public_url",
            icon: Award,
            color: "from-sky-400 via-cyan-400 to-pink-500",
            bgColor: "bg-gradient-to-br from-sky-500/20 to-pink-500/20",
            iconColor: "text-sky-400",
            borderColor: "hover:border-sky-400/50",
        },
    ];

    return (
        <section id="certifications" className="py-20 md:py-32 relative bg-black text-white" ref={ref}>
            <div className="container px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-pink-200/70 font-medium text-sm uppercase tracking-[0.3em]">Achievements</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
                        Licences &{" "}
                        <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Professional validations of technical expertise and skills
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className={`rounded-2xl p-6 border border-white/10 ${cert.borderColor} bg-white/5 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 h-full relative overflow-hidden`}>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <cert.icon className={`h-6 w-6 ${cert.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                                    </div>

                                    <div>
                                        <h3 className={`font-display font-bold text-lg mb-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:opacity-90 transition-opacity`}>
                                            {cert.title}
                                        </h3>
                                        <p className="text-white/60 text-sm mb-2">{cert.issuer}</p>
                                        <div className="flex items-center gap-2 text-xs text-white/40">
                                            <span>{cert.date}</span>
                                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
