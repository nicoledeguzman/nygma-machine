import firebase from './firebase.js';
import {useEffect, useState} from 'react';


const Advice = () => {

  const [displayedName, setDisplayedName] = useState("");
  const [displayedAdvice, setDisplayedAdvice] = useState("");

  // Pulls firebase data and displays it on page
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snap => {
      snap.forEach( (childSnap) => {
        const setOfInfo = childSnap.val();
        setDisplayedAdvice(setOfInfo.input);
        setDisplayedName(setOfInfo.name);
      } )
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className='advice'>
      <section className='advice-section'>
        <p>So, {displayedName}, you asked for some life-changing advice?</p>
        <p>Here's what we pulled for you...</p>
        <p class="advice-given">{displayedAdvice}</p>
        <button onClick={refreshPage}>
          refresh
        </button>
      </section>
    </div>
  );
};

export default Advice;
