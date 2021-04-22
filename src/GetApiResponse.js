import axios from "axios";
import { useEffect, useState } from "react";
import Advice from "./Advice.js";
import randomAdvice from "./randomAdvice.js";
import { Link } from "react-router-dom";
import firebase from "./firebase.js";
import zoltan from "./assets/zoltan.png"
import askZoltanHeader from "./assets/askZoltanHeader.png"

const GetApiResponse = () => {
  // State for advice
  const [advice, setAdvice] = useState([]);

  // State for user input
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("");

  // State for name input
  const [userName, setUserName] = useState("");
  const [saveName, setSaveName] = useState("");

  // State for name and advice
  const [addedInput, setAddedInput] = useState([]);

  // Handler for keyword input
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handler for user name input
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Handler for submit button
  const submitChange = (e) => {
    e.preventDefault();
    setQuery(userInput);
    setSaveName(userName);
    setUserInput("");
    setUserName("");

    e.preventDefault();
    const dbRef = firebase.database().ref();
    const newUser = {
      name: userName,
      input: advice,
    };
    dbRef.push(newUser);
  };

  useEffect(() => {
    if (query !== "") {
      // API call to return advice for keyword input
      axios({
        url: `https://api.adviceslip.com/advice/search/${query}`,
        method: "GET",
        dataResponse: "json",
      }).then((res) => {
        const data = res.data;
        // Check if data has object of slips
        if (data.hasOwnProperty("slips")) {
          setAdvice(res.data.slips[0].advice);
        } else {
          // Second API call to return advice for words not in firs API data base
          randomAdvice(setAdvice);
        }
      });
    }
  }, [query]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push({
          key: key,
          name: data[key],
        });
      }
      setAddedInput(newState);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className='scalingContainer'>
      <div className='frontpageContainer'>
        <img className='zoltanHeader' src={askZoltanHeader} alt="Ask Zoltan" />
        </div>
      <div className='zoltanContainer'>
    
          <img className='zoltanImg' src={zoltan} alt="fortune teller image" />
     </div>
      </div>
      <div className='formContainer'>
      <div className='formElement'>
      <form onSubmit={submitChange}>
        <label htmlFor="newName">Please enter your name:</label>
        <input
          type="text"
          id="newName"
          onChange={handleNameChange}
          value={userName}
          required
        />

        <label htmlFor="newAdvice">
          I would like advice on... (Please, only one word, divination is an exact science)
        </label>
        <input
          type="text"
          id="newAdvice"
          onChange={handleChange}
          value={userInput}
          required
        />

            <Link to="/advice">
              <div className='buttonContainer'>
          <button className='formSubmit'type="submit" disabled={userName && userInput ? false : true}>
                  submit
          </button>
                
                </div>
        </Link>
      </form>

      <Advice answer={advice} name={saveName} />
      </div>
      </div>
      </div>
      
  );
};

export default GetApiResponse;
