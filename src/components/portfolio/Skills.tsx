import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Code,
  Database,
  Terminal,
  Globe,
  Brain,
  Code2,
  Binary,
  Network,
  GitBranch,
  Server,
  HardDrive,
  Zap,
  DatabaseZap,
  Scale,
  TrendingUp,
  Container,
  Boxes,
  Workflow,
  FileCode,
  Globe2,
  Webhook,
  Trophy,
  Award,
  Medal,
  Star,
  Table
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mapping of skill names to their icons
  const skillIcons: Record<string, any> = {
    // Programming & Data
    "Python": Code2,
    "NumPy": Binary,
    "Data Structures": Network,
    "Algorithms": GitBranch,
    // Cloud (AWS Services)
    "AWS EC2": Server,
    "S3": HardDrive,
    "Lambda": Zap,
    "DynamoDB": Database,
    "RDS": DatabaseZap,
    "Load Balancer": Scale,
    "Auto Scaling": TrendingUp,
    "SageMaker": Brain,
    // DevOps
    "Docker": Container,
    "Kubernetes": Boxes,
    "Jenkins": Workflow,
    "AWS CloudFormation": FileCode,
    // Web & Data
    "Web Scraping": Globe2,
    "API Development": Webhook,
    // Problem Solving
    "LeetCode (100+)": Trophy,
    "GeeksForGeeks (100+)": Award,
    "CodeChef": Medal,
    "HackerRank": Star,
    // Databases
    "SQL": Table,
  };

  // Mapping of skill names to their colors
  const skillColors: Record<string, string> = {
    // Programming & Data
    "Python": "text-yellow-400",
    "NumPy": "text-blue-400",
    "Data Structures": "text-cyan-400",
    "Algorithms": "text-green-400",
    // Cloud (AWS Services)
    "AWS EC2": "text-orange-400",
    "S3": "text-orange-500",
    "Lambda": "text-yellow-500",
    "DynamoDB": "text-blue-500",
    "RDS": "text-blue-600",
    "Load Balancer": "text-purple-400",
    "Auto Scaling": "text-green-500",
    "SageMaker": "text-pink-400",
    // DevOps
    "Docker": "text-blue-500",
    "Kubernetes": "text-blue-400",
    "Jenkins": "text-red-500",
    "AWS CloudFormation": "text-orange-400",
    // Web & Data
    "Web Scraping": "text-emerald-400",
    "API Development": "text-teal-400",
    // Problem Solving
    "LeetCode (100+)": "text-yellow-500",
    "GeeksForGeeks (100+)": "text-green-500",
    "CodeChef": "text-amber-500",
    "HackerRank": "text-emerald-500",
    // Databases
    "SQL": "text-indigo-400",
  };

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Data",
      skills: ["Python", "NumPy", "Data Structures", "Algorithms"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "☁️ Cloud (AWS Services)",
      skills: ["AWS EC2", "S3", "Lambda", "DynamoDB", "RDS", "Load Balancer", "Auto Scaling", "SageMaker"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Terminal,
      title: "⚙️ DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS CloudFormation"],
      color: "from-purple-500 to-pink-500",
      highlightSkill: "AWS CloudFormation",
    },
    {
      icon: Globe,
      title: "Web & Data",
      skills: ["Web Scraping", "API Development"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      skills: ["LeetCode (100+)", "GeeksForGeeks (100+)", "CodeChef", "HackerRank"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["DynamoDB", "RDS", "SQL"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32 bg-black text-white relative" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-pink-200/70 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">Skills</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive toolkit for building cloud-native applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] will-change-transform"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 will-change-transform`}
              >
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>

              <h3 className="text-base sm:text-lg font-display font-semibold mb-3 sm:mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skillIcons[skill];
                  const iconColor = skillColors[skill] || "text-white/70";
                  return (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.3 + index * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 150,
                        damping: 12
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm border transition-all duration-200 flex items-center gap-1 sm:gap-1.5 will-change-transform ${skill === category.highlightSkill
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-300 font-semibold"
                        : "bg-white/10 text-white/70 border-white/10 hover:border-white/30"
                        }`}
                    >
                      {SkillIcon && (
                        <SkillIcon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 ${iconColor}`} />
                      )}
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
