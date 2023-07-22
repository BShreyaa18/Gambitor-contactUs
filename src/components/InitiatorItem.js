import React from "react";

function InitiatorItem(props)
{
    return(
        <div class="photo-card">
      <div className="profile"><img src={props.img} alt="Your Photo" /></div> 
    <div class="card-content">
      <h3>{props.name}</h3>
      </div>
  </div>
    );
}
export default InitiatorItem;