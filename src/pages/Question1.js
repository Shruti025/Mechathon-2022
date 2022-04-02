import { React, useState } from 'react';
import './Question1.css';

const Question1 = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [quantity, setQuantity] = useState('');
    const [orderCost, setOrderCost] = useState('');
    const [carryCost, setCarryCost] = useState('');
    const [interest, setInterest] = useState('');
    const [prodRun, setProdRun] = useState('');
    const EOQArray = [];
    const nameArray = [];
    const orderOrNot = [];

    function GetValue() {
        const holdingCost = Number(carryCost) + Number((interest * cost) / (100.0));
        const demand = (prodRun * prodRun * 2.0 * orderCost) / holdingCost;
        const qStar = Math.sqrt((2.0 * demand * orderCost) / holdingCost);
        EOQArray.push(qStar);
        nameArray.push(name);
        if (quantity >= demand) {
            orderOrNot.push(0);
        }
        else {
            orderOrNot.push(1);
        }
    }

    return (
        <div className='question-1'>
            <h1>Find the EOQ</h1>
            <form className='input-form'>
                <label
                    htmlFor="name">Name of product:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>

                <label
                    htmlFor="name">Cost of product:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                    />
                </label>

                <label htmlFor="name">Quantity:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={quantity}
                        onChange={(e) => { setQuantity(e.target.value) }}
                    />
                </label>

                <label
                    htmlFor="name">Ordering Cost:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={orderCost}
                        onChange={(e) => { setOrderCost(e.target.value) }}
                    />
                </label>

                <label
                    htmlFor="name">Carrying Cost:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={carryCost}
                        onChange={(e) => { setCarryCost(e.target.value) }}
                    />
                </label>

                <label
                    htmlFor="name">Interest rate per year:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={interest}
                        onChange={(e) => { setInterest(e.target.value) }}
                    />
                </label>

                <label
                    htmlFor="name">Number of production runs per year:
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={prodRun}
                        onChange={(e) => { setProdRun(e.target.value) }}
                    />
                </label>

                <button onClick={GetValue}>Submit</button>
            </form>
        </div>
    )
}

export default Question1;