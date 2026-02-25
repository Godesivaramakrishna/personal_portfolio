import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 noise" />

      <div className="container relative z-10 px-4 sm:px-6 py-20 sm:py-24 md:py-28">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:gap-6 lg:grid-cols-3 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/60 mb-12 sm:mb-16"
        >
          <div>
            <p className="font-mono bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Sivaramakrishna
            </p>
            <p className="font-mono text-pink-200">Durgaprasad</p>
            <p className="mt-4 text-xs tracking-[0.25em] text-blue-200/80">
              Cloud & Backend
            </p>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-mono bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
              Design & Engineering
            </p>
            <p className="mt-4 text-xs tracking-[0.25em] text-blue-200/90">
              AWS • Serverless • DevOps
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="font-mono text-pink-300">Services</p>
            <p className="mt-4 text-xs tracking-[0.25em] text-blue-200/90">
              Cloud Architecture • Backend APIs • Automation
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          {/* Left content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-[1.1] uppercase"
            >
              I bring the
              <span className="block mt-2 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                unexpected to
              </span>
              <span className="block mt-2 text-blue-200">cloud & digital</span>
              <span className="block mt-2 text-white/90">experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 max-w-xl"
            >
              <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent font-medium">
                Cloud & Backend Developer
              </span>{" "}
              building resilient, scalable systems using AWS, serverless architectures,
              and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-400 to-blue-400 text-black hover:from-pink-300 hover:to-blue-300 font-semibold px-6 sm:px-8 w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Talk to Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300/50 text-blue-200 hover:bg-blue-500/10 font-semibold px-6 sm:px-8 w-full sm:w-auto"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-10 flex items-center gap-3 sm:gap-4"
            >
              <a
                href="https://github.com/Godesivaramakrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-pink-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/gsrk-durgaprasad-a00451291/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-blue-300" />
              </a>
              <a
                href="mailto:goderaja288@gmail.com"
                className="p-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-red-400" />
              </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-2xl" />
            <div className="relative rounded-2xl bg-gradient-to-br from-pink-500/30 via-transparent to-blue-500/30 p-[1px]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <img
                  src="/profile.jpg"
                  alt="Sivaramakrishna Durgaprasad"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-top rounded-xl"
                />
                <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-black/70 text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] px-3 sm:px-4 py-2 rounded-full border border-white/10">
                  <span className="text-pink-200">Available for</span>
                  <span className="text-blue-200">freelance & full-time</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
