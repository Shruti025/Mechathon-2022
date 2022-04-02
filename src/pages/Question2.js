import React, { useState } from 'react';
import './Question1.css';

const Question2 = () => {
    const [distance, setDistance] = useState('');
    const [force1, setForce1] = useState('');
    const [force2, setForce2] = useState('');
    /*const pi = Math.PI;

    function GetReaction() {
        const Rd = (Number(force1 * 100) + Number(force2 * 100)) / 300.0;
        const Ra = Number(force1) + Number(force2);
        const Pab = Ra / Math.sin(pi / 3);
        const Pae = Pab * Math.cos(pi / 3);
        const Pcd = 360 / Math.sin(pi / 3);
        const Ped = Pcd * Math.cos(pi / 3);
    }*/

    return (
        <div>
            <form className='input-form'>
                <label
                    htmlFor="name">Name of product:</label>
                <input
                    type="name"
                    className="form-control"
                    id="name"
                    value={distance}
                    onChange={(e) => { setDistance(e.target.value) }}
                    required
                />

                <label
                    htmlFor="cost">Cost of product:</label>
                <input
                    type="name"
                    className="form-control"
                    id="cost"
                    value={force1}
                    onChange={(e) => { setForce1(e.target.value) }}
                    required
                />

                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="name"
                    className="form-control"
                    id="quantity"
                    value={force2}
                    onChange={(e) => { setForce2(e.target.value) }}
                    required
                />

                <button type="button">Submit</button>
            </form>
        </div>
    )
}

export default Question2;