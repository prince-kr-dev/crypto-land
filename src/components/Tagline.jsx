import logo from "../assets/white-logo.png";
function Tagline(){
    return(
        <>
            <div className="w-70">
                <img src={logo} alt="" className="m-auto h-10"/>
                <p className="text-white mt-5 text-center font-medium text-sm sm:text-md">Making the world a better place through constructing elegant hierarchies.</p>
            </div>
        </>
    );
}


export default Tagline;