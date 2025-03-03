import Profile from "./Profile";
import profilePic1 from "../assets/team1.jpg";
import profilePic2 from "../assets/team2.jpg";
import profilePic3 from "../assets/team3.jpg";
import profilePic4 from "../assets/team4.jpg";

function Team(){
    return(
        <>
            <div className=" pt-3 pb-3 flex flex-col items-center">
                <h3 className="mt-10 text-sky-500 text-center">Expert Team?</h3>
                <h1 className="text-blue-900 text-3xl font-bold text-center mt-3">Meet Our Team</h1>
                <p className="text-gray-500 text-center w-90 font-medium sm:w-130 md:w-165 mt-10 mb-8 sm:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

                <div className="md:w-full md:px-10 md:flex md:flex-wrap md:justify-between mt-10">
                    <Profile profilePic={profilePic1} name={"Liza Marco"} designation={"Founder"}/>
                    <Profile profilePic={profilePic2} name={"Deco Milan"} designation={"Developer"}/>
                    <Profile profilePic={profilePic3} name={"Amion Doe"} designation={"Designer"}/>
                    <Profile profilePic={profilePic4} name={"John Smith"} designation={"Co-Founder"}/>
                </div>
            </div>
        </>
    );
}

export default Team;