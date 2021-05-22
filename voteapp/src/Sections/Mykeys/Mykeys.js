import React,{useState,useEffect} from 'react';
import '../Mykeys/Mykeys.css';
import axios from 'axios'
function Mykeys(props) {
    const [pvtKey, setPvtKey] = useState('')
    const [pubKey, setPubKey] = useState('')

    useEffect(() => {
        axios.get("/voterinfo",{
            params:{
                id:props.match.params.id
            }
        })
        .then(res=>{
            setPubKey(res.data.public_key)
            setPvtKey(res.data.private_key.slice(25,250))

        })
        
        
    }, [])


    return (
    
    
    <div className='mykeys-section' >
        <h1>My Keys</h1>
        <br></br>
        <div style={{ color: 'white' }} class=" ui inverted segment">
     
            <h1  class="ui header">Public Key</h1>
            <h2>{pubKey}</h2>
            
            <div class="ui hidden divider"></div>
            <h1 class="ui header">Private Key </h1>
            <h2>{pvtKey}</h2>
            <br></br>
            
        </div>

    </div>)


};

export default Mykeys;