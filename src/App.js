import { nullLiteral } from "@babel/types";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [computerChoice1, setComputerChoice1] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0)
  
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
    generateComputerChoice1();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

  };

const generateComputerChoice1 = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice1(randomChoice);

  };
  // let score = 0;

  // const setScore = (score) => {
  //   console.log(score)
  // }
  
  useEffect(() => { 
    {
    switch (userChoice + computerChoice + computerChoice1) {
      case "scissorpaperpaper":
      case "rockscissorsscissors":
      case "paperrockrock":
        setResult("YOU WIN!!!");
        setScore(score + 1)
        break;
      case "paperscissorsscissors":
      case "scissorsrockrock":
      case "rockpaperpapper":
        setResult("YOU LOSE");
        break;
      case "rockrockrock":
      case "paperpaperpaper":
      case "scissorsscissorsscissors":
        setResult("IT'S A Draw");
        break;
        setScore(score + 1)
    }
   }
  }, [computerChoice, userChoice, computerChoice1])

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h3>User Choice is: {userChoice}</h3>
      <h3>Computer Choice is:{computerChoice}</h3>
      <h3>Overlords Choice is:{computerChoice1}</h3>
      {/* <Botton onClick{()=> handleClick("Rock")}>Rock</Botton>
      <Botton onClick{()=> handleClick("Paper")}>Paper</Botton>
      <Botton onClick{()=> handleClick("scissors")}>Scissors</Botton> */}
      {choices.map((choice, index) => (
        <Button color="blue" key={index} onClick={() => handleClick(choice)}>
          {choice}
        </Button>
      ))}
      <h1>{result}</h1>
      <br />
      <p>SCORE</p>
      <h1>{score}</h1>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from "react";
// import { Button } from "semantic-ui-react";

// function App() {

// const [user, setUser] = useState(null)
// const [computer, setComputer] = useState(null)
// const [score, setScore] = useState(0)

// const choices = ["Rock", "Paper", "Scissors"]

// const getComp = () => {
//   let choice = choices(Math.floor(Math.random()*choices.length))
//   setComputer(choice);
//   console.log(computer)
//   console.log(user)
// }

// useEffect(() => {
//   getComputer();
// }, [user]);

//   return (
//     <div>
//       <h1>Rock Paper Scissors Game</h1>
//     <Button onClick={()=>setUser("Rock")}>Rock</Button>
//     <Button onClick={()=>setUser("Paper")}>Rock</Button>
//     <Button onClick={()=>setUser("Scissors")}>Rock</Button>
//     </div>
//   );
// }

// export default App;
