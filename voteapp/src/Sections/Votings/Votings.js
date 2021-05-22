import React from 'react';
import Voting from '../../Components/Voting/Voting';

function Votings(props){

    return(
        <Voting id={props.match.params.id}></Voting>
    )
};

export default Votings;
