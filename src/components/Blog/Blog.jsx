import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-10">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-center mb-4">
          FAQ
        </h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">
              What's the purpose of react router?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <strong>React Router</strong> is a standard library for routing in
              React. It enables the navigation among views of various components
              in a React Application, allows changing the browser URL, and keeps
              the UI in sync with the URL. Let us create a simple application to
              React to understand how the React Router works. The application
              will contain three components: home component, about a component,
              and contact component. We will use React Router to navigate
              between these components.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">
              How does Context API works?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <strong>React.createContext()</strong> is all you need. It returns
              a consumer and a provider. Provider is a component that as it's
              names suggests provides the state to its children. It will hold
              the "store" and be the parent of all the components that might
              need that store. Consumer as it so happens is a component that
              consumes and uses the state.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">
              What is Use Ref Hook in React JS?
            </summary>
            <p className=" px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <strong>The useRef hook</strong> is the new addition in React
              16.8. Before proceeding to this article there is a prerequisite to
              know about the ref in react. The useRef is a hook that allows to
              directly create a reference to the DOM element in the functional
              component.
              <strong className="block my-2 italic text-blue-600">
                Syntax: const refContainer = useRef(initialValue);
              </strong>{" "}
              The useRef returns a mutable ref object. This object has a
              property called .current. The value is persisted in the
              refContainer.current property. These values are accessed from the
              current proper of the returned object. The .current property could
              be initialised to the passed argument initialValue e.g.
              useRef(initialValue). The object can persist a value for a full
              lifetime of the component. Example: How to access the DOM using
              useRef hook.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
