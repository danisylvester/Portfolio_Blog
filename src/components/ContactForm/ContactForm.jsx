import React, { Component } from 'react'
import styles from './contactForm.module.scss'

export class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            msg: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // prevents page refresh
        const subject = `Website Message from ${firstName} ${lastName}`;
        
        alert(`${state.firstName}, thank you for your message! I'll be in contact with you soon.`);

        try{
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state.email, subject, this.state.msg)
            });
            this.setState({ firstName: '', lastName: '', email: '', msg: ''}); //reset inputs to empty
        } catch(err) {
            throw err;
        }
    }

    render() {
        return (
            <div className={styles.formWrapper}>
                <h4>Send me a message</h4>
                <h4>hello {this.state.firstName}</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className={styles.inputField}>
                        <label>
                            First Name:
                        </label>
                            <input type='text' name='firstName' onChange={this.handleChange} />
                    </div>
                    <div className={styles.inputField}>
                        <label>
                            Last Name:
                        </label>
                            <input type='text' name='lastName' onChange={this.handleChange} />
                    </div>
                    <div className={styles.inputField}>
                        <label>
                            Email:
                        </label>
                            <input type='email' name='email' onChange={this.handleChange} />
                    </div>
                    <div className={styles.inputField}>
                        <label>
                            Message:
                        </label>
                            <input type='text' name='msg' onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ContactForm
