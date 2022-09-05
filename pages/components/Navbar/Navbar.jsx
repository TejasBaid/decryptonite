export default function Navbar() {
    return (
        <nav className="flex flex-wrap-reverse lg:flex-nowrap h-16 lg:h-20 w-screen justify-between items-center fixed z-1">
            <div className="links hidden lg:flex">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </div>
            <div className="images ml-8 lg:mr-16 h-2/3 flex">
                <img className="mr-4" src="/exun-logo.png" alt="Exun logo"/>
                <img src="/decryptonite.png" alt="Decryptonite logo"/>
            </div>
            <div className="hamburger cursor-pointer block lg:hidden absolute right-8">
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </div>
        </nav>
    );
}