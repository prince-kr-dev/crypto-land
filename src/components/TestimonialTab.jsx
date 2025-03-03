import Testimonial from "./Testimonial";

function TestimonialTab(){
    return(
        <>
            <div className="bg-blue-100 pt-3 pb-3 flex flex-col items-center">
                <h3 className="mt-10 text-sky-500 text-center">Customer Reviews</h3>
                <h1 className="text-blue-900 text-3xl font-bold text-center mt-3">Our Testimonials</h1>
                <p className="text-gray-500 text-center w-90 font-medium sm:w-130 md:w-165 mt-10 mb-15 sm:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

                <div className="md:w-full md:px-30 md:flex md:justify-between">
                    <Testimonial name={"David Gilario"} designation={"Graphic Designer"}/>
                    <Testimonial name={"Somalia D Silva"} designation={"Bussiness Manager"}/>
                    <Testimonial name={"James Warner"} designation={"Web Developer"}/>
                </div>
            </div>
        </>
    );
}

export default TestimonialTab;