import Image from "next/image";
import Link from "next/link";
import { TechTag } from "../components/techTag";

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: { tech: string; logo: string }[];
    link?: string;
}

export default function PortfolioCard({ project }: { project: ProjectItem }) {
    return (
        <div className="bg-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border-t-4 border-orange-500">
            <div className="relative h-48 bg-gray-300 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            className="text-orange-500 hover:text-orange-600 transition-colors ml-2 shrink-0"
                            aria-label={`View ${project.title}`}
                        >
                            ↗
                        </Link>
                    )}
                </div>
                <p className="text-gray-700 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((t) => (
                        <TechTag key={t.tech} tech={t.tech} logo={t.logo} />
                    ))}
                </div>
            </div>
        </div>
    );
}
