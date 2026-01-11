import { motion } from "framer-motion";
import { Github, Play } from "lucide-react";

const codeLines = [
  'import express from "express";',
  "const app = express();",
  "",
  'app.get("/", (req, res) => {',
  '  res.json({ status: "running" });',
  "});",
  "",
  "app.listen(3000, () => {",
  '  console.log("Server ready 🚀");',
  "});",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

      {/* Animated code background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] select-none pointer-events-none overflow-hidden">
        <motion.div
          className="font-mono text-sm md:text-base leading-relaxed text-left max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="whitespace-pre"
            >
              {line || "\u00A0"}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 border border-zinc-700/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-zinc-400 font-mono">npm run dev</span>
          <span className="terminal-cursor">_</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">A Real Node.js IDE.</span>
          <br />
          <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            In Your Browser.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Write, run, and preview full projects instantly — no setup required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              document.getElementById('framework-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="group flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Launch IDE
          </button>
          <a
            href="https://github.com/vivek1504/forge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-800/80 text-zinc-300 font-medium rounded-lg border border-zinc-700 hover:bg-zinc-700/80 hover:text-white transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </motion.div>

        {/* Floating IDE mock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 backdrop-blur shadow-2xl shadow-black/50">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs text-zinc-500 font-mono">
                ~/project/server.js
              </span>
            </div>

            {/* Editor mock */}
            <div className="p-4 font-mono text-sm text-left">
              <div className="flex gap-4">
                {/* Line numbers */}
                <div className="text-zinc-600 select-none">
                  {codeLines.slice(0, 6).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                {/* Code */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="text-purple-400">import</span>
                    <span className="text-zinc-300"> express </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-emerald-400"> "express"</span>
                    <span className="text-zinc-500">;</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400"> app</span>
                    <span className="text-zinc-300"> = </span>
                    <span className="text-yellow-400">express</span>
                    <span className="text-zinc-300">()</span>
                    <span className="text-zinc-500">;</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-zinc-600"
                  >
                    &nbsp;
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <span className="text-blue-400">app</span>
                    <span className="text-zinc-300">.</span>
                    <span className="text-yellow-400">get</span>
                    <span className="text-zinc-300">(</span>
                    <span className="text-emerald-400">"/"</span>
                    <span className="text-zinc-300">, (</span>
                    <span className="text-orange-400">req</span>
                    <span className="text-zinc-300">, </span>
                    <span className="text-orange-400">res</span>
                    <span className="text-zinc-300">) =&gt; {"{"}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <span className="text-zinc-300"> </span>
                    <span className="text-orange-400">res</span>
                    <span className="text-zinc-300">.</span>
                    <span className="text-yellow-400">json</span>
                    <span className="text-zinc-300">({"{"} </span>
                    <span className="text-blue-400">status</span>
                    <span className="text-zinc-300">: </span>
                    <span className="text-emerald-400">"running"</span>
                    <span className="text-zinc-300"> {"}"});</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <span className="text-zinc-300">{"}"})</span>
                    <span className="text-zinc-500">;</span>
                    <span className="terminal-cursor ml-1">|</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
