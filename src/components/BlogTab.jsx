import Blog from "./Blog";
import blogImg1 from "../assets/blog-1.png";
import blogImg2 from "../assets/blog-2.png";
import blogImg3 from "../assets/blog-3.png";

function BlogTab(){
    return(
        <>
            <div className="pt-3 pb-3 flex flex-col items-center">
                <h3 className="mt-10 text-sky-500 text-center">Customer Reviews</h3>
                <h1 className="text-blue-900 text-3xl font-bold text-center mt-3">Our Latest News</h1>
                <p className="text-gray-500 text-center w-90 font-medium sm:w-130 md:w-165 mt-10 mb-15 sm:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

                <div className="md:w-full md:px-20 md:flex md:justify-between sm:flex sm:flex-wrap sm:justify-between">
                    <Blog img={blogImg1} date={"5 Aug 2024"} user={"Anjelio Joly"} heading={"The Intersection Where Blockchain Meets Energy."}/>
                    <Blog img={blogImg2} date={"10 Sep 2024"} user={"Alex Jendro"} heading={"Pros & Cons of Premined Cryptocurrencies."}/>
                    <Blog img={blogImg3} date={"12 Dec 2024"} user={"Kumil Warren"} heading={"How & Where To Market Your ICO Startup."}/>
                </div>
            </div>
        </>
    );
}

export default BlogTab;