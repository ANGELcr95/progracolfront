// import React, { useEffect, useState } from 'react';
import useAuth from '../Auth/useAuth';
import '../styles/Tetris.css'

const Tetris = ({name, postionsWinner}) => {

    const auth = useAuth()

    
    // const[array, setArray] = useState([null])
    // const[tetris2, setTetris2] = useState([])

    // useEffect(()=> {
    //     setArray(postionsWinner)
    // },[postionsWinner])

    // const renderTetris = array.map((tetris, index) => {
    //     setTetris2(tetris)
        // tetris.map(position => {
        //     if(position){
        //         return <div style={{backgroundColor: 'blue'}}></div>
        //     } else {
        //         return <div style={{backgroundColor: 'grey'}}></div>
        //     }
        // })
    // } )

    return (
        <div className="Tetris" style={{backgroundColor: auth.ligth}}>
            <h3 style={{color: 'grey'}}>{name}</h3>
            <div className="Grid">
                {/* {renderTetris} */}
            </div>
        </div>
    );
};

export default Tetris;