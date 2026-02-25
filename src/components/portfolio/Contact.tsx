import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [state, handleSubmit] = useForm("mwvnwrkj");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Godesivaramakrishna",
      color: "text-purple-400 hover:text-purple-300",
      bgColor: "bg-purple-500/10 hover:bg-purple-500/20",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gsrk-durgaprasad-a00451291/",
      color: "text-blue-400 hover:text-blue-300",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:goderaja288@gmail.com",
      color: "text-pink-400 hover:text-pink-300",
      bgColor: "bg-pink-500/10 hover:bg-pink-500/20",
      borderColor: "border-pink-500/20 hover:border-pink-500/40",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-black text-white relative" ref={ref}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-pink-200/70 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">Contact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-5 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/5">
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-pink-300" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:goderaja288@gmail.com"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      goderaja288@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-pink-300" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Location</p>
                    <p className="text-white/60 text-sm">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl ${link.bgColor} ${link.color} transition-all duration-300 hover:scale-110 border ${link.borderColor}`}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {state.succeeded ? (
              <div className="rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 bg-white/5">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">Thanks for reaching out!</h3>
                <p className="text-white/60 text-sm sm:text-base">Your message has been sent. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6 border border-white/10 bg-white/5">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/30 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-black font-semibold hover:from-pink-300 hover:to-blue-300 transition-opacity"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
