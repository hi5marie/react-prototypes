import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => {
    return Math.floor(Math.random() * 1000) + 1;
};


const Greeting = (user) =>{
    return <div className="container">
        <h1>Welcome {user.name}</h1>
        <h2 className="text-muted">Your lucky number is: {luckyNumber()}</h2>
    </div>
};
const user = {
    name: 'Marie',
    luckyNumber: luckyNumber()
};

export default Greeting;


ReactDOM.render(
    Greeting(user),
    document.getElementById('root')
);

