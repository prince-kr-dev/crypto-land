
function Subscribe(){
    return(
        <>
            <div className="mt-5 md:mt-0 w-70 flex flex-col items-center md:items-start">
                <h1 className="text-3xl font-medium text-white">Subscribe</h1>
                <p className="text-white mt-2 font-medium text-center sm:text-left">Subscribe to our newsletter for the latest updates</p>
                <input type="email" placeholder="Enter Email" className="bg-blue-300 px-3 py-2 rounded-xl font-medium text-md w-60 mt-4"/>
            </div>
        </>
    );
}


export default Subscribe;
