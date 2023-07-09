import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



const Status = () =>{

    return <>
    <div className="w-4 h-4 rounded-[50%]" style={{background:"green", borderRadius:"50%"}}> </div>
    </>
}

const Members = () => {
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


              <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="font-bold p-2">Hello</h2>

                <div className='status p-2 my-2'>
                    <Status />
                </div>
                <div className="p-2">
                  <FontAwesomeIcon icon={faTrash} className="w-6 mx-3" />
                  {/* <FontAwesomeIcon icon={faDeleteLeft} /> */}
                </div>

              </div>



              <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="font-bold p-2">Hello</h2>
                <div className='status p-2 my-2'>
                    <Status />
                </div>
                <div className="p-2">
                  <FontAwesomeIcon icon={faTrash} className="w-6 mx-3" />
                  {/* <FontAwesomeIcon icon={faDeleteLeft} /> */}
                </div>

              </div>


              <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="font-bold p-2">Hello</h2>

                <div className='status p-2 my-2'>
                    <Status />
                </div>

                <div className="p-2">
                  <FontAwesomeIcon icon={faTrash} className="w-6 mx-3" />
                  {/* <FontAwesomeIcon icon={faDeleteLeft} /> */}
                </div>
              </div>

            </div>
          </section>
          <div className="hidden" style={{ marginTop: "-6rem" }}>
            <img className="hidden z" src="./landings.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Members