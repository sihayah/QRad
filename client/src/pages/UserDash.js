import React from "react";

//export and calling function
export default function Dash() {
    return(
        //adding css into the js file instead of using a css file
        <section id="biz-profile">
            <p i-right-wrapper className="biz-card">
            *missing photo*
            </p>
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
        <button>Edit Card</button>
        <button>Save Edit</button>
            </section>
        
    );
}
