import Image from "next/image";
import { TechTag } from "../components/techTag";

export default function PortfolioItem() {
    return (
        <div className="sm:flex sm:flex-row max-w-lg sm:max-w-full rounded overflow-hidden shadow-lg p-4 ">
            <Image width={200} height={200} className="w-full h-full md:max-h-40 md:max-w-40" alt="Card Image" src='/portfolio/tamos.png' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Tamos</div>
                <p className="text-gray-700 text-base">
                Call anywhere in the world using Tamos. Call the city and cell phones, at favorable rates. Download, register an NGN number and call. High quality of communication, Reliability and built-in instant messenger make Tamos ideal for communication.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <TechTag tech="Swift" logo="/portfolio/swift_logo.png" />
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>

            </div>
        </div>
    );
}