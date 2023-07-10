import React from 'react'

const Profile = () => {

  const data = JSON.parse(localStorage.getItem("data"));

  
  return (
    <>
    <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
      <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <section style={{width:"20rem"}}>

          <h1>Name : {data.name}</h1>

          <hr />

          <h2>Email : {data.email}</h2>

        </section>
        <div className="hidden" style={{ marginTop: "-6rem" }}>
          <img className="hidden z" src="./landings.svg" alt="mockup" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile