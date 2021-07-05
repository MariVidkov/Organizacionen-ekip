import { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [NameOfStudent, setstudentName] = useState("");
  const [ClassOfStudent, setclassstudent] = useState("");
  const [NumberOfStudent, setnumberstudent] = useState(0);
  const [SizeOfShirt, setsizestudent] = useState("");

  const [NameList, setNamelist] = useState([])

  const [newName, setnewName] = useState("");

  useEffect(()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
      setNamelist(response.data)
    })
  }, [])

  const register = () => {
    Axios.post("http://localhost:3001/insert", {
      NameOfStudent: NameOfStudent,
      ClassOfStudent: ClassOfStudent,
      NumberOfStudent: NumberOfStudent,
      SizeOfShirt: SizeOfShirt,
     });
  };

  const UpdateName = (id) => {
    Axios.put("http://localhost:3001/update", {id: id, newName:newName })
  }

  const DeleteName = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className="App">
      <div className="LoginSection">
  <div className="title"><p>Add a new User</p></div>


<div className="box">
<input type="text" name="name" autocomplete="off" required onChange={(event) => {setstudentName(event.target.value)}}></input>
<label for="name" className="label-name">
  <span className="content-name">Name</span>
</label>
</div>

<div className="box-dropdown">

<div className="dropdown">
<button className="btn-dropdown" id ="menuToggle" onClick={() => setActive(!active)}>
  {active ? "Your class - Close the menu" : "Choose your Class"}
</button>
<div className={active ? "menu active" : "menu"}>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "8a")}}>8a</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "8b")}}>8b</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "8v")}}>8v</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "8g")}}>8g</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "9a")}}>9a</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "9b")}}>9b</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "9v")}}>9v</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "9g")}}>9g</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "10a")}}>10a</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "10b")}}>10b</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "10v")}}>10v</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "10g")}}>10g</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "11a")}}>11a</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "11b")}}>11b</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "11v")}}>11v</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "11g")}}>11g</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "12a")}}>12a</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "12b")}}>12b</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "12v")}}>12v</button>
<button className="btn" onClick={(event) => {setclassstudent(event.target.value= "12g")}}>12g</button>
</div>
</div>


</div>


<div className="box">
<input type="number" name="name" autocomplete="off" required onChange={(event) => {setnumberstudent(event.target.value)}}></input>
<label for="name" className="label-name">
  <span className="content-name">Your Number in class</span>
</label>
</div>

<div className="box-dropdown">

<div className="dropdown">
<button className="btn-dropdown" id ="menuToggle" onClick={() => setActive2(!active2)}>
  {active2 ? "Your Size - Close the menu" : "Choose your Size of T-shirt"}
</button>
<div className={active2 ? "menu active" : "menu"}>
<button className="btn" onClick={(event) => {setsizestudent(event.target.value= "XS")}}>XS</button>
<button className="btn" onClick={(event) => {setsizestudent(event.target.value= "S")}}>S</button>
<button className="btn" onClick={(event) => {setsizestudent(event.target.value= "M")}}>M</button>
<button className="btn" onClick={(event) => {setsizestudent(event.target.value= "L")}}>L</button>
<button className="btn" onClick={(event) => {setsizestudent(event.target.value= "XL")}}>XL</button>
<button className="btn" onClick={(event) => {setsizestudent(event.target.value= "XXL")}}>XXL</button>

</div>
</div>


</div>

<button className="btn-register" onClick={register}> 
<p> Register </p>
</button>
</div>
<div className="title"><p>Users in the list</p></div>

<div className="tableInformation"> </div>
{NameList.map((val, key) =>{
  return(

   <div className="RowOfTable" key={key}> <p className="ElementOfRow">{val.NameOfStudent}</p> 
               <p className="ElementOfRow"> {val.ClassOfStudent}</p>
               <p className="ElementOfRow"> {val.NumberOfStudent}</p>
               <p className="ElementOfRow"> {val.SizeOfShirt}</p>
               <input className="NewNameInput" type="text" placeholder = "Change your Name.." onChange={(event) => {setnewName(event.target.value)}}></input>
               <button className="ButtonTable UpdateBtn" onClick={()=> UpdateName(val._id)}> <p>Update</p></button>
               <button className="ButtonTable DeleteBtn" onClick={()=> DeleteName(val._id)}><p>Delete</p></button>
   </div>
   );
})}
    </div>
  );
}

export default App;
