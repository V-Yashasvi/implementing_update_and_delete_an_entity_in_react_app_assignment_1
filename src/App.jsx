import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);
  const [loading, setLoading]=useState(null)
  
  useEffect(()=>{
    fetch(`${API_URI}/4`).then((res)=>res.json()).then((data)=>{
      // console.log(data)
      setItem(data)
      setLoading(false)
    }).catch((err)=>console.log(err))
  },[])
  console.log(item)

  return (
    <div>
    <h1>Update Door</h1>
    {loading? <p>Loading....</p>:<UpdateItem item={item}/>}
    </div>
  );
}

export default App;
