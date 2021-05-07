import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Voting() {

    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get("/getblocksdata")
        .then(res=>{
            // console.log(res.data)
            setList(res.data)
           
        })
        
    },[])

    var blocklist=list.map(x=>{
        return(
        <tr>
        <td style={{ fontSize: '17px' }}>{x.hash}</td>
        <td style={{ fontSize: '17px' }}>{x.updatedAt}</td>
        <td style={{ fontSize: '17px' }}>{x.vote.slice(0,20)}</td>
        <td style={{ fontSize: '17px' }}>{x.size}</td>
        <td style={{ fontSize: '17px' }}>{x.partyName}</td>

        </tr>
        )

    })

    return (<div className='content-section' >
    {/* style={{ paddingBottom: '22.2%' }} */}
        <h1 className="heading" style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '80px' }}>Live Votings</h1>
        <div style={{ borderRadius: '18px', borderStyle: 'none' }}>
            <div style={{ width: '40%', alignContent: 'center', fontSize: '50px', paddingLeft: '12%' }}>
            

                <table style={{ fontSize: '15px', borderRadius: '15px' }} class="ui  inverted five celled column  table">
                    <thead>

                        <tr>
                            <th><h2>Public Key</h2></th>
                            <th><h2>Time</h2></th>
                            <th><h2>Voting Sig</h2></th>
                            <th><h2>Size</h2></th>
                            <th><h2>Party</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: '17px' }}>fcb9b7cba3ba0b63bb780438f5c67c32ab670c9b1a936fc6b3a440147f2b0b35</td>
                            <td style={{ fontSize: '17px' }}>2021-05-05 00:37</td>
                            <td style={{ fontSize: '17px' }}>1NcVbCiDYB3A5Fxf5JPftRxTtSzkmjBNem</td>
                            <td style={{ fontSize: '17px' }}>253 bytes</td>
                            <td style={{ fontSize: '17px' }}>Google</td>
                        </tr>
                        {blocklist}

                    </tbody>
                </table>
            </div>

        </div>
    </div>)


};
export default Voting;