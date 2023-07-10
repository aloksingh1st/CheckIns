import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Status = () => {
  return (
    <>
      <div
        className="w-4 h-4 rounded-[50%]"
        style={{ background: "green", borderRadius: "50%" }}
      >
        {" "}
      </div>
    </>
  );
};

const MemberSecond = () => {
  const [data, setData] = useState("");
  const d = JSON.parse(localStorage.getItem("data"));
  const [elem, setElem] = useState([]);
  console.log(d.access);
  const token = d.access;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage

        // Fetch data from the API with authorization headers
        const response = await fetch(
          `http://143.244.129.24/api/member/other_members`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const daaat = await response.json();
          setData(daaat.members);

          // setElem(data);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data, "data");

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
            <h1 className="text-center text-black font-[6rem] font-bold font-800">
              {" "}
              Members
            </h1>

            <div className="list-container m-4">
              

            {data &&
              data.map((item) => {

                return(

                  <>
                <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
                >
                <h2 className="font-bold p-2">{item.name}</h2>

                <div className="flex status p-2 my-2">
                  <Status />
                  {item.role_in_org}
                </div>
                <div className="p-2">
                  <FontAwesomeIcon icon={faTrash} className="w-6 mx-3" />
                  {/* <FontAwesomeIcon icon={faDeleteLeft} /> */}
                </div>
              </div>
                </>
              )
              })}
              
              
              
            </div>
          </section>
          <div className="hidden" style={{ marginTop: "-6rem" }}>
            <img className="hidden z" src="./landings.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberSecond;
