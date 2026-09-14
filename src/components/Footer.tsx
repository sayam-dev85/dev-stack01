import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 lg:px-8">
                {/* Main Footer */}
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:pr-8">
                        <a
                            href="#home"
                            className="inline-flex items-center gap-2"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 text-[10px] font-bold text-white">
                                DS
                            </div>

                            <span className="text-[16px] font-bold tracking-tight">
                                <span className="text-gray-900">Dev </span>

                                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                    Stack
                                </span>
                            </span>
                        </a>

                        <p className="mt-3 max-w-[290px] text-xs leading-5 text-gray-500">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-4 flex items-center gap-4">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="text-xs text-gray-600 transition-colors hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="text-xs text-gray-600 transition-colors hover:text-pink-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="text-xs text-gray-600 transition-colors hover:text-pink-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-900">
                            Product
                        </h3>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-900">
                            Company
                        </h3>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#home"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#home"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-900">
                            Legal
                        </h3>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-xs text-gray-500 transition-colors hover:text-pink-500"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-9 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="text-[11px] text-gray-400 transition-colors hover:text-gray-600"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-[11px] text-gray-400 transition-colors hover:text-gray-600"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;