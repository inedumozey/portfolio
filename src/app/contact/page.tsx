import React from "react";

export default function Contact() {
    return (
        <div className="padx">
            <section className="py-10">
                <h1 className="text-4xl font-bold text-center">Contact Me</h1>
                <div className="container mx-auto mt-6 max-w-lg text-center">
                    {/* Contact Details */}
                    <p className="text-gray-700">
                        <strong>Phone:</strong> <a href="tel:+2348036000347" className="text-blue-500 hover:underline">+2348036000347</a>
                    </p>
                    <p className="text-gray-700 mt-2">
                        <strong>Email:</strong> <a href="mailto:inedumozey@gmail.com" className="text-blue-500 hover:underline">inedumozey@gmail.com</a>
                    </p>
                    <p className="text-gray-700 mt-2">
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/inedumozey" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/inedumozey</a>
                    </p>

                    {/* Contact Form */}
                    <form
                        action="https://formspree.io/f/your-form-id"
                        method="POST"
                        className="mt-6 text-left"
                    >
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full mt-2 p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full mt-2 p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="message" className="block text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full mt-2 p-2 border rounded"
                                rows={4}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
