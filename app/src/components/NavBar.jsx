

export function NavBar() {
    return (
        <header className="border-b ">
            <nav className="bg-gray-900 h-20 flex justify-between items-center px-16">
                <h1 className="text-white font-bold text-2xl">TheReset</h1>

                <div className="flex h-full">
                    <a href="/" className="flex items-center justify-center w-32 h-full text-white hover:bg-gray-600 transition-colors">
                        Home
                    </a>

                    <a href="#" className="flex items-center justify-center w-32 h-full text-white hover:bg-gray-600 transition-colors">
                        About
                    </a>
                    
                    <a href="/login" className="flex items-center justify-center 
                    w-32 h-full text-white hover:bg-gray-600 transition-colors" >
                        Lets Start
                    </a>
                </div>
            </nav>
        </header>
    )
}