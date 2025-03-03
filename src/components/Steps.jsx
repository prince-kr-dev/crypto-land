

function Steps({number, title}){
    return(
        <>
            <div className="px-3  w-90 flex flex-col items-center py-5 mb-5">
                <h1 className="text-3xl font-bold text-blue-900 hover:text-white bg-white hover:bg-sky-500 p-5 rounded-full transition">{number}</h1>
                <h2 className="text-xl font-bold text-blue-900 mt-7 mb-4">{title}</h2>
                <p className="text-center w-70 text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta asperiores?</p>
            </div>
        </>
    );
}

export default Steps;