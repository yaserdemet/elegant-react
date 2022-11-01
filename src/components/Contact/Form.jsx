import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormImage from "../../assets/images/contact.png";
const Form = () => {
  //   const currentRef = useRef();
  //   const navigate = useNavigate();
  //   const [values, setValues] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     textArea: "",
  //   });

  //   const handleChange = (e) => {
  //     setValues({ ...values, [e.target.name]: e.target.value });
  //   };
  //   const handleSubmit = (e) => {
  //     if (!values.name || !values.email || !values.subject || !textArea) {
  //       // toast.warn("Please fill all releated fields");
  //     }

  //     e.preventDefault();
  //     setValues({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       textArea: "",
  //     });

  //     //   toast.success("Your form has been send successfully");

  //     setTimeout(() => {
  //       navigate("/");
  //     }, 3000);
  //   };
  return (
    <aside className="flex justify-center items-center w-4/5 mx-auto mt-24 mb-24 gap-12 flex-wrap  ">
      <div className="grid lg:grid-cols-2 gap-24 md:grid-cols-1">
        <div className="grid-cols-1">
          <h5 className="font-medium text-4xl text-[#292929 ] text-center lg:text-left dark:text-white mb-4">
            Get In Touch
          </h5>

          <p className="text-left text-[#707070] mb-8 text-xl dark:text-white">
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim nullam pulvinar felis at metus.
          </p>

          <div>
            <img src={FormImage} alt="formImage" />
          </div>
        </div>

        <div className="border border-gray-200 formContent grid-col-1">
          <div className="w-[80%] mx-auto  mt-24 pb-24">
            <form>
              <div className="mb-12">
                <label
                  for="email"
                  class="block  text-sm font-medium text-[#707070] text-[22px] mb-6 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border transition duration-250 ease-out hover:ease-in border-gray-300 text-gray-900 text-sm rounded-lg 0 block w-full p-4 dark:bg-gray-700  dark:placeholder-gray-400  focus:outline-none "
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-12">
                <label
                  for="text"
                  className="block mb-6 text-sm   text-[#707070] text-[22px] dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-4 dark:bg-gray-700 dark:border-gray-600    focus:outline-none focus:bg-slate-100 transition duration-250 ease-out hover:ease-in"
                  required
                />
              </div>
              <div className="mb-6  ">
                <label
                  for="repeat-password"
                  className="block mb-6 text-sm font-medium text-[#707070] text-[22px] dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  type="password"
                  id="repeat-password"
                  rows="6"
                  cols="50"
                  className="shadow-sm bg-gray-50 border transition duration-250 ease-out hover:ease-in border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-mainColor  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Form;
