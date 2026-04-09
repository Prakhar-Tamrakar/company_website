// "use client";
// import { useState, useEffect } from "react";
// import { Send } from "lucide-react";

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const STORAGE_KEY = "jobApplied";

// export default function JobApplySection() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [fileLoading, setFileLoading] = useState(false);
//   const [fileName, setFileName] = useState("");

//   /* ---------------- RESTORE SUBMITTED STATE ---------------- */

//   useEffect(() => {
//     const alreadyApplied = localStorage.getItem(STORAGE_KEY);
//     if (alreadyApplied === "true") {
//       setSubmitted(true);
//       setMessage("You’ve already submitted your application.");
//     }
//   }, []);

//   /* ---------------- CHANGE HANDLERS ---------------- */

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setMessage("");
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     setFileLoading(true);

//     setTimeout(() => {
//       setFormData((prev) => ({
//         ...prev,
//         resume: file,
//       }));
//       setFileName(file.name);
//       setFileLoading(false);
//     }, 400);
//   };

//   /* ---------------- VALIDATION ---------------- */

//   const validateForm = () => {
//     if (!formData.fullName.trim()) {
//       setMessage("Full name is required");
//       return false;
//     }

//     if (!EMAIL_REGEX.test(formData.email)) {
//       setMessage("Please enter a valid email address");
//       return false;
//     }

//     if (!formData.resume) {
//       setMessage("Please upload your resume");
//       return false;
//     }

//     if (formData.resume.size > 5 * 1024 * 1024) {
//       setMessage("Resume must be under 5MB");
//       return false;
//     }

//     if (formData.position.length > 255) {
//       setMessage("Position name is too long");
//       return false;
//     }

//     return true;
//   };

//   /* ---------------- SUBMIT ---------------- */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (loading || submitted) return;
//     if (!validateForm()) return;

//     if (!window.grecaptcha) {
//       setMessage("reCAPTCHA not loaded");
//       return;
//     }

//     try {
//       setLoading(true);

//       const recaptchaToken = await window.grecaptcha.execute(
//         process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
//         { action: "job_apply" },
//       );

//       const data = new FormData();
//       data.append("fullName", formData.fullName.trim());
//       data.append("email", formData.email.trim());
//       data.append("phone", formData.phone.trim());
//       data.append("position", formData.position.trim());
//       data.append("resume", formData.resume);
//       data.append("recaptchaToken", recaptchaToken);

//       const res = await fetch("/api/job-apply", {
//         method: "POST",
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         setMessage(result.message || "Failed to apply");
//         return;
//       }

//       setMessage("Application submitted successfully 🎉");
//       setSubmitted(true);
//       localStorage.setItem(STORAGE_KEY, "true");

//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         position: "",
//         resume: null,
//       });
//       setFileName("");
//     } catch (err) {
//       setMessage("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- UI ---------------- */

//   return (
//     <section className="max-w-xl mx-auto px-4 py-20">
//       <h2 className="text-3xl heading-default mb-2">Share Your Resume</h2>

//       <p className="content-default mb-6">
//         We don’t have any openings right now, but you’re welcome to share your
//         resume for future opportunities.
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name *"
//           value={formData.fullName}
//           onChange={handleChange}
//           maxLength={50}
//           disabled={submitted}
//           required
//           className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address *"
//           value={formData.email}
//           onChange={handleChange}
//           maxLength={255}
//           disabled={submitted}
//           required
//           className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           maxLength={20}
//           disabled={submitted}
//           className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
//         />

//         <input
//           type="text"
//           name="position"
//           placeholder="Position of Interest "
//           value={formData.position}
//           onChange={handleChange}
//           maxLength={255}
//           disabled={submitted}
//           className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
//         />

//         {/* FILE UPLOAD */}
//         <div className={`w-full ${submitted ? "opacity-60" : ""}`}>
//           <label className="block text-sm font-medium mb-2">
//             Upload Resume <span className="text-red-500">*</span>
//           </label>

//           <div className="relative flex items-center justify-between gap-3 rounded-lg border px-4 py-2">
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileChange}
//               disabled={submitted}
//               required
//               className="absolute inset-0 opacity-0 cursor-pointer"
//             />

//             <span className="text-sm text-slate-600 truncate">
//               {fileLoading
//                 ? "Processing file..."
//                 : fileName || "Choose a file (PDF, DOC, DOCX)"}
//             </span>

