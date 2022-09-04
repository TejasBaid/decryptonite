import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex h-20 w-screen justify-between items-center fixed z-1">
            <div className="flex ml-16">
                <a className="text-white" href="/">Home</a>
            </div>
        </nav>
    );
}