import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section id="home" className="overflow-hidden bg-white">
            <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
                {/* Hero content */}
                <div className="max-w-[620px]">
                    <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-6xl lg:text-[58px]">
                        Build Your Ideal
                        <span className="mt-1 block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[580px] text-base leading-7 text-gray-500 sm:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#technologies"
                            className="inline-flex min-h-[46px] items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-gray-200 bg-white px-7 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-pink-300 hover:text-pink-500"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Hero image */}
                <div className="flex items-center justify-center lg:justify-end">
                    <img
                        src={bannerStack}
                        alt="Development technology stack illustration"
                        className="w-full max-w-[430px] object-contain sm:max-w-[480px] lg:max-w-[500px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;