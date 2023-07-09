import React from "react";

const About = () => {
  return (
    <>
      <section className="mt-[50px] justify-center p-0 flex flex-col wrap">
        <h1 className="text-center text-black font-[4.1rem] font-700 mb-3">
          {" "}
          Wanted to know more ?
        </h1>
        <p className="m-auto w-[50%] text-center font-[1.5rem] text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          delectus dolores impedit doloribus optio consequuntur dolorum? Est
          voluptates adipisci, beatae rem reiciendis ut debitis commodi nisi
          molestiae sapiente laboriosam numquam!
        </p>

        {/* cards */}

        <section className="block md:grid md:grid-cols-3 gap-5 w-[90%] mx-[50px] mt-8 my-auto">
          {/* <div className="flex items-center rounded-[20px] bg-white">
            
          </div> */}

          <div className="flex flex-col items-center shadow-black rounded border border-solid bg-white"
          style={{boxShadow:"1px 1px 0.5px gray"}}>
            <lottie-player
              src="./analysis-digital-marketing.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"
              style={{width:"13rem"}}
            ></lottie-player>

            <h2 className="font-bold text-2xl">Manage Organization</h2>
            <p className="p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis architecto odio. Iure, exercitationem animi. Inventore
              laboriosam tenetur suscipit, libero eligendi, quod earum
              blanditiis reiciendis perferendis veniam voluptatem, architecto
              unde consequatur velit? Voluptatibus omnis odio consequatur eaque
              expedita facere rerum.
            </p>
          </div>

          <div className="flex flex-col items-center border border-solid rounded drop-shadow-lg bg-white"
          style={{boxShadow:"1px 1px 0.5px gray"}}
          >
            <lottie-player
              src="./man-holding-note.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"

              style={{width:"13rem"}}
            ></lottie-player>
            <h2 className="font-bold text-2xl">Manage Organization</h2>
            <p className="p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis architecto odio. Iure, exercitationem animi. Inventore
              laboriosam tenetur suscipit, libero eligendi, quod earum
              blanditiis reiciendis perferendis veniam voluptatem, architecto
              unde consequatur velit? Voluptatibus omnis odio consequatur eaque
              expedita facere rerum.
            </p>
          </div>

          <div className="flex flex-col items-center border border-solid rounded bg-white"
          style={{boxShadow:"1px 1px 0.5px gray"}}>
            <lottie-player
              src="./analytics.json"
              background="transparent"
              speed="1"
              loop
              autoplay="true"

              style={{width:"13rem"}}
            ></lottie-player>
            <h2 className="font-bold text-2xl">Manage Organization</h2>
            <p className="p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis architecto odio. Iure, exercitationem animi. Inventore
              laboriosam tenetur suscipit, libero eligendi, quod earum
              blanditiis reiciendis perferendis veniam voluptatem, architecto
              unde consequatur velit? Voluptatibus omnis odio consequatur eaque
              expedita facere rerum.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
