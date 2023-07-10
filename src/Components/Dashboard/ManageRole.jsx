import React, { useEffect, useState } from 'react'
import ListCard from './ListCard';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageRole = () => {


  
  const [data, setData] = useState([]);
  const d = JSON.parse(localStorage.getItem('data'));
  console.log(d.access);
  const token = d.access;


  const handleDelete = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      // Add any additional headers if required, such as authorization token
    };

    fetch(`http://143.244.129.24/api/org/delete_role/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          // Handle successful deletion
          alert('Item deleted successfully.');
        } else {
          // Handle deletion error
          console.error('Error deleting item.');
        }
      })
      .catch((error) => {
        // Handle network error
        console.error('Network error:', error);
      });
  }

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        

        // Fetch data from the API with authorization headers
        const response = await fetch(`http://143.244.129.24/api/org/list_role`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setData(data);

          console.log(data);
        } else {
          throw new Error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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


            {data.map((item) => (

            <div
            key={item.id}
        className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
        style={{ justifyContent: "space-between" }}
      >
        <h2 className="font-bold p-2">{item.name}</h2>
        <div className="p-2">
          <FontAwesomeIcon icon={faPenToSquare} className="mx-3" />
          <FontAwesomeIcon icon={faTrash} onClick={()=>{handleDelete(item.id)}}/>
        </div>
      </div>

            ))}

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