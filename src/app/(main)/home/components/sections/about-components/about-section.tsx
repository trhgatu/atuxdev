'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useRef } from 'react';

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section ref={ref} className="py-16 px-8 relative">
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.p
                            className="text-white text-4xl md:text-6xl font-bold"
                            initial={{ opacity: 0, y: -10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            About me.
                        </motion.p>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="mt-6 text-slate-200">
                            Hi, I'm <span className="font-semibold text-red-600">Anh Tu</span>.
                            I'm passionate about <span className="italic">web development</span> and aspire to
                            <span className="italic"> become a full-stack developer</span>.
                        </p>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                className="p-4 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-lg"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <FaCode className="text-red-500 text-2xl mb-2" />
                                <h3 className="text-white font-medium mb-1">Frontend</h3>
                                <p className="text-sm text-slate-200">Next.js, React, TypeScript</p>
                            </motion.div>

                            <motion.div
                                className="p-4 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-lg"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <FaServer className="text-red-500 text-2xl mb-2" />
                                <h3 className="text-white font-medium mb-1">Backend</h3>
                                <p className="text-sm text-slate-200">Node.js, Express, REST API</p>
                            </motion.div>

                            <motion.div
                                className="p-4 bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-lg"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <FaDatabase className="text-red-500 text-2xl mb-2" />
                                <h3 className="text-white font-medium mb-1">Database</h3>
                                <p className="text-sm text-slate-200">MongoDB</p>
                            </motion.div>
                        </div>

                        <p className="mt-6 text-slate-200">
                            My goal is to build scalable, efficient, and user-centric applications that solve real-world problems.
                            I'm always eager to expand my knowledge, embrace challenges, and collaborate with
                            others to deliver impactful projects.
                        </p>

                        <div className="mt-8 space-y-3">
                            <motion.div
                                className="flex items-center text-slate-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 mr-4">
                                    <FaMapMarkerAlt className="text-red-500" />
                                </div>
                                <span>Ho Chi Minh City, Vietnam</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center text-slate-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 mr-4">
                                    <FaEnvelope className="text-red-500" />
                                </div>
                                <span>trananhtu1112003@gmail.com</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center text-slate-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-50/5 to-gray-900/20 backdrop-blur-sm border border-gray-800 mr-4">
                                    <FaCalendarAlt className="text-red-500" />
                                </div>
                                <span>Born on November 11, 2003</span>
                            </motion.div>
                        </div>

                        <motion.div
                            className="mt-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Link
                                href="/assets/resume.pdf"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 shadow-md"
                            >
                                <FaDownload className="mr-2" />
                                Download CV
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
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
                </motion.div>
            </div>
        </section>
    );
}
