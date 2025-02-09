'use client';

export default function AboutSection() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="w-44 bg-black">
                        <p className="dark:bg-white text-white text-2xl p-2 md:text-3xl font-bold dark:text-black">
                            About me.
                        </p>
                    </div>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed dark:text-white">
                        Hi, I’m <span className="font-semibold text-red-400 dark:text-red-600">Anh Tu</span>.
                        I’m passionate about <span className="italic">web development</span> and aspire to
                        <span className="italic"> become a full-stack developer</span>.
                    </p>
                    <p className="mt-4 dark:text-white leading-relaxed">
                        I have experience in frontend development using Next.js,
                        React, and TypeScript, as well as backend development with Node.js and MongoDB.
                        My goal is to build scalable, efficient, and user-centric applications that solve real-world problems.
                    </p>
                    <p className="mt-4 dark:text-white leading-relaxed">
                        I’m always eager to expand my knowledge, embrace challenges, and collaborate with
                        others to deliver impactful projects.
                    </p>
                </div>
            </div>
        </section>
    );
}
