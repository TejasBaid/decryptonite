export default function Splash() {
    return (
        <div className="splash w-screen h-screen flex flex-col items-center justify-center">
            <img className="w-1/2 lg:w-1/6 rounded-md" src="/decryptonite.png"/>
            <h1 className="strokedText mt-5 lg:mt-8 text-4xl lg:text-5xl font-bold text-transparent">Decryptonite</h1>
            <h1 className="text-4xl lg:text-5xl text-white font-bold mt-5 lg:mt-8">2022-23</h1>
            <div className="buttons-container flex w-screen justify-center flex-col lg:flex-row mt-6">
                <a className="mr-0 lg:mr-10 mb-6 lg:mb-0" href="https://www.discord.com">Discord</a>
                <a className="mr-0 lg:mr-10 mb-6 lg:mb-0" href="/register">Register</a>
                <a className="mr-0 lg:mr-10 mb-6 lg:mb-0" href="https://docs.google.com/document/d/1bpeRtE2YC09lHyKIuPUFJkxxp1gfuPPvRneCMJxPv7U">Resources</a>
            </div>
        </div>
    );
}