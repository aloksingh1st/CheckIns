import React, { useState } from "react";

const Privacy = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "checkbox1") {
      setIsChecked1(checked);
    } else if (name === "checkbox2") {
      setIsChecked2(checked);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      checkbox1: isChecked1,
      checkbox2: isChecked2,
    };

    fetch("https://your-endpoint-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the endpoint
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error(error);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900 mb-[-7rem]">
      <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <section className="sm:mx-4 md:mx-4" style={{ width: "26rem" }}>
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                Show-Status
                <input
                  type="checkbox"
                  name="checkbox1"
                  checked={isChecked1}
                  onChange={handleCheckboxChange}
                  className="m-4"
                />
              </label>
              <br />
              <label>
                Show Time-Table
                <input
                  type="checkbox"
                  name="checkbox2"
                  checked={isChecked2}
                  onChange={handleCheckboxChange}
                  className="m-4"
                />
              </label>
              <br />
              <button
                type="submit"
                style={{
                  background: "#E83678",
                  color: "white",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <div className="hidden" style={{ marginTop: "-6rem" }}>
          <img className="hidden z" src="./landings.svg" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
