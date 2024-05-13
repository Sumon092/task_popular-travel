import { BadgeDollarSign, NotebookPen, Plane, Send } from "lucide-react";


const PackageOption = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white rounded-[20px] p-8 lg:p-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-lg  gap-6 lg:gap-0">
                <div className="flex justify-start lg:justify-center gap-6 items-center lg:flex-col lg:gap-0 px-6 border-0 lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 border-slate-400 lg:border-r-1">
                    <div className="h-[60px] w-[60px] rounded-full bg-primary text-white font-bold flex justify-center items-center">
                        <Plane />
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="lg:mt-4 lg:mb-2 text-[16px] lg:text-[16px] xl:text-[24px] sm:text-[14px]  font-inter md:text-[16px]  font-medium">
                            Book Flight
                        </h3>
                    </div>
                </div>

                <div className="flex justify-start lg:justify-center gap-6 items-center lg:flex-col lg:gap-0 px-6 border-0 lg:border lg:border-t-0 lg:border-b-0  lg:border-l-1 border-slate-400 lg:border-r-1">
                    <div className="h-[60px] w-[60px] rounded-full bg-primary text-white font-bold flex justify-center items-center">
                        <Send />
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="lg:mt-4 lg:mb-2 text-[16px] lg:text-[16px] xl:text-[24px]  font-inter md:text-[16px] font-medium sm:text-[14px] whitespace-nowrap">
                            Flight Status
                        </h3>
                    </div>
                </div>

                <div className="flex justify-start lg:justify-center gap-6 items-center lg:flex-col lg:gap-0 px-6 border-0 lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 border-slate-400 lg:border-r-1">
                    <div className="h-[60px] w-[60px] rounded-full bg-primary flex text-white font-bold justify-center items-center">
                        <NotebookPen />
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="lg:mt-4 lg:mb-2 text-[16px] lg:text-[16px] xl:text-[24px] sm:text-[14px]  font-inter md:text-[16px]  font-medium">
                            Flight Schedule
                        </h3>
                    </div>
                </div>

                <div className="flex justify-start lg:justify-center gap-8 items-center lg:flex-col lg:gap-0 px-6">
                    <div className="h-[60px] w-[60px] rounded-full bg-primary flex text-white font-bold justify-center items-center">
                        <BadgeDollarSign />
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="lg:mt-4 lg:mb-2 text-[16px] lg:text-[16px] xl:text-[24px]  font-inter md:text-[16px] font-medium sm:text-[14px]">
                            Price List
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageOption;
