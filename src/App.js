import './App.css';
import Top from './components/Top/Top';
import CardDisplay from './components/CardDisplay/CardDisplay';

function App() {
  const cards = [
    {name: "Supervisor", 
    description: "Monitors activity to identify project rootblocks.",
    img: "icon-supervisor.svg",
    alt: "icon-supervisor"
},
    {name: "TeamBuilder", 
    description: "Your challenge is to build out this feature section and get it looking close to the design as possible.",
    img: "icon-team-builder.svg",
    alt: "icon-team-builder"
},
    {name: "Karma", 
    description: "Your challenge is to build out this feature section and get it.",
    img: "icon-karma.svg",
    alt: "icon-karma"
},
    {name: "Calculator", 
    description: "Your challenge is to build out this feature section and get it looking.",
    img: "icon-calculator.svg",
    alt: "icon-calculator"
},

]

  return (
   <>
      <Top />
      <CardDisplay 
        cards={cards}
      />
   </>
  );
}

export default App;
