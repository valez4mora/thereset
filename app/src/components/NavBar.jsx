export function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <a href="/" className="text-2xl font-bold tracking-wide text-white">
                    The<span className="text-gray-400">Reset</span>
                </a>

                <div className="flex items-center gap-2">
                    <a
                        href="/"
                        className="rounded-md px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
                    >
                        Home
                    </a>

                    <a
                        href="/about"
                        className="rounded-md px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="/login"
                        className="ml-2 rounded-md bg-gray-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                    >
                        Let's Start
                    </a>
                </div>
            </nav>
        </header>
    );
}
