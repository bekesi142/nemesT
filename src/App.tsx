import ColorGuessr from "./components/ColorGuessr";
import Colors from "./components/colors"
import CoordinatesGame from "./components/Coordinates";
import Modal from "./components/Modal";


function App() {
  let li = []
  for (let i = 0; i < 300; i++) {
    li.push(i);
    
  }

  return (
    <>

    {/* <ColorGuessr/> */}
    <CoordinatesGame/>

    {/* <Modal/>
    <div className="maingrid">
      {li.map(idx => <Colors key = {idx}/>)}
      </div> */}
    </>
  )
}

export default App
