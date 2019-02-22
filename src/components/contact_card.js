import React from 'react';

export default props => {
    const {firstName, lastName, phone, email, streetAddress, city, state, zipCode} = props.contact;

    return  (
        <div className="card col-6 my-3">

            <div className="card my-3">
                <div className="card-header">{lastName}</div>
                <div className="card-block">
                    <h4 className="card-title">{firstName + ' ' + lastName}</h4>
                    <div className="card-text">
                        <p><b>Phone: </b>{phone}</p>
                        <p><b>Email: </b>{email}</p>
                        <p><b>Street Address: </b>{streetAddress}</p>

                        <p><b>City: </b>{city}</p>
                        <p><b>State: </b>{state}</p>
                        <p><b>Zip Code: </b>{zipCode}</p>


                    </div>
                </div>
            </div>

        </div>
    )
}