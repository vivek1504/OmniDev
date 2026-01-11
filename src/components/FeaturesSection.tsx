import { motion } from 'framer-motion';
import {
    Code2,
    FolderTree,
    Terminal,
    Eye,
    Globe,
    Zap
} from 'lucide-react';

const features = [
    {
        icon: Code2,
        title: 'Monaco-based editor',
        description: 'The same editor that powers VS Code, with full IntelliSense and syntax highlighting.',
    },
    {
        icon: FolderTree,
        title: 'Real file system',
        description: 'Create, edit, delete files and folders. Organize your project exactly how you want.',
    },
    {
        icon: Terminal,
        title: 'Interactive terminal',
        description: 'Run npm, node, and shell commands. Full terminal emulation in your browser.',
    },
    {
        icon: Eye,
        title: 'Live preview',
        description: 'See your changes instantly. Dev servers update the preview in real-time.',
    },
    {
        icon: Globe,
        title: 'Runs in the browser',
        description: 'Powered by WebContainers. No servers, no VMs, just your browser.',
    },
    {
        icon: Zap,
        title: 'No setup required',
        description: 'Click and code. Dependencies install automatically when you need them.',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    },
};

export function FeaturesSection() {
    return (
        <section className="py-24 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-zinc-950" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '64px 64px'
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Everything you expect from a real IDE.
                    </h2>
                    <p className="text-zinc-500 max-w-lg mx-auto">
                        Not a toy. A fully-featured development environment that runs entirely in your browser.
                    </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="group p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                        >
                            <div className="mb-4">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors">
                                    <feature.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
