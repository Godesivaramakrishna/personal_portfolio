import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Code2, Cloud, FileCode, GitBranch, Network } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Aditya College Of Engineering And Technology, Surampalem",
      period: "2023 – 2027",
      grade: "CGPA: 7.75",
    },
    {
      degree: "MPC - Intermediate Education",
      institution: "Pragati Junior College, Prathipadu",
      period: "2021 – 2023",
      grade: "GPA: 7.76",
    },
  ];

  // Profile summary skills with icons and colors
  const profileSkills = [
    { name: "Python", icon: Code2, color: "text-blue-400" },
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "AWS CloudFormation", icon: FileCode, color: "text-orange-500" },
    { name: "Git", icon: GitBranch, color: "text-red-400" },
    { name: "DSA", icon: Network, color: "text-cyan-400" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative bg-black text-white" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-200/70 font-medium text-sm uppercase tracking-[0.3em]">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Who I{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Am
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A passionate developer focused on cloud computing and backend development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" as const, stiffness: 80 }}
          >
            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-display font-semibold mb-4">Profile Summary</h3>
              <p className="text-white/60 leading-relaxed">
                Electronics and Communication Engineering student with strong interest in Cloud Computing
                and Backend Development. Hands-on experience with AWS services, serverless architectures,
                and infrastructure automation using AWS CloudFormation. Adaptable to new environments with a
                problem-solving mindset and eagerness to learn.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {profileSkills.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + idx * 0.08,
                        type: "spring" as const,
                        stiffness: 150,
                        damping: 12
                      }}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        borderColor: "rgba(236, 72, 153, 0.5)",
                        transition: { type: "spring" as const, stiffness: 400, damping: 10 }
                      }}
                      className="px-3 py-1.5 rounded-full text-sm bg-white/10 text-white/80 border border-white/10 cursor-pointer transition-all duration-200 flex items-center gap-1.5 will-change-transform"
                    >
                      <SkillIcon className={`h-3.5 w-3.5 ${skill.color} transition-transform duration-200`} />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-display font-semibold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-pink-300" />
              Education
            </h3>

            {education.map((edu, index) => {
              const colors = [
                { glowColor: "rgba(168, 85, 247, 0.7)", bgClass: "bg-gradient-to-br from-purple-500/10 to-purple-600/5" },
                { glowColor: "rgba(34, 211, 238, 0.7)", bgClass: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5" }
              ];
              const color = colors[index % colors.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    boxShadow: `0 0 40px ${color.glowColor}, 0 0 80px ${color.glowColor}40`,
                    scale: 1.02
                  }}
                  className={`rounded-xl p-6 border-2 border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm ${color.bgClass}`}
                >
                  <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                    <MapPin className="h-4 w-4 text-pink-300" />
                    {edu.institution}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-white/60">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/80 font-medium border border-white/20 cursor-default"
                    >
                      {edu.grade}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
