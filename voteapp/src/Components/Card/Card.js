import React from 'react';
import '../Card/Card.css';

function Card(props){

    return(
//         <div className="inverted raised card">
//   <div className="image">
//     <img src="/images/avatar2/large/matthew.png" />
//   </div>
//   <div className="content">
//     <div className="header">Mr.JAY</div>
//     <div className="meta">
//       <a>AAABBB</a>
//     </div>
//   </div>
//   <div className="extra content">
//     <span className="right floated">
//       <button className='ui inverted button primary'>Vote</button>
//     </span>
    
//   </div>
// </div>
<div className=" card">

  <div style={{paddingTop:'2%'}} className="image ">
  {props.partyLogo}
  </div>
  <div className="content">
  
    <h1 className="header" style={{color:'white'}}>{props.politicianName} {props.partyName}</h1>
    <span className="right floated">
      <button className='ui inverted button primary' type='button' onClick={(e) => {
                                e.preventDefault();
                                window.location ='/'+props.partyName }} >Vote</button>
    </span>
  </div>
</div>
    )
};

export default Card;
