import React from "react";

//export and calling function
export default function Dash() {
   const editCard = document.querySelector(".edit-card")
   function addForm () {
    editCard.addEventListener("click", addForm  => {
        
    })
   }
  
    return(
        //adding css into the js file instead of using a css file
        <section id="biz-profile">
            <p i-right-wrapper className="biz-card">
            *missing photo*
            </p>
            <form>

            </form>
          <p i-left-wrapper className="biz-temp">
       Name:
       pronouns:
       title:
       <br> </br>
       personal statement 
       <br> </br>
       email:
       phone:
       website:
       LinkedIn:
       Twitter:
       Instagram:
        </p>
        <button onClick={addForm} className="edit-card">Edit Card</button>
        <button type="submit">Save Edit</button>
            </section>
    );
}
