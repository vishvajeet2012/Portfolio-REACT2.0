import React, { useEffect, useRef } from "react";
import "./Title.css";

function Title() {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.getElementsByClassName("word");
    let wordArray = [];
    let currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      let cw = wordArray[currentWord];
      let nw =
        currentWord === words.length - 1
          ? wordArray[0]
          : wordArray[currentWord + 1];
      for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      for (let i = 0; i < nw.length; i++) {
        nw[i].className = "letter behind";
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(() => {
        cw[i].className = "letter out";
      }, i * 80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(() => {
        nw[i].className = "letter in";
      }, 340 + i * 80);
    }

    function splitLetters(word) {
      const content = word.textContent; // Use textContent instead of innerHTML
      word.innerHTML = ""; // Clear the word element's content
      const letters = [];
      for (let i = 0; i < content.length; i++) {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.textContent = content.charAt(i); // Properly append the text inside the span
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArray.push(letters);
    }

    const interval = setInterval(changeWord, 4000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="text w-full" ref={textRef}>
      <p className="relative w-full">
        <span className="word ">Mern &nbsp; Stack</span>
        <span className="word ">Frontend &nbsp; Developer </span>
        <span className="word ">Web &nbsp; Designer</span>
        <span className="word ">Ui &nbsp; & &nbsp; Ux &nbsp; Designer</span>
      </p>
    </div>
  );
}

export default Title;
