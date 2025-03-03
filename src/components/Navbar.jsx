import logo from "../assets/white-logo.png";

function Navbar(){
    return(
        <>
            <nav className="bg-blue-900 h-15 w-full flex items-center justify-between px-3 md:px-10">
                <img src={logo} alt=""  className="h-5 md:h-6 lg:h-8"/>

                <div className="hidden md:block">
                    <div className="w-80 flex items-center justify-between">
                        <a className="text-white font-medium hidden md:block" href="#">Home</a>
                        <a className="text-white font-medium hidden md:block" href="#">About</a>
                        <a className="text-white font-medium hidden md:block" href="#">Pages</a>
                        <a className="text-white font-medium hidden md:block" href="#">Blogs</a>
                        <a className="text-white font-medium hidden md:block" href="#">Contact</a>
                    </div>
                </div>

                <button className="px-2 py-1 bg-white rounded-full text-blue-900 font-medium text-sm md:text-base md:px-4 hover:bg-blue-200 hover:cursor-pointer">Get Started</button>
            </nav>
        </>
    );
}

export default Navbar;