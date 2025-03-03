

function Blog({img, date, user, heading}){
    return(
        <>
            <div className="bg-white rounded-2xl overflow-hidden w-80 flex flex-col items-start mb-5 shadow-xl pb-4">
                <div>
                    <img src={img} alt="" className="hover:scale-105 transition-all"/>
                </div>
                <h2 className="mx-4 mt-3 text-xs font-medium text-sky-700">{date}</h2>
                <h2 className="mx-4 mt-1 text-xs font-medium text-sky-700">{user}</h2>
                <h1  className="text-blue-900 mx-4 mt-5 text-xl md:text-2xl font-semibold hover:text-sky-500 transition-all hover:cursor-pointer">{heading}</h1>
                <p className="mx-4 text-gray-500 text-sm font-medium mt-5">Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore.</p>
                <a href="#" className="mx-4 mt-3 text-sm text-blue-800 underline">Read blog</a>
            </div>
        </>
    );
}

export default Blog;