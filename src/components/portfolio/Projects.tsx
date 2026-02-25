import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Users, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const themeStyles = {
    blue: {
      headerGlow: "from-blue-500/10 to-cyan-500/10",
      title: "from-blue-200 to-cyan-200",
      badge: "bg-blue-500/10 text-blue-200 border-blue-400/20",
      icon: "text-blue-300",
      outlineBtn: "border-blue-400 text-blue-100 hover:bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300",
      primaryBtn: "bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 text-black",
    },
    pink: {
      headerGlow: "from-pink-500/10 to-rose-500/10",
      title: "from-pink-200 to-rose-200",
      badge: "bg-pink-500/10 text-pink-200 border-pink-400/20",
      icon: "text-pink-300",
      outlineBtn: "border-pink-400 text-pink-100 hover:bg-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] transition-all duration-300",
      primaryBtn: "bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-300 hover:to-rose-300 text-black",
    },
  };

  const serviceKeywords = [
    "AWS",
    "S3",
    "Lambda",
    "DynamoDB",
    "API Gateway",
    "Textract",
    "Rekognition",
    "Transcribe",
    "Comprehend",
    "CloudWatch",
    "Google Maps API",
    "Google Cloud Run",
  ];

  const isService = (tech: string) => serviceKeywords.some((keyword) => tech.includes(keyword));

  const glowStyles = {
    blue: {
      tag: "bg-cyan-500/10 text-cyan-100 border border-cyan-300/40 shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-200/70 hover:shadow-[0_0_18px_rgba(34,211,238,0.8)]",
    },
    pink: {
      tag: "bg-pink-500/10 text-pink-100 border border-pink-300/40 shadow-[0_0_12px_rgba(244,114,182,0.35)] transition-all duration-200 hover:bg-pink-500/20 hover:border-pink-200/70 hover:shadow-[0_0_18px_rgba(244,114,182,0.8)]",
    },
  } as const;

  const projects = [
    {
      title: "HireFusion",
      subtitle: "Resume and Interview Analysis Platform",
      description:
        "A comprehensive AWS-powered platform that processes resumes and interview videos using AI services. Features automated workflows, real-time visualization, and intelligent analysis.",
      icon: Users,
      tech: [
        "AWS Lambda",
        "S3",
        "Textract",
        "Rekognition",
        "Transcribe",
        "Comprehend",
        "DynamoDB",
        "API Gateway",
        "CloudWatch",
        "Python",
      ],
      highlights: [
        "Designed AWS Lambda functions for resume and video processing",
        "Automated workflows using S3 Event Notifications and SNS",
        "Stored analysis results in DynamoDB with API Gateway exposure",
        "Collaborated in a 6-member team",
      ],
      github: "https://github.com/Godesivaramakrishna/HireFusionAI.git",
      isTeamProject: true,
      gradient: "from-blue-600 to-cyan-500",
      theme: "blue",
    },
    {
      title: "Blood Donation Platform",
      subtitle: "Life-Saving Blood Donor Connection System",
      description:
        "A web application connecting blood donors with recipients in need. Features donor registration, blood type matching, and emergency request handling to facilitate life-saving donations.",
      icon: Droplet,
      tech: ["React", "Node.js", "MongoDB", "Docker", "Google Maps API", "Google Cloud Run"],
      highlights: [
        "User registration and authentication system",
        "Blood type matching algorithm",
        "Real-time donor availability tracking",
        "Emergency blood request notifications",
      ],
      github: "https://github.com/Godesivaramakrishna/blooddonation.git",
      isTeamProject: false,
      gradient: "from-red-600 to-pink-500",
      theme: "pink",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 relative bg-black text-white" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-pink-200/70 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            Real-world applications showcasing cloud expertise and problem-solving
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 h-full flex flex-col hover:border-white/20">
                {/* Project Header */}
                <div className="bg-black/60 p-5 sm:p-6 relative overflow-hidden border-b border-white/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${themeStyles[project.theme].headerGlow}`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <project.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${themeStyles[project.theme].icon}`} />
                      </div>
                      {project.isTeamProject && (
                        <span
                          className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium border ${themeStyles[project.theme].badge}`}
                        >
                          Team Project
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-xl sm:text-2xl font-display font-bold mb-1 bg-gradient-to-r ${themeStyles[project.theme].title} bg-clip-text text-transparent`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="text-white/60 mb-4 text-sm sm:text-base">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                        <span className="text-white/60">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={
                          project.title === "Blood Donation Platform" || isService(tech)
                            ? `px-2.5 py-1 rounded-md text-xs font-medium ${glowStyles[project.theme].tag}`
                            : "px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-white/70 border border-white/10"
                        }
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-white/70 border border-white/10">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 ${themeStyles[project.theme].outlineBtn}`}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      View Code
                    </Button>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
