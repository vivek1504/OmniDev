import { Github } from 'lucide-react';

export function FooterSection() {
    return (
        <footer className="py-12 px-6 border-t border-zinc-800/50">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500">
                    Built by an independent developer
                </p>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                    <Github className="w-4 h-4" />
                    GitHub
                </a>
            </div>
        </footer>
    );
}