//             {fileLoading ? (
//               <span className="h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
//             ) : (
//               <span className="text-xs text-slate-500">Browse</span>
//             )}
//           </div>
//           <p className="mt-2 text-xs text-gray-500">
//             Maximum file size allowed: <span className="font-medium">5 MB</span>
//           </p>
//         </div>

//         {/* SUBMIT BUTTON */}
//         <button
//           type="submit"
//           disabled={loading || submitted}
//           className={`flex items-center gap-2 px-6 py-2 rounded-full text-white transition
//             ${
//               submitted
//                 ? "bg-green-600 cursor-default"
//                 : loading
//                   ? "bg-primary/70 cursor-not-allowed"
//                   : "bg-primary hover:bg-primary/90"
//             }`}
//         >
//           {submitted ? "Applied" : loading ? "Submitting..." : "Apply Now"}
//           <Send size={16} />
//         </button>

//         {message && <p className="text-sm text-slate-600">{message}</p>}
//       </form>
//     </section>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import Image from "next/image"; // Recommended if using Next.js

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = "jobApplied";

export default function JobApplySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  /* ---------------- RESTORE SUBMITTED STATE ---------------- */
  useEffect(() => {
    const alreadyApplied = localStorage.getItem(STORAGE_KEY);
    if (alreadyApplied === "true") {
      setSubmitted(true);
      setMessage("You’ve already submitted your application.");
    }
  }, []);

  /* ---------------- CHANGE HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileLoading(true);
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);
      setFileLoading(false);
    }, 400);
  };

  /* ---------------- VALIDATION ---------------- */
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setMessage("Full name is required");
      return false;
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      setMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.resume) {
      setMessage("Please upload your resume");
      return false;
    }
    if (formData.resume.size > 5 * 1024 * 1024) {
      setMessage("Resume must be under 5MB");
      return false;
    }
    return true;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || submitted) return;
    if (!validateForm()) return;

    if (!window.grecaptcha) {
      setMessage("reCAPTCHA not loaded");
      return;
    }

    try {
      setLoading(true);
      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "job_apply" }
      );

      const data = new FormData();
      data.append("fullName", formData.fullName.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("position", formData.position.trim());
      data.append("resume", formData.resume);
      data.append("recaptchaToken", recaptchaToken);

      const res = await fetch("/api/job-apply", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const result = await res.json();
        setMessage(result.message || "Failed to apply");
        return;
      }

      setMessage("Application submitted successfully 🎉");
      setSubmitted(true);
      localStorage.setItem(STORAGE_KEY, "true");
      setFormData({ fullName: "", email: "", phone: "", position: "", resume: null });
      setFileName("");
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-20">
      {/* Container to split Image and Form */}
      <div className="container flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE: Content and Form */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl heading-default mb-2">Share Your Resume</h2>
          <p className="content-default mb-6">
            Share your resume for future opportunities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              maxLength={50}
              disabled={submitted}
              required
              className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              maxLength={255}
              disabled={submitted}
              required
              className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                disabled={submitted}
                className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
              />
              <input
                type="text"
                name="position"
                placeholder="Aria of Interest"
                value={formData.position}
                onChange={handleChange}
                maxLength={255}
                disabled={submitted}
                className="w-full rounded-lg border px-4 py-2 disabled:opacity-60"
              />
            </div>

            <div className={`w-full ${submitted ? "opacity-60" : ""}`}>
              <label className="block text-sm font-medium mb-2">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center justify-between gap-3 rounded-lg border px-4 py-2 bg-white">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  disabled={submitted}
                  required
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="text-sm text-slate-600 truncate">
                  {fileLoading ? "Processing..." : fileName || "Choose a file (PDF, DOC, DOCX)"}
                </span>
                {fileLoading ? (
                  <span className="h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span className="text-xs text-slate-500 font-semibold">Browse</span>
                )}
              </div>
              <p className="mt-2 text-xs text-gray-500">Max size: 5 MB</p>
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition
                ${submitted ? "bg-green-600" : loading ? "bg-primary/70" : "bg-primary hover:bg-primary/90"}`}
            >
              {submitted ? "Applied" : loading ? "Submitting..." : "Apply Now"}
              <Send size={16} />
            </button>

            {message && <p className="text-sm font-medium text-slate-600">{message}</p>}
          </form>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="hidden lg:block flex-1 w-full">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
             <img 
              src="https://images.unsplash.com/photo-1686771416537-bf4a4f263d88?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Join our team" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}