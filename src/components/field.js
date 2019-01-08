import React from 'react';

export default props => {

    console.log('Field props:', props);

    return (

       <div className="form-group">

           <label>{props.label}</label>


           <input className="form-control">

           </input>


       </div>

    )

}
