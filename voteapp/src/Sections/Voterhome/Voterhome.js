import React, { useState, useEffect } from 'react';
import '../Voterhome/Voterhome.css';
import Navbar from '../../Components/Navbar/Navbar';
// import axios from 'axios';

// var id;
function Voterhome(props) {
    // const [name, setName] = useState('')
  
    // id=props.match.params.id;
    // var link="/verify/"+id
    
  
    // var drinfo = [];
    var greet = '';
    var customStyle = { backgroundColor: '#1F2833' }
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
        greet = 'Good Morning';
    }


    else if (currentTime >= 12 && currentTime <= 17) {
        greet = 'Good Afternoon';



    }

    else if (currentTime >= 17 && currentTime <= 24) {

        greet = 'Good Evening';


    }

    // useEffect(() => {
        

    //     axios.get('/drinfo',{
    //       params:{
    //         id:id
    //       }
    //     })
    //       .then(res => {
    //         console.log(res.data)
    //         drinfo = []
    //         drinfo.push(res.data)
    
    
    
    //         setName(drinfo[0].details.name)
            
    
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    
    //   }, [])

    return (

        <div>
        <Navbar bg={customStyle.backgroundColor}></Navbar>
            
            <div className='content-section voter' style={customStyle} >

                <h1>{greet}<br></br><h1>Mr.Trump</h1></h1>
                <h1> Constituency | Anna Nagar | TN129</h1>
                <h1> Voter ID | 1234 </h1>

                <br></br>
                {/* <Button link={link} name='New Prescription / Report'></Button> */}
                <button type='button' onClick={(e) => {
                                e.preventDefault();
                                window.location = "/parties";
                            }} className='ui inverted button primary huge' >Vote</button>


            </div>


        </div>
    )

};

// console.log(id)


export default Voterhome;
// export {id}
