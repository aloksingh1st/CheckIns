import React from "react";


const TimeSlot = ({color}) =>{

    return<> <div className="w-[15rem] h-[4rem] border bg-gray-200 py-4 " style={{margin:"0 2rem", background:color}} > Here</div> <br /> </>
}

const ShowTable = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4 " style={{ width: "26rem", height:"10rem" }}>
            <span>9-10 A.M</span>
            <TimeSlot color="#E83678"/>
            <span>10-11 A.M</span>
            <TimeSlot />
            <span>11-12 P.M</span>
            <TimeSlot />
            <span>1-2 P.M</span>
            <TimeSlot />

            <span>2-3 P.M</span>
            <TimeSlot />

            <span>3-4 P.M</span>
            <TimeSlot />

            <span>4-5 P.M</span>
            <TimeSlot />

            <span>5-6 P.M</span>
            <TimeSlot />


            <span>6-7 P.M</span>
            <TimeSlot />

            <span>7-8 P.M</span>
            <TimeSlot />


            <span>8-9 P.M</span>
            <TimeSlot />
          </section>
          <div className="hidden" style={{ marginTop: "-6rem" }}>
            <img className="hidden z" src="./landings.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowTable;
