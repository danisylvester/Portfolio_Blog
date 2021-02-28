import React from 'react'
import './hello.scss';

export const Hello = () => {
    const helloOne = '\<Hello';
    const helloTwo = 'World';
    const helloThree = '/\>;';
    return (

        <div className="helloWrapper">
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
