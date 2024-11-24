export default function ProjectCard({ title, description, image, link }: { title?: string, description?: string, image?: string, link?: string }) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md m-4">
            <img src={image} alt={title} className="rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:underline"
                >
                    Visit Project
                </a>
            </div>
        </div>
    );
}
