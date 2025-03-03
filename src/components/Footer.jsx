import Tagline from "./Tagline";
import Solution from "./Solution";
import Support from "./Support";
import Subscribe from "./Subscribe";

function Footer(){
    return(
        <>
            <div>
                <div className="bg-blue-900 pl-10 py-10 md:py-20 md:w-full md:px-20 md:flex md:justify-between sm:flex sm:flex-wrap sm:justify-between">
                    <Tagline/>
                    <Solution/>
                    <Support/>
                    <Subscribe/>
                </div>
                <div className="bg-blue-900 border-t-1 border-white py-5">
                    <h2 className="text-center text-white sm:text-lg">© 2025 CryptoLand - All Rights Reserved</h2>
                </div>
            </div>
        </>
    );
}

export default Footer;
