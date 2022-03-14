import React, { useState } from "react";

//export and calling function
export default function Dash() {
//    const editCard = document.querySelector(".edit-card")
//    function addForm () {
//     editCard.addEventListener("click", addForm  => {

//     })
//    }
   const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    pronouns: "",
    title: "",
    tagline: "",
    email: "",
    phone: "",
    website: "",
    LinkedIn: "",
    Twitter: "",
    Instagram: ""
    })

  const handlechange = e => {
      const {firstname, lastname, pronouns, title, tagline, email, phone, website, LinkedIn, Twitter, Instagram, value} = e.target
      setFormState(
      {
          ...formState, 
        [firstname]: value,
        ...formState, 
        [lastname]: value,
        ...formState, 
        [pronouns]: value,
        ...formState, 
        [title]: value,
        ...formState, 
        [tagline]: value,
        ...formState, 
        [email]: value,
        ...formState, 
        [phone]: value,
        ...formState, 
        [website]: value,
        ...formState, 
        [LinkedIn]: value,
        ...formState, 
        [Twitter]: value,
        ...formState, 
        [Instagram]: value

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
            name={"firstname"}
        />
         <input 
            onChange={handlechange}
            name={"lastname"}
        />
         <input 
            onChange={handlechange}
            name={"pronouns"}
        />
        <input 
            onChange={handlechange}
            name={"title"}
        />
        <input 
            onChange={handlechange}
            name={"tagline"}
        />
        <input 
            onChange={handlechange}
            name={"email"}
        />
         <input 
            onChange={handlechange}
            name={"phone"}
        />
         <input 
            onChange={handlechange}
            name={"website"}
        />
        <input 
            onChange={handlechange}
            name={"LinkedIn"}
        />
        <input 
            onChange={handlechange}
            name={"Twitter"}
        />
        <input 
            onChange={handlechange}
            name={"Instagram"}
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
