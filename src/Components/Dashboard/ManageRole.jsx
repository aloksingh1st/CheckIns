import React from 'react'
import ListCard from './ListCard';

const ManageRole = () => {

  return (
    <>
    <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem", }}>
            <h1 className="text-center text-black font-[6rem] font-bold font-800">
              {" "}
              Manage Role
            </h1>
            <div className="list-container m-4">
                <ListCard />
                <ListCard />
                <ListCard />
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

export default ManageRole