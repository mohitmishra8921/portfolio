"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setResult("Sending...");

    // Environment variables with NEXT_PUBLIC_ prefix for client-side access
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS Error: Environment variables are missing or misconfigured.");
      console.log("Check if they are prefixed with NEXT_PUBLIC_ in your .env.local or deployment dashboard.");
      setStatus("error");
      setResult("Configuration error. Please check console for details.");
      return;
    }

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS:", response.status, response.text);
          if (response.status === 200) {
            setStatus("sent");
            setResult("Message sent! I'll get back to you soon.");
            formRef.current.reset();
            setTimeout(() => {
              setStatus("idle");
              setResult("");
            }, 5000);
          } else {
            throw new Error(`Unexpected response status: ${response.status}`);
          }
        },
        (error) => {
          console.error("FAILED:", error);
          setStatus("error");
          setResult(`Error: ${error.text || "Something went wrong. Please try again."}`);
          setTimeout(() => {
            setStatus("idle");
            setResult("");
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Have a project idea or want to connect? Send me a message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-5"
        >
          <div className="md:col-span-3">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              data-netlify="true"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-11 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </Field>

                <Field label="Email">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="mohitmishra8921@gmail.com"
                    className="h-11 w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    placeholder="Write your message..."
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:opacity-60"
                  disabled={status === "sending" || status === "sent"}
                >
                  {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
                </button>

                {result && (
                  <p className={`text-xs ${status === "sent" ? "text-emerald-400" : status === "error" ? "text-rose-400" : "text-slate-400"}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>

          <aside className="md:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-base font-semibold text-white">Details</h3>

              <div className="mt-5 grid gap-4">
                <a
                  href="mailto:mohitmishra8921@gmail.com"
                  className="rounded-2xl border border-white/10 bg-slate-900/30 p-4 text-sm text-slate-200 transition hover:border-white/20 hover:bg-slate-900/40"
                >
                  <p className="text-xs font-semibold text-slate-400">Email</p>
                  <p className="mt-1 font-medium text-white">
                    mohitmishra8921@gmail.com
                  </p>
                </a>

                <a
                  href="https://github.com/mohitmishra8921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-slate-900/30 p-4 text-sm text-slate-200 transition hover:border-white/20 hover:bg-slate-900/40"
                >
                  <p className="text-xs font-semibold text-slate-400">GitHub</p>
                  <p className="mt-1 font-medium text-white">github.com/mohitmishra8921</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/mohit-kumar-mishra-32986b328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-slate-900/30 p-4 text-sm text-slate-200 transition hover:border-white/20 hover:bg-slate-900/40"
                >
                  <p className="text-xs font-semibold text-slate-400">
                    LinkedIn
                  </p>
                  <p className="mt-1 font-medium text-white">mohit-kumar-mishra</p>
                </a>
              </div>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
