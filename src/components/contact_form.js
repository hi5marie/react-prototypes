import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                streetAddress: '',
                city: '',
                state: '',
                zipCode: ''
            }
        }
    }
    reset = ()=>{
        console.log('Clear form...');
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                streetAddress: '',
                city: '',
                state: '',
                zipCode: ''
            }
        });

    }
    handleInputChange = (event) => {
        const {name, value} = event.target;
        const {form} = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('HandleSubmit this state:', this.state.form);
        this.props.add(this.state.form);

        this.reset();
    }
    render(){
        const {firstName, lastName, phone, email, streetAddress, city, state, zipCode} = this.state.form;

        return (
             <form onSubmit={this.handleSubmit}>
                 <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                 <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                 <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange}/>
                 <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange}/>
                 <Field name="streetAddress" label="Street Address" type="text" value={streetAddress} onChange={this.handleInputChange}/>

                 <Field name="city" label="City" type="text" value={city} onChange={this.handleInputChange}/>
                 <Field name="state" label="State" type="text" value={state} onChange={this.handleInputChange}/>
                 <Field name="zipCode" label="Zip Code" type="text" value={zipCode} onChange={this.handleInputChange}/>


                 <button>Add Contact</button>

                 <button type="button" onClick={this.reset}>Clear Form</button>

             </form>
        )
    }
}

export default ContactForm;