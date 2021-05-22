import React,{useState,useEffect} from 'react';
import axios from 'axios'


function Finalverification(props) {

    const [name, setName] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [constituency, setConstituency] = useState('')
    const [age, setAge] = useState(0)
    let voterinfo=[]
    const [digsign, setDigsign] = useState('')
    const [pubKey, setPubKey] = useState('')

    useEffect(()=>{
        axios.get("/createdigsig",{
            params:{
                partyName:props.match.params.partyName
        }})
        .then(res=>{
            console.log(res.data)
            setDigsign(res.data.slice(0,100))
        })
        axios.get("/voterinfo",{
            params:{
                id:props.match.params.id
            }
        })
        .then((res)=>{
            console.log(res.data)
            voterinfo.push(res.data)
            setName(voterinfo[0].name)
            setState(voterinfo[0].details.state)
            setCity(voterinfo[0].details.city)
            setConstituency(voterinfo[0].details.constituency)
            setAge(voterinfo[0].details.age)
            setPubKey(voterinfo[0].public_key)

        })
    },[])
    


    const handleClick=(e)=>{
        axios.get('/createblock',{
          params:{
            id:props.match.params.id,
            partyName:props.match.params.partyname,
            publickey:pubKey
    
          }
          })
        .then(()=>{
          window.location ='/votings'
        })
        window.location ='/votings/'+props.match.params.id
        e.preventDefault();
        
    
    
      }

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
                                <td>{props.match.params.id}</td>

                                <td><h4>Voter Name</h4></td>
                                <td>{name}</td>
                                <td><h4>Voter Gender </h4></td>
                                <td>Male</td>
                                <td><h4>Voter Age </h4></td>
                                <td>{age}</td>
                                <td><h4>Voter Constituency ID</h4></td>
                                <td>{constituency}</td>
                                <td><h4>Date</h4></td>
                                <td>07/04/2021</td>

                            </tr>
                            <tr>
                                <td><h4>Candidate ID</h4></td>
                                <td>1258</td>
                                <td><h4>Candidate Name</h4></td>
                                <td>{props.match.params.politicianname}</td>
                                <td><h4>Candidate Gender</h4></td>
                                <td>Male</td>
                                <td><h4>Candidate Age</h4></td>
                                <td>50</td>
                                <td><h4>Candidate Party</h4></td>
                                <td>{props.match.params.partyname}</td>


                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <br></br>
            <h1>Please note your public key for future reference.</h1>
            <br></br>
            <h2><a href="#">{pubKey}</a></h2>
            <br></br>
            <hr></hr>
            <h1>Digital Signature Created</h1>
            <br></br>
            <h2>{digsign}</h2>

            <br></br>
<div class="ui inverted  message">
  
  <div style={{color:'red'}} class="header">
    <h2>Please check the above details very carefully !!!</h2>
  </div>
  <h3 style={{color:'red'}} >This action is Irreversible</h3>
  <button type='button' onClick={handleClick} className='ui inverted button primary huge' >Vote</button>
  </div>

            
        </div>
    )
}

export default Finalverification;