import React, { useRef } from 'react';
import { Timeline } from '@/shared/components/landing/time-line';
import { Card } from '@/shared/components/ui/card';
import Image from 'next/image';

const Journey = () => {
    const ref = useRef(null);

    const data = [
        {
            title: 'Currently',
            content: (
                <div
                    className="relative"
                >
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-red-900/10 transition-all duration-300 hover:scale-[1.02]">
                        <h4 className="text-xl font-bold mb-2 text-white">Collaborator at <span className="text-red-500">CyberSkill</span></h4>
                        <p className="mb-4 text-gray-300">
                            Working on cutting-edge web applications and expanding my professional network. This role has allowed me to:
                        </p>
                        <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
                            <li>Collaborate with experienced developers on real-world projects</li>
                            <li>Implement modern frontend frameworks and libraries</li>
                            <li>Participate in code reviews and technical discussions</li>
                        </ul>
                        <div className="flex items-center text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            2024 - Present
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: '2024',
            content: (
                <div
                    className="relative"
                >
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-red-900/10 transition-all duration-300 hover:scale-[1.02]">
                        <h4 className="text-xl font-bold mb-2 text-white">Internship at <span className="text-orange-600">CyberSkill</span></h4>
                        <p className="mb-4 text-gray-300">
                            Completed an intensive internship program focused on web development and software engineering practices.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <h5 className="font-medium text-red-400 mb-1">Key Projects</h5>
                                <p className="text-sm text-gray-400">Contributed to e-commerce platform development and internal tools</p>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <h5 className="font-medium text-red-400 mb-1">Technologies</h5>
                                <p className="text-sm text-gray-400">React, Node.js, MongoDB, Docker</p>
                            </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Jan 2024 - May 2024
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: '2021 - 2023',
            content: (
                <div
                    className="relative"
                >
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-700/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-red-900/10 transition-all duration-300 hover:scale-[1.02]">
                        <h4 className="text-xl font-bold mb-2 text-white">Student at <span className="text-red-500">Ho Chi Minh University of Industry and Trade</span></h4>
                        <p className="mb-4 text-gray-300">
                            Studied Information Technology with a focus on web development and software engineering.
                        </p>

                        <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
                            <Image
                                src="/assets/image/university.jpg"
                                alt="University campus"
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            />
                            <div className="absolute bottom-0 left-0 p-4 z-20">
                                <p className="text-white font-medium">HUIT</p>
                                <p className="text-sm text-gray-300">Where my journey began</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <h5 className="font-medium text-red-400 mb-1">Notable Courses</h5>
                                <p className="text-sm text-gray-400">Web Development, Database Systems, Algorithms</p>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <h5 className="font-medium text-red-400 mb-1">Activities</h5>
                                <p className="text-sm text-gray-400">Coding competitions, Student tech club</p>
                            </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Sep 2021 - Jun 2023
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section ref={ref} className="px-6 py-16 relative">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="absolute top-40 right-1/4 w-20 h-20 bg-red-500/5 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-red-600/5 rounded-full blur-xl -z-10"></div>

            <div className="absolute top-32 right-32 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute top-40 right-40 w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>

            <div className="absolute bottom-32 left-32 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-40 left-40 w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="absolute bottom-48 left-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>

            <div className="flex max-w-5xl flex-col gap-10 mx-auto">
                <div className="w-full">
                    <p
                        className=" text-4xl md:text-6xl font-bold"
                    >
                        My Journey.
                    </p>
                    <div
                        className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
                    />
                    <p
                        className="mt-4  max-w-2xl"
                    >
                        My professional path and educational background that shaped who I am today.
                    </p>
                </div>

                <div
                    className="relative z-10"
                >
                    <Card className="bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border-gray-800 overflow-hidden shadow-xl hover:shadow-red-900/20 transition-all duration-300">
                        <div className='mx-auto bg-black container p-6 md:p-10'>
                            <Timeline data={data} />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Journey;
