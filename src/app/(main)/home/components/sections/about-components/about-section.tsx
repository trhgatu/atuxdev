'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useRef } from 'react';

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <section ref={ref} className="py-16 px-8 relative">
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 md:text-left">
                    <div
                    >
                        <p
                            className="text-white text-4xl md:text-6xl font-bold"
                        >
                            About me.
                        </p>
                        <div
                            className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
                        />
                    </div>

                    <div
                    >
                        <p className="mt-6 text-slate-200">
                            Hi, I&apos;m <span className="font-semibold text-red-600">Anh Tu</span>.
                            I&apos;m passionate about <span className="italic">web development</span> and aspire to
                            <span className="italic"> become a full-stack developer</span>.
                        </p>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div
                                className="p-4 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-lg"
                            >
                                <FaCode className="text-red-500 text-2xl mb-2" />
                                <h3 className="text-white font-medium mb-1">Frontend</h3>
                                <p className="text-sm text-slate-200">Next.js, React, TypeScript</p>
                            </div>

                            <div
                                className="p-4 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-lg"
                            >
                                <FaServer className="text-red-500 text-2xl mb-2" />
                                <h3 className="text-white font-medium mb-1">Backend</h3>
                                <p className="text-sm text-slate-200">Node.js, Express, REST API</p>
                            </div>

                            <div
                                className="p-4 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-lg"
                            >
                                <FaDatabase className="text-red-500 text-2xl mb-2" />
                                <h3 className="text-white font-medium mb-1">Database</h3>
                                <p className="text-sm text-slate-200">MongoDB</p>
                            </div>
                        </div>

                        <p className="mt-6 text-slate-200">
                            My goal is to build scalable, efficient, and user-centric applications that solve real-world problems.
                            I&apos;m always eager to expand my knowledge, embrace challenges, and collaborate with
                            others to deliver impactful projects.
                        </p>

                        <div className="mt-8 space-y-3">
                            <div
                                className="flex items-center text-slate-200"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 mr-4">
                                    <FaMapMarkerAlt className="text-red-500" />
                                </div>
                                <span>Ho Chi Minh City, Vietnam</span>
                            </div>

                            <div
                                className="flex items-center text-slate-200"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 mr-4">
                                    <FaEnvelope className="text-red-500" />
                                </div>
                                <span>trananhtu1112003@gmail.com</span>
                            </div>

                            <div
                                className="flex items-center text-slate-200"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 mr-4">
                                    <FaCalendarAlt className="text-red-500" />
                                </div>
                                <span>Born on November 11, 2003</span>
                            </div>
                        </div>

                        <div
                            className="mt-8"
                        >
                            <Link
                                href="/assets/resume.pdf"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 shadow-md"
                            >
                                <FaDownload className="mr-2" />
                                Download CV
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl -z-10"></div>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-30 animate-pulse"></div>

                        <Image
                            src="/assets/image/tu2.jpg"
                            alt="Anh Tu"
                            fill
                            className="object-cover rounded-2xl p-1"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-sm font-medium">Full Stack Developer</p>
                            <p className="text-xs opacity-80">Passionate about creating impactful web experiences</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
