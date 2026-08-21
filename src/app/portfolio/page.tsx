import PortfolioHero from "./hero";
import PortfolioCard, { ProjectItem } from "./portfolioItem";

const projects: ProjectItem[] = [
    {
        id: "tamos",
        title: "Tamos",
        description:
            "Call anywhere in the world using Tamos. Call city and cell phones at favorable rates. Download, register an NGN number and call. High quality communication, reliability, and a built-in instant messenger make Tamos ideal for staying connected.",
        image: "/portfolio/tamos.png",
        technologies: [{ tech: "Swift", logo: "/portfolio/swift_logo.png" }],
    },
    {
        id: "geoip-lookup",
        title: "GeoIP Lookup",
        description:
            "A RESTful API for accessing geoname data and looking up geolocation by IP address. Features efficient geographic and IP-mapping data served through a clean API interface with Prisma ORM and Docker support.",
        image: "/portfolio/geoip-lookup.png",
        technologies: [
            { tech: "TypeScript", logo: "/portfolio/typescript_logo.png" },
            { tech: "Prisma", logo: "/portfolio/prisma_logo.png" },
            { tech: "Docker", logo: "/portfolio/docker_logo.png" },
        ],
        link: "https://github.com/ilova-bazis/geoip-lookup",
    },
    {
        id: "focus-timer",
        title: "Focus Timer",
        description:
            "A keyboard-first productivity timer with configurable focus/break intervals and guided stretch reminders. Features a TUI interface, Waybar integration, AI-assisted task management, and desktop notifications via D-Bus.",
        image: "/portfolio/focus-timer.png",
        technologies: [
            { tech: "Go", logo: "/portfolio/go_logo.png" },
        ],
        link: "https://github.com/ilova-bazis/focus-timer",
    },
    {
        id: "transcribe-go",
        title: "Transcribe Go",
        description:
            "A specialized CLI tool for audio-to-text transcription, built as a Go wrapper around whisper.cpp. Leverages OpenAI's Whisper model for efficient speech recognition with the portability of Go.",
        image: "/portfolio/transcribe-go.png",
        technologies: [
            { tech: "Go", logo: "/portfolio/go_logo.png" },
            { tech: "C++", logo: "/portfolio/cpp_logo.png" },
        ],
        link: "https://github.com/ilova-bazis/transcribe-go",
    },
];

export default function Portfolio() {
    return (
        <div>
            <PortfolioHero />
            <section className="max-w-screen-xl mx-auto px-4 pb-16">
                <h2 className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-8">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
