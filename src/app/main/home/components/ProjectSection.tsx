import { BorderBeam } from "@/components/ui/border-beam";

const ProjectsSection = () => {
    return (
        <section className="mt-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6">My Project</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="relative">
                        <div className="project-card border-2 p-4 rounded-lg">
                            <div className="mb-4">
                                <img
                                    src="/assets/image/it-moments.png"
                                    alt="IT Moments"
                                    className="h-36 w-full object-cover rounded-md"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">IT Moments</h3>
                            <p className="text-lg">
                                Website Công bố và Bình chọn cho các hoạt động văn nghệ Trường Đại học Công Thương
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="project-card border-2 p-4 rounded-lg">
                            <div className="mb-4">
                                <img
                                    src="/assets/image/it-moments.png"
                                    alt="IT Moments"
                                    className="h-36 w-full object-cover rounded-md"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">IT Moments</h3>
                            <p className="text-lg">
                                Website Công bố và Bình chọn cho các hoạt động văn nghệ Trường Đại học Công Thương
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="project-card border-2 p-4 rounded-lg">
                            <div className="mb-4">
                                <img
                                    src="/assets/image/it-moments.png"
                                    alt="IT Moments"
                                    className="h-36 w-full object-cover rounded-md"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">IT Moments</h3>
                            <p className="text-lg">
                                Website Công bố và Bình chọn cho các hoạt động văn nghệ Trường Đại học Công Thương
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="project-card border-2 p-4 rounded-lg">
                            <div className="mb-4">
                                <img
                                    src="/assets/image/it-moments.png"
                                    alt="IT Moments"
                                    className="h-36 w-full object-cover rounded-md"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">IT Moments</h3>
                            <p className="text-lg">
                                Website Công bố và Bình chọn cho các hoạt động văn nghệ Trường Đại học Công Thương
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
