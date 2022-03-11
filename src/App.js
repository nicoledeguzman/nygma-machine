import "./App.css";
import GetApiResponse from "./GetApiResponse.js";
import Advice from "./Advice.js";
import {useState} from "react";
import Modal from 'react-modal';

function App() {

  const [showComponent, setShowComponent] = useState("api");
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
      <div className="site-background">
        <div className="body-left">
          <header>
            <h1>Two Second Tip</h1>
            <p>All it takes is two seconds.</p>
          </header>
          <main>
            
            <Modal 
              isOpen={modalIsOpen}
              className="modal-box"
              overlayClassName="modal-overlay"
            >
              <h4>Modal title</h4>
              <p>Modal body</p>
              <button onClick={closeModal}>
                let's go
              </button>
            </Modal>

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
        </div>
        <div className="body-right">
          <footer>
              <p>Designed by Nicole de Guzman</p>
              <p>
                Created with Advice Slip API by Peter Del Mastro, Nate Yeow,
                Nicole de Guzman and Mandy Poon at <a href="https://junocollege.com/" rel="noopener noreferrer" target="_blank">Juno College</a>
              </p>

              {/* <p>Photo of Zoltan credits to: Hulki Okan Tabak and <a href="https://unsplash.com/photos/0EX0Q16ScvY" rel="noopener noreferrer" target="_blank">Unsplash</a> </p> */}
          </footer>
        </div>
      </div>
  );
}

export default App;
