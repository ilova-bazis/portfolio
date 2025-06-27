import Image from "next/image";


export function TechTag({ tech, logo }: { tech: string, logo: string }) {
    return (
        <div className="inline-flex flex-row gap-2 bg-gray-200 rounded-full mr-2 mb-2 px-3 py-1 items-center ">
            <Image width={16} height={16}  alt={tech} src={logo} />
            <span className="text-sm font-semibold text-gray-700">{tech}</span>
        </div>
    );
}