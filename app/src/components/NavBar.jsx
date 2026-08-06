import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#211E03] bg-[#211E03]">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link to={"/"}>
                <a href="/" className="text-2xl font-bold tracking-wide text-white">
                    The<span className="text-gray-400">Reset</span>
                </a>
                </Link>
                <div className="flex items-center gap-2">
                    <NavLink
                        to={"/"}
                        className="rounded-md px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/about"}
                        className="rounded-md px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to={"/login"}
                        className="ml-2 rounded-md bg-[#877E5F] px-5 py-2 font-medium text-white transition hover:bg-gray-700"
                    >
                        Let's Start
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
