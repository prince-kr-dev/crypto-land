

function Profile({profilePic,name, designation}){
    return(
        <>
            <div className="flex flex-col items-center mb-10">
                <img src={profilePic} alt="" className="h-60 rounded-full border border-gray-400 p-4 hover:scale-105 hover:cursor-pointer transition-all" />
                <h2 className="text-2xl font-medium text-blue-900 mt-3">{name}</h2>
                <h3 className="text-md font-medium text-gray-500">{designation}</h3>
            </div>
        </>
    );
}

export default Profile;