// import ColorGuessr from "./components/ColorGuessr";
// import Colors from "./components/colors"
// import CoordinatesGame from "./components/Coordinates";
// import Modal from "./components/Modal";

import { useEffect, useState } from "react"
import Animals from "./components/Animals"
import DessertCard, { DessertCardProp } from "./components/DessertCard"


function App() {

  const [desserts, setDesserts] = useState<DessertCardProp[]>([])
  useEffect(()=>{
    fetch("data.json").then(res => res.json()).then(fetchDessert => setDesserts(fetchDessert))
  },[desserts])

  // let li = []
  // for (let i = 0; i < 300; i++) {
  //   li.push(i);
    
  //}

  return (
    <>
      {/* <Animals/> */}
      <section className="desserts">
      { desserts.map(dessert => <DessertCard {...dessert}/>) }
      </section>
    {/* <ColorGuessr/> */}
    {/* <CoordinatesGame/> */}

    {/* <Modal/>
    <div className="maingrid">
      {li.map(idx => <Colors key = {idx}/>)}
      </div> */}
    </>
  )
}

export default App
