'use client';

export default function AboutSection() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
                        About me
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                        Hi, I’m <span className="font-semibold text-red-500">[Your Name]</span>.
                        I’m passionate about <span className="italic">[your passion or field]</span>
                        and dedicated to <span className="italic">[your mission or goal]</span>.
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        With <span className="font-medium">[X years]</span> of experience, I specialize in
                        <span className="font-medium"> [your skills or expertise]</span>.
                        I’m always eager to learn, grow, and share my knowledge with others.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
