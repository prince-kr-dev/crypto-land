function Testimonial({name, designation}){
    return(
        <>
            <div className="bg-white px-7  w-70 flex flex-col items-start py-5 mb-5 rounded-2xl">
                <p className="text-gray-600 text-md font-medium">“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”</p>
                <h2 className="text-blue-900 font-bold mt-5">{name}</h2>
                <h3 className="text-gray-500 text-xs font-medium">{designation}</h3>
            </div>
        </>
    );
}

export default Testimonial;