import React from "react";
import contact from "../../assets/contact.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 items-center md:px-12 lg:px-16 xl:px-32 ">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-400">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <Lottie
          className=" h-52 md:h-full"
          animationData={contact}
          loop={true}
        />
      </div>
      <form
        noValidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded border-2 border-gray-400 "
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded border-2 border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded border-2 border-gray-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-500 text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default About;
