import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import styles from "./UseContextSteps.module.css";
import { useState } from "react";

function UseContextSteps() {
  const [message1, setMessage1] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [message3, setMessage3] = useState(false);
  const [message4, setMessage4] = useState(false);
  const [message5, setMessage5] = useState(false);
  const [message6, setMessage6] = useState(false);
  const [message7, setMessage7] = useState(false);
  const [message8, setMessage8] = useState(false);
  const [message9, setMessage9] = useState(false);
  const [message10, setMessage10] = useState(false);
  const [message11, setMessage11] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
      <h1 className={styles.main_title_steps}>
        11 STEPS TO GLORY! 🥚🐣🎯 <br />
        (more or less){" "}
        <p className={styles.main_subtitle_steps}>
          Click on each title <br />
          to have more detailed info 👍
        </p>
      </h1>

      <div>
        <h2
          className={styles.title_sections_steps}
          onClick={() => setMessage1(!message1)}
        >
          1️⃣ Create a new sibling folder of Components folder in src 🥚
        </h2>
        {message1 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT?
              <p>Seriously, it's just the first step, trust me!</p>
            </p>
            <p>
              WHERE? <p>In your folder project!</p>
            </p>
            <p>
              WHY? <p>To keep things organized!</p>{" "}
            </p>
          </div>
        ) : null}

        <p>Example: Usually it's called "context"</p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage2(!message2)}
          className={styles.title_sections_steps}
        >
          2️⃣ Create a file with this name convention: purposeOfTheFile +
          Context.jsx
        </h2>
        {message2 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT? <p>Simple file creation!</p>
            </p>
            <p>
              WHERE? <p>In your new context folder</p>
            </p>
            <p>
              WHY? <p>To keep things organized!</p>
            </p>
          </div>
        ) : null}

        <p>Example: ThemeContext.jsx</p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage3(!message3)}
          className={styles.title_sections_steps}
        >
          3️⃣ Import createContext from "react"
        </h2>
        {message3 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT?{" "}
              <p>It's a React function that allows the useContext to work!</p>
            </p>
            <p>
              WHERE? <p>In your new context file</p>
            </p>
            <p>
              WHY? <p>See what!</p>
            </p>
          </div>
        ) : null}
        <p>Example: import &#123;createContext&#125; from "react"</p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage4(!message4)}
          className={styles.title_sections_steps}
        >
          4️⃣ First export: Export it and store it in a variable
        </h2>
        {message4 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT? <p>It allows other components to use it</p>
            </p>
            <p>
              WHERE? <p>Still in your context file</p>
            </p>
            <p>
              WHY? <p>So you can continue!</p>
            </p>
          </div>
        ) : null}
        <p>Example: export const ThemeContext = createContext()</p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage5(!message5)}
          className={styles.title_sections_steps}
        >
          5️⃣ Second export: Always the same syntax for the component function
          <p>
            export default function nameOfFileProvider(props)&#123;&#125; 🐣{" "}
          </p>
        </h2>
        {message5 ? (
          <div className={styles.hidden_message}>
            <p>WHAT?</p>
            <p>
              WHERE? <p>In the same component</p>
            </p>
            <p>
              WHY? <p>Syntax</p>
            </p>
          </div>
        ) : null}
        <p>
          Example: export default function
          ThemeContextProvider(props)&#123;&#125;
        </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage6(!message6)}
          className={styles.title_sections_steps}
        >
          6️⃣ In the return of our component function we grab the variable where
          createContext is stored + .Provider and create these new tags{" "}
        </h2>
        <h2
          onClick={() => setMessage6(!message6)}
          className={styles.title_sections_steps}
        >
          6️⃣.1️⃣ We wrap the tags around &#123;props.children&#125;
        </h2>

        {message6 ? (
          <div className={styles.hidden_message}>
            <p>WHAT?</p>
            <p>
              WHERE? <p>In the same component</p>
            </p>
            <p>
              WHY? <p>Syntax</p>{" "}
            </p>
          </div>
        ) : null}
        <p>
          Example: &lt;ThemeContext.Provider&gt;&#123;props.children&#125;
          &lt;/ThemeContext.Provider&gt;
        </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage7(!message7)}
          className={styles.title_sections_steps}
        >
          7️⃣ Add value=&#123;&#123;&#125;&#125; in Provider Tag
        </h2>
        {message7 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT? <p>Add the value in the opening tag of the Provider</p>
            </p>
            <p>
              WHERE? <p>In the opening tag of the provider</p>
            </p>
            <p>
              WHY?
              <p>
                We have two sets of &#123;&#125; because the first pair tells it
                that it's JS and the second one that we are passing an Object
              </p>
            </p>
          </div>
        ) : null}
        <p>
          Example: &lt;ThemeContext.Provider value=&#123;&#123;&#125;&#125;&gt;
        </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage8(!message8)}
          className={styles.title_sections_steps}
        >
          8️⃣ Create a State and pass it inside the value
        </h2>
        {message8 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT? <p>State in the value</p>
            </p>
            <p>
              WHERE?{" "}
              <p>
                Inside the two sets of &#123;&#125; we can pass now whatever we
                want to make it available to other components
              </p>
            </p>
            <p>
              WHY?{" "}
              <p>
                Don't be greedy! Sharing is caring and here whatever we have
                been passing, we can use it in other components...not yet!
              </p>
            </p>
          </div>
        ) : null}
        <p>
          Example: const &#91;isLightTheme,setIsLightTheme&#93; = useState(true)
        </p>
        <p>
          &lt;ThemeContext.Provider
          value=&#123;&#123;isLightTheme&#125;&#125;&gt;props.children&#125;
          &lt;/ThemeContext.Provider&gt;
        </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage9(!message9)}
          className={styles.title_sections_steps}
        >
          9️⃣ Now it's time to make it available in the entire App
        </h2>
        <h2
          onClick={() => setMessage9(!message9)}
          className={styles.title_sections_steps}
        >
          9️⃣.1️⃣ In main.jsx we need to import the Context Provider
        </h2>
        <h2
          onClick={() => setMessage9(!message9)}
          className={styles.title_sections_steps}
        >
          9️⃣.2️⃣ Then wrap it around our App
        </h2>

        {message9 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT?{" "}
              <p>
                We can add as many context as we want/need here but they all
                need to be wrapping App. The order is not important but make
                sure that you importing them!
              </p>
            </p>
            <p>
              WHERE? <p>In main.jsx, TOP OF TREE!</p>
            </p>
            <p>
              WHY?{" "}
              <p>
                So It can be available in our whole App and we can use it in any
                components
              </p>
            </p>
          </div>
        ) : null}
        <p>
          Example:
          <p>import ThemeContextProvider from ". /.."</p>
          <p>
            render( &lt;ThemeContextProvider&gt;&lt;/App&gt;
            &lt;/ThemeContextProvider&gt;)
          </p>
        </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage10(!message10)}
          className={styles.title_sections_steps}
        >
          1️⃣0️⃣ Now the context can be used in any components! However, there's
          still a little set up (two imports actually) that needs to be done!
        </h2>
        <h2
          onClick={() => setMessage10(!message10)}
          className={styles.title_sections_steps}
        >
          1️⃣0️⃣.1️⃣ First IMPORT: In the component that we want to use it, we need
          to import the useContext Hook first
        </h2>
        <h2
          onClick={() => setMessage10(!message10)}
          className={styles.title_sections_steps}
        >
          1️⃣0️⃣.2️⃣ Second IMPORT: Still in the component, we need to import the
          context that we have previously created
        </h2>
        {message10 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT?<p></p>
            </p>
            <p>
              WHERE?{" "}
              <p>In the component where you want to use the context created</p>
            </p>
            <p>
              WHY?{" "}
              <p>
                we need to import is so we can use it, I mean...that's what you
                are here for, right?
              </p>
            </p>
          </div>
        ) : null}
        <p>
          Example:
          <p>import&#123;useContext&#125; from "react"</p>
          <p>import &#123;ThemeContext&#125; from ". /.."</p>
        </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
      <div>
        <h2
          onClick={() => setMessage11(!message11)}
          className={styles.title_sections_steps}
        >
          1️⃣1️⃣ FINAL STEP HUUUP HUUUP, now can use the context created! 🎯
        </h2>
        <p>There are 2 ways to do it, but personally I prefer this one!</p>
        <p>
          Create a variable and we destructure the context object straightaway
          so we can have direct access to the values passed!
        </p>
        <p>
          We no longer create a new object, but we are destructuring directly
          the one that useContext creates!
        </p>
        {message11 ? (
          <div className={styles.hidden_message}>
            <p>
              WHAT?{" "}
              <p>
                I know it's rude, it has been traveling for us this entire time
                and we don't even say hi...whatever, we need to use it right???
              </p>
            </p>
            <p>
              WHERE?{" "}
              <p>
                In the component where we want to use it we do the destructuring
              </p>
            </p>
            <p>
              WHY?{" "}
              <p>
                BECAUSE THAT'S THE GOAL OF THIS ENTIRE PROCESS! YOU MADE IT!
              </p>
            </p>
          </div>
        ) : null}

        <p>const &#123;isLightTheme&#125; = useContext(ThemeContext) </p>
        <Switch style={{ marginTop: "1rem" }}>GOT IT!</Switch>
      </div>
    </div>
  );
}

export default UseContextSteps;
