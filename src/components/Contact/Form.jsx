import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormImage from "../../assets/images/contact.png";
const Form = () => {
  const currentRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    currentRef.current.focus();
  }, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    textArea: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (!values.name || !values.email || !values.subject || !values.textArea) {
      // alert("Please fill all related area");
    }

    e.preventDefault();
    setValues({
      name: "",
      email: "",
      subject: "",
      textArea: "",
    });

    //   toast.success("Your form has been send successfully");

    setTimeout(() => {
      navigate("/");
    }, 1024);
  };
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
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/ddemety@hotmail.com"
              method="POST"
              target="_blank"
            >
              <div className="mb-12">
                <label
                  htmlFor="text"
                  className="block mb-6 text-sm   text-[#707070] text-[22px] dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  ref={currentRef}
                  type="text"
                  id="text"
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-4 dark:bg-gray-700 dark:border-gray-600    focus:outline-none focus:bg-slate-100 transition duration-250 ease-out hover:ease-in"
                  // required
                />
              </div>

              <div className="mb-12">
                <label
                  htmlFor="email"
                  class="block  text-sm font-medium text-[#707070] text-[22px] mb-6 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  class="shadow-sm bg-gray-50 border transition duration-250 ease-out hover:ease-in border-gray-300 text-gray-900 text-sm rounded-lg 0 block w-full p-4 dark:bg-gray-700  dark:placeholder-gray-400  focus:outline-none "
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-12">
                <label
                  htmlFor="text"
                  className="block mb-6 text-sm   text-[#707070] text-[22px] dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  id="text"
                  name="subject"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-4 dark:bg-gray-700 dark:border-gray-600    focus:outline-none focus:bg-slate-100 transition duration-250 ease-out hover:ease-in"
                  required
                />
              </div>
              <div className="mb-6  ">
                <label
                  htmlFor="message"
                  className="block mb-6 text-sm font-medium text-[#707070] text-[22px] dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  onChange={handleChange}
                  type="text"
                  id="message"
                  name="textArea"
                  value={values.textArea}
                  rows="6"
                  cols="50"
                  className="shadow-sm bg-gray-50 border transition duration-250 ease-out hover:ease-in border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white  bg-mainColor border    font-medium rounded-lg text-sm px-5 py-4 text-center transition duration-300 ease-out hover:ease-in hover:bg-white hover:text-mainColor hover:border-mainColor"
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
