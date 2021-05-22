import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Voting(props) {
    console.log(props.id)
    var str

    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get("/voterinfo",{
            params:{
                id:props.id
            }
        })
        .then(res=>{
            console.log(res.data)
        })
        axios.get("/getblocksdata")
        .then(res=>{
            // console.log(res.data)
            setList(res.data)
           
        })
        
    },[])

    var blocklist=list.map(x=>{
        return(
        <tr>
        <td style={{ fontSize: '17px' }}><a>{x.publickey}</a></td>
        <td style={{ fontSize: '17px' }}>{x.updatedAt}</td>
        <td style={{ fontSize: '17px' }}><a>{x.vote.slice(0,35)}...</a></td>
        <td style={{ fontSize: '17px' }}>{x.size}</td>
        <td style={{ fontSize: '17px' }}>{x.party}</td>

        </tr>
        )

    })

    return (<div className='content-section' >
    {/* style={{ paddingBottom: '22.2%' }} */}
        <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>Live Votings</h1>
        <div style={{ borderRadius: '18px', borderStyle: 'none' }}>
            <div style={{ width: '10%', alignContent: 'center', fontSize: '50px',paddingLeft:"5%" }}>
            

                <table style={{ fontSize: '15px', borderRadius: '15px' }} class="ui  inverted five celled column  table">
                    <thead>

                        <tr>
                            <th><h2>Public Key</h2></th>
                            <th><h2>Time</h2></th>
                            <th><h2>Voting Sig</h2></th>
                            <th><h2>Size(bytes)</h2></th>
                            <th><h2>Party</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {blocklist}

                    </tbody>
                </table>
            </div>

        </div>
    </div>)


};
export default Voting;