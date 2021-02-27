import React from 'react'
import './landing.scss';

export const Landing = () => {
    const helloOne = '\<Hello';
    const helloTwo = 'World';
    const helloThree = '/\>;';
    return (

        <div className="wrapper">
            <div className="gridOneHello">
                <div className="helloChild">
                    {helloOne} <br></br>
                    {helloTwo} <br></br>
                    {helloThree}
                </div>
            </div>
            <div className="gridTwoColor"></div>
        </div>
    )
}
