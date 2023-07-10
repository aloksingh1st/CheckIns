import React, { useEffect, useState } from "react";

import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [roledata, setRoledata] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole_id] = useState("");

  const handleVerify = async (id) => {
    // console.log(id);

    const result = org.split(" ").join("");

    console.log(result);
    try {
      const response = await fetch(
        `http://143.244.129.24/api/user/get_join_code/${result}`
      );
      const jsonData = await response.json();

      console.log(jsonData);
      setRoledata(jsonData.roles);
      setIsDataFetched(true);

      console.log(roledata, isDataFetched);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // HuQHjd

    const formData = {
      first_name: name,
      email: email,
      password: password,
      join_code: org,
      role_id: role_id,
    };

    console.log(formData);
    // Perform the POST request to the endpoint using the fetch API or any library of your choice
    try {
      const response = await fetch(
        "http://143.244.129.24/api/user/member/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle successful response
        navigate("/login");
        console.log("Registration submitted successfully!");
      } else {
        // Handle error response
        alert("Error submitting registration:", response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      alert("Error submitting registration:", error);
    }
  };

  useEffect(() => {}, [handleVerify, roledata]);

  return (
    <>
      <section style={{ margin: "10rem" }}>
        <section class="bg-gray-50 dark:bg-gray-900">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required="true"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your name"
                      required="true"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="organizationcode"
                      className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Organization Code
                    </label>

                    <div className="flex">
                      <input
                        type="orgcode"
                        name="orgcode"
                        id="orgcode"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Organization code"
                        required="true"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                      />
                      <button
                        onClick={handleVerify}
                        className="text-white"
                        style={{ background: "#E83678" }}
                      >
                        verify
                      </button>
                    </div>

                    <div>
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select an option
                      </label>

                      {isDataFetched && (
                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={role_id}
                          onChange={(e) => setRole_id(e.target.value)}
                        >
                          {roledata.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  {console.log(role_id)}
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="true"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start"></div>
                    <a
                      href="#"
                      class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    style={{ background: "#E83678" }}
                  >
                    Sign Up
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/mem/login"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      log in
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Register;
