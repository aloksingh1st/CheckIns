import React, { useState } from "react";

const Notice = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform the POST request to the endpoint using the fetch API or any library of your choice
    // try {
    //   const response = await fetch('YOUR_ENDPOINT_URL', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ input: inputValue }),
    //   });

    //   if (response.ok) {
    //     // Handle successful response
    //     console.log('Form submitted successfully!');
    //   } else {
    //     // Handle error response
    //     console.error('Error submitting form:', response.statusText);
    //   }
    // } catch (error) {
    //   // Handle network or other errors
    //   console.error('Error submitting form:', error);
    // }

    console.log(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
      <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <form onSubmit={handleSubmit} className="block w-full mx-4">
          <input type="text" value={inputValue} onChange={handleChange} className="w-64 h-64 text-start bg-gray-200" placeholder="Enter the notice message here..." />
          <br />
          <button
                type="submit"
                style={{
                  background: "#E83678",
                  color: "white",
                }}
                className="my-4"
              >
                Submit
              </button>
        </form>
        <div className="hidden" style={{ marginTop: "-6rem" }}>
          <img className="hidden z" src="./landings.svg" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Notice;
