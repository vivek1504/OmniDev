import { motion } from "framer-motion";
import {
  ReactLogo,
  NextjsLogo,
  NodejsLogo,
  SvelteLogo,
  VueLogo,
  RemixLogo,
} from "./FrameworkLogos";
import { useNavigate } from "react-router-dom";

const frameworks = [
  {
    name: "React",
    description: "Build interactive UIs",
    Logo: ReactLogo,
    color: "group-hover:text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
    comingSoon: false,
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript",
    Logo: NodejsLogo,
    color: "group-hover:text-green-400",
    glow: "group-hover:shadow-green-500/20",
    comingSoon: false,
  },
  {
    name: "Vue",
    description: "Progressive framework",
    Logo: VueLogo,
    color: "group-hover:text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    comingSoon: false,
  },
  {
    name: "Svelte",
    description: "Cybernetically enhanced apps",
    Logo: SvelteLogo,
    color: "group-hover:text-orange-400",
    glow: "group-hover:shadow-orange-500/20",
    comingSoon: false,
  },
  {
    name: "Next.js",
    description: "Full-stack React framework",
    Logo: NextjsLogo,
    color: "group-hover:text-white",
    glow: "group-hover:shadow-white/10",
    comingSoon: true,
  },
  {
    name: "Remix",
    description: "Full stack web framework",
    Logo: RemixLogo,
    color: "group-hover:text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
    comingSoon: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FrameworkSection() {
  const navigate = useNavigate();
  return (
    <section id="framework-section" className="py-24 px-6 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start with the stack you want.
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Pick a framework and start coding immediately. No configuration
            needed.
          </p>
        </motion.div>

        {/* Framework grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {frameworks.map((framework) => (
            <motion.button
              key={framework.name}
              variants={itemVariants}
              onClick={() => {
                if (framework.comingSoon) return;
                navigate(
                  `/ide?framework=${encodeURIComponent(framework.name)}`
                );
              }}
              className={`group relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 shadow-lg ${framework.glow}`}
            >
              {/* Coming soon badge */}
              {framework.comingSoon && (
                <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-zinc-800 text-zinc-500 rounded">
                  Soon
                </span>
              )}

              <div className="flex flex-col items-center gap-4">
                <framework.Logo
                  className={`w-12 h-12 text-zinc-500 transition-colors duration-300 ${framework.color}`}
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {framework.name}
                  </h3>
                  <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {framework.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
