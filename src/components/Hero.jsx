import heroImg from "../assets/home2-bg.png";

function Hero(){
    return(
        <>
            <div className="bg-blue-900 h-70 px-5 sm:px-10 sm:h-108 lg:h-147.5 sm:flex sm:items-center sm:justify-between md:px-10 sm:w-full">
                <div className="flex items-center flex-col md:flex md:flex-col md:items-start ">
                    <h2 className="font-bold text-white text-center py-5 sm:py-10 sm:text-2xl sm:font-medium md:text-left md:text-3xl mb-5">Start Investing & Earn Money</h2>
                    <h3 className="font-bold text-white text-center text-2xl sm:py-3 sm:text-3xl sm:font-medium md:text-left md:text-5xl mb-3">Say goodbye to
                    idle money.</h3>
                    <h4 className="text-center text-white text-xs md:text-xl sm:text-sm md:text-left md:w-140 sm:mb-5">Invest your spare change in Bitcoin and save with crypto to e arn interest in real time.</h4>

                    <button className="px-8 py-2 bg-sky-500 rounded-full text-sm mt-8 text-white">Get Started</button>
                </div>
                <img src={heroImg} alt="" className="h-100 mr-15 hidden md:block"/>
            </div>
        </>
    );
}

export default Hero;