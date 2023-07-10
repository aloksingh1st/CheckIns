import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";


const JoinReq = () => {
  
  
    const [data, setData] = useState([]);
    const d = JSON.parse(localStorage.getItem('data'));
    const [elem, setElem] = useState([]);


    console.log(d.access);
    const token = d.access;


    const handleAccept = (id, e)=>{

      var members = [];

      e.preventDefault();

      members.push(id);


      // Make an API call to the server to save the form data
      fetch('http://143.244.129.24/api/org/process_join_request', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ members, process_type:"accept" }),
      })
        .then((response) => response.text())
        .then((data) => {
          alert(data)
          console.log(data); // Display the response from the server
        })
        .catch((error) => {
          console.error(error);
        });
  
      // // Reset the form fields
      // setName('');
      // setAdd_time_table(false);
      // setUpload_status(false);
  
      // console.log(name, );
    };
  

    const handleReject = () => {

    }


useEffect(() => {


  const fetchData = async () => {
    try {
      // Retrieve the token from localStorage
     
      // Fetch data from the API with authorization headers
      const response = await fetch(`http://143.244.129.24/api/org/join_requests`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const daaat = await response.json();
        setData(daaat);
        
                setElem(data.members);
                
              } else {
                throw new Error('Error fetching data');
              }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
}, []);

console.log(data.members); 
// setElem(data.members);
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
            <h1 className="text-center text-black font-[6rem] font-bold font-800">
              {" "}
              Join Requests
            </h1>
            <div className="list-container m-4">
            
             

            {
              data.members && data.members.map((member)=>{

                return(
                <>
                <div
                className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
                style={{ justifyContent: "space-between" }}
                >
                <h2 className="font-bold p-2">{member.name}</h2>
                <div className="p-2">
                  <FontAwesomeIcon icon={faSquareCheck} onClick={(e) => handleAccept(member.id, e)} className="w-6 mx-3" />
                  <FontAwesomeIcon icon={faDeleteLeft} onClick={handleReject}/>
                </div>

              </div>
                </>
                )
              })
            }

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

export default JoinReq;
