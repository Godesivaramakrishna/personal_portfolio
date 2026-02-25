import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Building } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = {
    title: "Cloud Development Intern",
    company: "Technical Hub Private Limited",
    location: "Aditya Group of Engineering Colleges",
    period: "May 2025 – July 2025",
    responsibilities: [
      "Worked on cloud-based development using AWS services such as EC2, S3, Lambda, and DynamoDB",
      "Assisted in deployment workflows and basic infrastructure automation tasks",
      "Gained hands-on exposure to real-time cloud environments and best practices",
    ],
  };

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-32 bg-black text-white relative" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-pink-200/70 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">Experience</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            Building expertise through hands-on industry experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/15 transform md:-translate-x-1/2" />

            {/* Experience card */}
            <div className="relative pl-8 md:pl-0 md:pr-8 md:w-1/2">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-white/70 transform -translate-x-1/2 md:translate-x-1/2 ring-4 ring-black animate-pulse-glow" />

              <div className="rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 bg-white/5 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold">{experience.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 mt-1">
                      <Building className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 mt-1">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm font-medium">{experience.period}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                    Key Responsibilities
                  </h4>
                  {experience.responsibilities.map((resp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                      <p className="text-white/60 text-sm sm:text-base">{resp}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills used */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {["AWS EC2", "S3", "Lambda", "DynamoDB", "DevOps"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
