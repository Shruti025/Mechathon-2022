import { React, useState, useEffect } from 'react';
import './Question1.css';

const Question1 = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [quantity, setQuantity] = useState('');
    const [orderCost, setOrderCost] = useState('');
    const [carryCost, setCarryCost] = useState('');
    const [interest, setInterest] = useState('');
    const [prodRun, setProdRun] = useState('');
    const [Temp, setTemp] = useState('');

    const [EOQArray, setEOQArray] = useState([]);
    const [nameArray, setnameArray] = useState([]);
    const [orderOrNot, setorderOrNot] = useState([]);

    function GetValue() {
        const holdingCost = Number(carryCost) + Number((interest * cost) / (100.0));
        const demand = (prodRun * prodRun * 2.0 * orderCost) / holdingCost;
        const qStar = Math.sqrt((2.0 * demand * orderCost) / holdingCost);

        EOQArray.push(qStar);
        nameArray.push(name);

        if (quantity >= demand) {
            orderOrNot.push('No');
        }
        else {
            orderOrNot.push('Yes');
        }
    }

    function print() {
        setnameArray(nameArray);
        setorderOrNot(orderOrNot);
        console.log(EOQArray);
        console.log(nameArray);
        console.log(orderOrNot);

        // alert(EOQArray);
    }

    useEffect(() => {

        setEOQArray(EOQArray);
        // const row = document.createElement("div");
        // EOQArray.forEach((value, key) => {
        //     // console.log("hello"))
        //     // return (
        //     row.appendChild({ value });

        //     // )
        // });
        // document.getElementById("output").appendChild(row);
        // console.log("useeffect");

    }, [EOQArray]);

    return (
        <div className='question-1'>
            <h1>Find the EOQ</h1>
            <form className='input-form'>
                <label
                    htmlFor="name">Name of product:</label>
                <input
                    type="name"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    required
                />

                <label
                    htmlFor="cost">Cost of product:</label>
                <input
                    type="name"
                    className="form-control"
                    id="cost"
                    value={cost}
                    onChange={(e) => { setCost(e.target.value) }}
                    required
                />

                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="name"
                    className="form-control"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => { setQuantity(e.target.value) }}
                    required
                />

                <label
                    htmlFor="order-cost">Ordering Cost: </label>
                <input
                    type="name"
                    className="form-control"
                    id="order-cost"
                    value={orderCost}
                    onChange={(e) => { setOrderCost(e.target.value) }}
                    required
                />

                <label
                    htmlFor="carry-cost">Carrying Cost: </label>
                <input
                    type="name"
                    className="form-control"
                    id="carry-cost"
                    value={carryCost}
                    onChange={(e) => { setCarryCost(e.target.value) }}
                    required
                />

                <label
                    htmlFor="interest">Interest rate per year: </label>
                <input
                    type="name"
                    className="form-control"
                    id="interest"
                    value={interest}
                    onChange={(e) => { setInterest(e.target.value) }}
                    required
                />

                <label
                    htmlFor="prod-runs">Number of production runs per year: </label>
                <input
                    type="name"
                    className="form-control"
                    id="prod-runs"
                    value={prodRun}
                    onChange={(e) => { setProdRun(e.target.value) }}
                    required
                />

                <button type="button" onClick={() => {
                    GetValue();
                    print();
                    setTemp(Temp + 1);
                }}
                >Submit{console.log(Temp)}</button>


            </form>

            <div className='results'>
                {EOQArray.map((value, key) => (
                    <div className='results-inner-div'>
                        <div>Name: {nameArray[key]} </div>
                        <div>EOQ: {Math.trunc(value)} </div>
                        <div>Order: {orderOrNot[key]}</div>
                    </div>
                )
                )}
            </div>

        </div>
    )
}

export default Question1;