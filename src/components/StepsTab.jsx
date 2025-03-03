import Steps from "./Steps";

function StepsTab(){
    return(
        <>
            <div className="bg-blue-100 pt-3 pb-3 flex flex-col items-center">
                <h3 className="mt-10 text-sky-500 text-center">Ready to get started?</h3>
                <h1 className="text-blue-900 text-3xl font-bold text-center mt-3">3 Steps to Start</h1>
                <p className="text-gray-500 text-center w-90 font-medium sm:w-130 md:w-165 mt-10 mb-8 sm:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

                <div className="md:w-full md:px-10 md:flex md:justify-between">
                    <Steps number={"01"} title={"Create Wallet"}/>
                    <Steps number={"02"} title={"Make Payment"}/>
                    <Steps number={"03"} title={"Buy & Sell Coins"}/>
                </div>
            </div>
        </>
    );
}

export default StepsTab;