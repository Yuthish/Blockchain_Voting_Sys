import React from 'react';


function Finalverification() {

    return (
        <div className='parties-section' >
            <h1>Final Verification</h1>
            <br></br>
            <div style={{ color: 'white' }} class=" ui inverted segment">
                <div className=" ui inverted form">
                    <h1>Voting Details</h1>
                    <table style={{ color: 'white', backgroundColor: 'black' }} class="ui celled column  table">

                        <tbody>
                            <tr>
                                <td><h4>Voter ID </h4></td>
                                <td>1234</td>

                                <td><h4>Voter Name</h4></td>
                                <td>Trump</td>
                                <td><h4>Voter Gender </h4></td>
                                <td>Male</td>
                                <td><h4>Voter Age </h4></td>
                                <td>70</td>
                                <td><h4>Voter Constituency ID</h4></td>
                                <td>TN129</td>
                                <td><h4>Date</h4></td>
                                <td>07/04/2021</td>

                            </tr>
                            <tr>
                                <td><h4>Candidate ID</h4></td>
                                <td>1258</td>
                                <td><h4>Candidate Name</h4></td>
                                <td>Sundar</td>
                                <td><h4>Candidate Gender</h4></td>
                                <td>Male</td>
                                <td><h4>Candidate Age</h4></td>
                                <td>50</td>
                                <td><h4>Candidate Party</h4></td>
                                <td>Google</td>


                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <br></br>
            <h1>Digital Signature Created</h1>
            <br></br>
            <h2>0ba0865fb3dedc1c8c31c2d66ed96a74d254374b3a1ca0b02e69e23b7450cb57</h2>
            <br></br>
<div class="ui inverted  message">
  
  <div style={{color:'red'}} class="header">
    <h2>Please check the above details very carefully !!!</h2>
  </div>
  <h3 style={{color:'red'}} >This action is Irreversible</h3>
  <button type='button' onClick={(e) => {
                e.preventDefault();
                window.confirm('Are you sure? This is the final chance');
                window.location = "/votings";
            }} className='ui inverted button primary huge' >Vote</button>
  </div>

            
        </div>
    )
}

export default Finalverification;