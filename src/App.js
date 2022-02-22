import "./App.css";
import GetApiResponse from "./GetApiResponse.js";
import Advice from "./Advice.js";
import {useState} from "react";

function App() {

  const [showComponent, setShowComponent] = useState("api");

  return (
      <div className="site-background">
        <header>
          <div className='fp-container'>
            <h1>Ask Zoltan</h1>
          </div>
        </header>
        <main>
          
          {/* Show component depending on state string value */}

          {
            showComponent === "api"
            ?<GetApiResponse showAdvice={() => setShowComponent("advice")}/>
            : null
          }

          {
            showComponent === "advice"
            ?<Advice getAdvice={() => setShowComponent("api")}/>
            : null
          }

        </main>
        <footer>
            <p>Designed by Nicole de Guzman</p>
            <p>
              Created with Advice Slip API by Peter Del Mastro, Nate Yeow,
              Nicole de Guzman and Mandy Poon at <a href="https://junocollege.com/" rel="noopener noreferrer" target="_blank">Juno College</a>
            </p>

            {/* <p>Photo of Zoltan credits to: Hulki Okan Tabak and <a href="https://unsplash.com/photos/0EX0Q16ScvY" rel="noopener noreferrer" target="_blank">Unsplash</a> </p> */}
        </footer>
      </div>
  );
}

export default App;
