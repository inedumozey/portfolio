import React from "react";

export default function Resume() {
    return (
        <div>
            <section className="py-10 text-center">
                <h1 className="text-4xl font-bold">Resume</h1>
                <div className="container mx-auto mt-6 max-w-xl">
                    {/* Thumbnail of the Resume */}
                    <img
                        src="/resume-thumbnail.png"
                        alt="Resume Thumbnail"
                        className="w-full rounded shadow-md"
                    />
                    {/* Download Button */}
                    <div className="mt-6">
                        <a
                            href="/resume.pdf" // Replace with your actual resume file
                            download
                            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Download Full Resume
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
