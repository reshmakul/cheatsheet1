import "../css/maiwand.module.css";

const Maiwand = () => {
  return (
    <div className="main" style={{ backgroundColor: "#506D7B" }}>
      <div className="div_container">
        <h1>React Router CheatSheet</h1>
      </div>
      <div className="full_container">
        <p>
          <h2>What is React Router?</h2>
        </p>
        <p className="mainparagraph">
          Changes the conventional routing , of rendering/fetching multiple html
          pages. But rendering the html content using react by conditionally
          checking the route of the page. The third party package that helps us
          do this is react-router To
          <b>
            <li>How to Install React Router</li>
          </b>
          <p className="mainparagraph">
            As previously stated, React makes use of an external library to
            handle routing; however, before we can implement routing with that
            library, we must first install it in our project, which is
            accomplished by running the following command in your terminal
            within your project directory:
          </p>
        </p>
        <img cls src="/install.png" alt="install router" />
        <p>
          After successfully installing the package, we can now set up and
          configure react-router within our project.
        </p>
      </div>
      <div className="full_container">
        <h3>How to Setup React Router</h3>
        <p className="mainparagraph">
          To configure React router, navigate to the <b>index.js </b> file,
          which is the root file, and import <b>BrowserRouter </b> from the
          <b>react-router-dom </b>
          package that we installed, wrapping it around our App component as
          follows:
        </p>
        <img src="/01.png" />
      </div>
      <div className="full_container">
        <h3>How to Configure Routes In React</h3>
        <p className="mainparagraph">
          We have now successfully installed and imported React router into our
          project; the next step is to use React router to implement routing.
          The first step is to configure all of our routes (that is, all the
          pages/components to which we want to navigate). We would first create
          those components, in our case three pages: the Home page, the About
          Page, and the Products Page. This GitHub repository contains the
          content for these pages. Once those pages are properly configured, we
          can now set up and configure our routes in the <b>App.js </b> file,
          which serves as the foundation for our React application:
        </p>
        <img src="/02.png" />
      </div>
      <div className="full_container">
        <p className="mainparagraph">
          We can see in the above code that we imported <strong>Routes </strong>
          and <b>Route </b> components from <b> react-router-dom </b> and then
          used them to declare the routes we want. All Routes are wrapped in the
          <b>Routes </b> tag, and these Routes have two major properties:
        </p>
        <li>
          <b>path: </b> As the name implies, this identifies the path we want
          users to take to reach the set component. When we set the <b>path </b>
          to <b> /about </b> , for example, when the user adds /<b>about </b> to
          the URL link, it navigates to that page.
        </li>
        <li>
          <b>element: </b> This contains the component that we want the set path
          to load. This is simple to understand, but remember to import any
          components we are using here, or else an error will occur.
        </li>
        <p>
          <b>Note:</b> We created a folder (Pages) to keep all page components
          separate from actual components.
        </p>
        <p>
          When we go to our browser and try to navigate via the URL, it will
          load whatever content we have on such pages.
        </p>
      </div>
      <div className="full_container">
        <h3>How to Access Configured Routes with Links</h3>
        <p className="mainparagraph">
          We just saw how we could manually access these routes via the URL, but
          that shouldn't be the case for our users. Let's now look at how we can
          create links within our application so that users can easily navigate,
          such as a navbar.
        </p>
        <p className="mainparagraph">
          This is accomplished with the Link tag, just as it is with the
          {/* <b> <p><a></p> </b>tag in HTML. We made a NavBar component and placed */}
          it at the top of our routes in the App.js file so that it appears
          regardless of the route:
        </p>
        <img src="/03.png" />
      </div>
      <div className="full_container">
        <p>Let’s now add Links to the NavBar this way:</p>
        <img src="/04.png" />
      </div>
      <div className="full_container">
        <p className="mainparagraph">
          In the preceding code, we first imported<b> Link </b> from
          <b>react-router-dom </b> and then added the to property based on the
          <b>path </b> we specified while configuring our routes. This is how
          simple it is to add links to our React application, allowing us to
          access configured routes.
        </p>
      </div>
      <div className="full_container">
        <h3>How to Implement Active Links</h3>
        <p className="mainparagraph">
          When adding links to a navbar, we want users to be able to identify
          the exact link they are currently navigating to by giving it a
          different color than other nav links, adding extra styles like
          underline, and so on.
        </p>
        <p className="mainparagraph">
          It is easier to handle and implement the active link feature in React
          by using the <b>NavLink </b>component rather than the<b> Link </b>
          component, which knows whether a user is currently navigated to by
          adding a <b>class </b> of <b>active </b> to such link.
        </p>
        <p className="mainparagraph">
          The <b> NavLink </b> component will now replace the<b> Link </b>
          component in the <b>NavBar </b>:
        </p>
        <img src="/05.png" />
      </div>
      <div className="full_container">
        <p className="mainparagraph">
          This alone does not make a significant difference in the user
          interface until we style the active class added, which can be done
          however you wish, but here is an example of the styling I used:
        </p>
        <img src="06.png" />
      </div>

      <div className="full_container">
        <h3>How to fix No Routes Found Error</h3>
        <p className="mainparagraph">
          When routing, a situation may cause a user to access an unconfigured
          route or a route that does not exist; when this occurs, React does not
          display anything on the screen except a warning with the message "No
          routes matched location."
        </p>
        <p className="mainparagraph">
          This can be fixed by configuring a new route to return a specific
          component when a user navigates to an unconfigured route as follows:
        </p>
        <img src="/07.png" />
      </div>
      <div className="full_container">
        <p className="mainparagraph">
          In the preceding code, we created a route with the path * to get all
          non-configured paths and assign them to the attached component.
        </p>
        <p className="mainparagraph">
          <b>Note: </b> We created a component called NoMatch.js, but you can
          name yours whatever you want to display 404, page not found, on the
          screen, so users know they are on the wrong page. We can also add a
          button that takes the user to another page or back, which leads us to
          programmatic navigation.
        </p>
      </div>
    </div>
  );
};

export default Maiwand;
