import React, { useState } from "react";

//export and calling function
export default function Dash() {
//    const editCard = document.querySelector(".edit-card")
//    function addForm () {
//     editCard.addEventListener("click", addForm  => {

//     })
//    }
   const [formState, setFormState] = useState({
    name: "",
    email: ""    
    })

  const handlechange = e => {
      const {name, value} = e.target
      setFormState(
      {
          ...formState, 
        [name]: value
      }    
      )
      console.log(formState)
    }
    return(
        //adding css into the js file instead of using a css file
        <section id="biz-profile">
            <p i-right-wrapper className="biz-card">
            *missing photo*
            </p>
            <form>
        <input 
            onChange={handlechange}
            name={"name"}
        
        />
         <input 
            onChange={handlechange}
            name={"email"}
        
        />

        
       
            </form>
          <p i-left-wrapper className="biz-temp">
       {/* Name:(first and last) */}
       pronouns:
       title:
       <br /> 
       {/* personal statement (tag-line) */}
       <br /> 
       email:
       phone:
       website:
       LinkedIn:
       Twitter:
       Instagram:
        </p>
        {/* <button onClick={addForm} className="edit-card">Edit Card</button> */}
        <button type="submit">Save Edit</button>
            </section>
    );
}
