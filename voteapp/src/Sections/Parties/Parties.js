import React from 'react';
import Card from '../../Components/Card/Card';
import '../Parties/Parties.css';

function Parties(props){
    var id=props.match.params.id;

    return(
        <div  className='parties-section'>
            <h1>Parties</h1>
            <br></br>
            <br></br>
            
        
        <div className=" link ui three stackable cards">
        
        
        <Card id={id} partyLogo={<i  className='ui huge icon google'></i>} politicianName='Mr Sundar |' partyName='Google' ></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon apple'></i>} politicianName='Mr Cook |' partyName='Apple'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon facebook'></i>} politicianName='Mr Mark |' partyName='Facebook'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon amazon'></i>} politicianName='Mr Jeff |' partyName='Amazon'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon microsoft'></i>} politicianName='Mr Satya |' partyName='Microsoft'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon paypal'></i>} politicianName='Mr Dan |' partyName='Paypal'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon ethereum'></i>} politicianName='Mr Vitalik |' partyName='Ethereum'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon github'></i>} politicianName='Mr Nat |' partyName='Github'></Card>
        <Card id={id} partyLogo={<i  className='ui huge icon hand pointer'></i>} partyName='NOTA'></Card>

  
 
</div>
</div>


    )



};

export default Parties;