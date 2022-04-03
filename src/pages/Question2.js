import React, { useState } from 'react';
import './Question1.css';

const Question2 = () => {
    const [distance, setDistance] = useState('');
    const [force1, setForce1] = useState('');
    const [force2, setForce2] = useState('');
    const [temp, setTemp] = useState('');
    const [reactionA, setReactionA] = useState([]);
    const [reactionD, setReactionD] = useState([]);
    const [tension, setTension] = useState([]);
    const pi = Math.PI;

    function GetReaction() {
        const Rd = (Number(force1 * 100) + Number(force2 * 100)) / 300.0;
        const Ra = Number(force1) + Number(force2);
        const Pab = Ra / Math.sin(pi / 3);
        const Pae = Pab * Math.cos(pi / 3);
        const Pcd = 360 / Math.sin(pi / 3);
        const Ped = Pcd * Math.cos(pi / 3);
        reactionA.push(Ra);
        reactionD.push(Rd);
        tension.push(Ped);
        console.log(Pae);
    }

    function print() {
        setReactionA(reactionA);
        setReactionD(reactionD);
        setTension(tension);
    }

    return (
        <div className='question-2'>
            <h1>Find the reactions and tension</h1>
            <form className='input-form'>
                <label
                    htmlFor="name">Distance d:</label>
                <input
                    type="name"
                    className="form-control"
                    id="name"
                    value={distance}
                    onChange={(e) => { setDistance(e.target.value) }}
                    required
                />

                <label
                    htmlFor="cost">Value of Force 1:</label>
                <input
                    type="name"
                    className="form-control"
                    id="cost"
                    value={force1}
                    onChange={(e) => { setForce1(e.target.value) }}
                    required
                />

                <label htmlFor="quantity">Value of Force 2: </label>
                <input
                    type="name"
                    className="form-control"
                    id="quantity"
                    value={force2}
                    onChange={(e) => { setForce2(e.target.value) }}
                    required
                />

                <button type="button" onClick={() => {
                    GetReaction();
                    print();
                    setTemp(temp + 1);
                }}>Submit</button>
            </form>

            <div className='results'>
                {reactionA.map((value, key) => (
                    <div className='results-inner-div'>
                        <div>Reaction at A: {Math.trunc(value)} </div>
                        <div>Reaction at D: {Math.trunc(reactionD[key])} </div>
                        <div>Tension in ED: {Math.trunc(tension[key])}</div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Question2;