import Icon from "./Icon"

export default function ProjectCard({ title, description, image, link, button = "Visit Project →" }: { title?: string, description?: string, image?: string, link?: string, button?: string }) {
    return (
        <div className="bg-white rounded-lg shadow-md border-[1px] hover-scale transition">
            <span className="inline-block">
                <Icon src={`/${image}`} />
            </span>
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-gray-600 text-justify">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:underline"
                >
                    {button}
                </a>
            </div>
        </div>
    );
}
