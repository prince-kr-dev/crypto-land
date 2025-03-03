

function Features({img, title}){
    return(
        <>
            <div className="hover:bg-sky-100 flex flex-col items-center border-sky-500 w-90 px-10 py-10 mb-5 rounded-4xl border-t-1 hover:border-t-6 border-b-1 hover:border-b-6 transition-all">
                <img src={img} alt="" className="h-50" />
                <h1 className="text-blue-900 font-bold text-2xl mt-10 mb-10">{title}</h1>
                <p className="text-gray-600 text-center font-medium">Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.</p>
            </div>
        </>
    );
}

export default Features;