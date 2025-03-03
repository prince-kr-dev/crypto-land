import Features from "./Features";
import img1 from "../assets/feature-icon-1.png";
import img2 from "../assets/feature-icon-2.png";
import img3 from "../assets/feature-icon-3.png";

function FeaturesTab(){
    return(
        <>
            <div className="flex flex-col items-center">
                <h3 className="mt-10 text-sky-500 text-center">Why choose us?</h3>
                <h1 className="text-blue-900 text-3xl font-bold text-center mt-3">Our Features</h1>
                <p className="text-gray-500 text-center w-90 sm:w-130 md:w-165 mt-10 mb-8 sm:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="md:w-full md:px-10 md:flex md:flex-wrap md:justify-between">
                    <Features img={img1} title={"Instand Excahnge"}/>
                    <Features img={img2} title={"Safe & Secure"}/>
                    <Features img={img3} title={"Instant Trading"}/>
                </div>
            </div>
        </>
    );
}

export default FeaturesTab;