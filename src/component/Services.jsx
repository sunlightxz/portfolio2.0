import React from "react";

const Services = () => {
  return (
    <div className="section-padding-x relative z-20 min-h-screen w-full overflow-x-clip flex flex-col items-start bg-black text-white pr-2">
      <div className="flex w-full flex-col">
        <h1 className="text-[90px] font-semibold text-[#D1D1C7] col-span-6 ">
          WHAT I DO
        </h1>
      </div>

      <div className="mt-12 w-full">
        <div className="mt-12 flex flex-col justify-between gap-y-16">
          <div
            className="sticky top-0 border-t border-t-[#D1D1C7] bg-secondary-700 px-2"
            style={{ top: "calc(0em + 20vh)" }}
          >
            <h1>dsg</h1>
          </div>
           <div
            className="sticky top-0 border-t border-t-[#D1D1C7] bg-secondary-700 px-2"
            style={{ top: "calc(0em + 20vh)" }}
          >
                        <h1>dsg</h1>

          </div>
           <div
            className="sticky top-0 border-t border-t-[#D1D1C7] bg-secondary-700 px-2"
            style={{ top: "calc(0em + 20vh)" }}
          >
                        <h1>dsg</h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
