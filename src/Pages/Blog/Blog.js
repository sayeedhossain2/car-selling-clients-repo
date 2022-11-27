import React from "react";

const Blog = () => {
  return (
    <div>
      {/* mamba start */}

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 my-5 text-4xl font-bold text-rose-700 leading-none text-center sm:text-5xl">
            Few Some Important Question and Answer
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              {/* no 1 */}
              <summary className="py-2 font-bold text-xl outline-none cursor-pointer focus:underline">
                What are the different ways to manage a state in a React
                application?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The Four Kinds of React State to Manage
                  <br />
                  1. Local state. <br />
                  2. Global state.
                  <br />
                  3. Server state.
                  <br />
                  4. URL state.
                  <br />
                </p>
                <br />

                <p>
                  Let's cover each of these in detail: <br />
                  <strong> Local (UI) state–</strong> Local state is data we
                  manage in one or another component. Local state is most often
                  managed in React using the useState hook. For example, local
                  state would be needed to show or hide a modal component or to
                  track values for a form component, such as form submission,
                  when the form is disabled and the values of a form’s inputs.
                  <br />
                  <strong> Global (UI)–</strong>
                  Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data
                  anywhere in our app, or in multiple components at least. A
                  common example of global state is authenticated user state. If
                  a user is logged into our app, it is necessary to get and
                  change their data throughout our application. Sometimes state
                  we think should be local might become global.
                  <br />
                  <strong>Server state –</strong> <br />
                  Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data
                  anywhere in our app, or in multiple components at least. A
                  common example of global state is authenticated user state. If
                  a user is logged into our app, it is necessary to get and
                  change their data throughout our application. Sometimes state
                  we think should be local might become global. Server state –
                  Data that comes from an external server that must be
                  integrated with our UI state. Server state is a simple
                  concept, but can be hard to manage alongside all of our local
                  and global UI state. There are several pieces of state that
                  must be managed every time you fetch or update data from an
                  external server, including loading and error state.
                  Fortunately there are tools such as SWR and React Query that
                  make managing server state much easier. <br />
                  <strong>URL state – </strong> <br />
                  Data that exists on our URLs, including the pathname and query
                  parameters. URL state is often missing as a category of state,
                  but it is an important one. In many cases, a lot of major
                  parts of our application rely upon accessing URL state. Try to
                  imagine building a blog without being able to fetch a post
                  based off of its slug or id that is located in the URL! There
                  are undoubtedly more pieces of state that we could identify,
                  but these are the major categories worth focusing on for most
                  applications you build.
                </p>
              </div>
            </details>
            <details>
              {/* no 2 */}
              <summary className="py-2 font-bold text-xl outline-none cursor-pointer focus:underline">
                How does prototypical inheritance work?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Every object with its methods and properties contains an
                  internal and hidden property known as [[Prototype]]. The
                  Prototypal Inheritance is a feature in javascript used to add
                  methods and properties in objects. It is a method by which an
                  object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object.setPrototypeOf. Nowadays, in modern language, it is
                  being set using
                </p>
              </div>
            </details>
            <details>
              {/* no 3 */}
              <summary className="py-2 font-bold text-xl outline-none cursor-pointer focus:underline">
                What is a unit test? Why should we write unit tests?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  <strong> What is a unit test?</strong> <br />
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
                </p>
                <p>
                  <strong>Why should we write unit tests?</strong>
                  <br />
                  To justify any effort in business, there must be a positive
                  impact on the bottom line. Here are a few benefits to writing
                  unit tests:
                  <br />
                  <br />* Unit tests save time and money. Usually, we tend to
                  test the happy path more than the unhappy path. If you release
                  such an app without thorough testing, you would have to keep
                  fixing issues raised by your potential users. The time to fix
                  these issues could’ve been used to build new features or
                  optimize the existing system. Bear in mind that fixing bugs
                  without running tests could also introduce new bugs into the
                  system. <br />
                  * Well-written unit tests act as documentation for your code.
                  Any developer can quickly look at your tests and know the
                  purpose of your functions. <br />
                  * It simplifies the debugging process. <br />
                  * Unit testing is an integral part of extreme programming.
                  Extreme programming is basically a
                  “test-everything-that-can-possibly-break” programming
                  strategy.
                  <br />
                  * Unit tests make code reuse easier. If you want to reuse
                  existing code in a new project, you can simply migrate both
                  the code and tests to your new project, then run your tests to
                  make sure you have the desired results. <br />
                  * Unit testing improves code coverage. A debatable topic is to
                  have 100% code coverage across your application. <br />* In
                  the testing pyramid, unit tests are faster than integration
                  and end-to-end. They are more assertive and return quick
                  feedback.
                </p>
              </div>
            </details>
            <details>
              {/* no 4*/}
              <summary className="py-2 font-bold text-xl outline-none cursor-pointer focus:underline">
                React vs. Angular vs. Vue?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <strong>React</strong> <br />
                <p>
                  React doesn’t enforce a specific project structure, and as you
                  can see from the official “Hello World” example below, you can
                  start using React with just a few lines of code. <br />
                  <br />
                  <strong>
                    ReactDOM.render(
                    <h1>Hello, world!</h1>
                    document.getElementById('root') );
                  </strong>
                  <br />
                  <br />
                  React can be used as a UI library to render elements, without
                  enforcing a specific project structure, and that’s why it’s
                  not strictly a framework. React Elements are the smallest
                  building blocks of React apps. They are more powerful than DOM
                  elements because the React DOM makes sure to update them
                  efficiently whenever something changes. Components are larger
                  building blocks that define independent and reusable pieces to
                  be used throughout the application. They accept inputs called
                  props and produce elements that are then displayed to the
                  user.
                </p>
                <br />
                <strong>Angular</strong> <br />
                <p>
                  AngularJS, the original framework, is an MVC
                  (Model-View-Controller)) framework. But in Angular 2, there’s
                  no strict association with MV*-patterns as it is also
                  component-based. Projects in Angular are structured into
                  Modules, Components, and Services. Each Angular application
                  has at least one root component and one root module. Each
                  component in Angular contains a Template, a Class that defines
                  the application logic, and MetaData (Decorators). The metadata
                  for a component tells Angular where to find the building
                  blocks that it needs to create and present its view.
                </p>{" "}
                <br />
                <strong>Vue</strong> <br />
                <p>
                  The Vue.js core library focuses on the View layer only. It’s
                  called a progressive framework because you can extend its
                  functionality with official and third-party packages, such as
                  Vue Router or Vuex, to turn it into an actual framework.
                  Although Vue is not strictly associated with the MVVM
                  (Model-View-ViewModel) pattern, its design was partly inspired
                  by it. With Vue, you’ll be working mostly on the ViewModel
                  layer, to make sure that the application data is processed in
                  a way that allows the framework to render an up-to-date View.
                  Vue’s templating syntax lets you create View components, and
                  it combines familiar HTML with special directives and
                  features. This templating syntax is preferred, even though raw
                  JavaScript and JSX are also supported.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* mamba end */}
    </div>
  );
};

export default Blog;
