import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="mt-[50px] justify-center p-0 flex flex-col wrap">
        <h1 className="text-center text-black font-[4.1rem] font-700 mb-3">
          {" "}
          What We do
        </h1>
        <p className="m-auto w-[50%] text-center font-[1.5rem] text-gray-400">

          Our platform enables seamless scheduling by allowing members to effortlessly share their availability, ensuring accurate meeting times with each individual's busy or free time slots.
        </p>

        {/* cards */}

        <section className="block md:grid md:grid-cols-3 gap-5 w-[90%] mx-[50px] mt-8 my-auto">
          {/* <div className="flex items-center rounded-[20px] bg-white">
            
          </div> */}

          <div className="flex flex-col items-center shadow-black rounded border border-solid bg-white"
            style={{ boxShadow: "1px 1px 0.5px gray" }}>
            <lottie-player
              src="./analysis-digital-marketing.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"
              style={{ width: "13rem" }}
            ></lottie-player>

            <h2 className="font-bold text-2xl">Networking</h2>
            <p className="p-6">

              Through networking, our platform fosters professional growth by facilitating a harmonious balance between individuals' busy professional lives and personal commitments. It creates a healthy environment within large organizations by providing visibility into members' availability, enabling effective prioritization and planning for crucial tasks and engagements.
            </p>
          </div>

          <div className="flex flex-col items-center border border-solid rounded drop-shadow-lg bg-white"
            style={{ boxShadow: "1px 1px 0.5px gray" }}
          >
            <lottie-player
              src="./man-holding-note.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"

              style={{ width: "13rem" }}
            ></lottie-player>
            <h2 className="font-bold text-2xl">Personal analysis</h2>
            <p className="p-6">
            Our platform enables personal analysis and growth by helping individuals strike a healthy balance between their professional and personal lives. It provides insights into one's availability, allowing for effective self-assessment, prioritization, and the pursuit of important personal endeavors alongside work responsibilities. This creates an environment conducive to personal well-being and growth.
            </p>
          </div>

          <div className="flex flex-col items-center border border-solid rounded bg-white"
            style={{ boxShadow: "1px 1px 0.5px gray" }}>
            <lottie-player
              src="./analytics.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"

              style={{ width: "13rem" }}
            ></lottie-player>
            <h2 className="font-bold text-2xl">Synergy-Growth</h2>
            <p className="p-6">
            Synergy growth in daily life arises from collaborative efforts, where our networking platform plays a vital role. By connecting individuals and facilitating the exchange of resources and ideas, it fosters collective progress, productivity, and fulfillment in various aspects of our everyday existence.
             </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
