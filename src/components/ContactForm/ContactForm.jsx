import React, { Component } from 'react'
import styles from './contactForm.module.scss'
import Form from 'react-bootstrap/Form'
import { Button } from 'bootstrap';
import { Col } from 'react-bootstrap';

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
                <h4>Please say hello!</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col sm={12} md={6}>
                            <Form.Group controlId='firstNameGroup'>
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type='text' name='firstName' onChange={this.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Group controlId='lastNameGroup'>
                                <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type='text' name='lastName' onChange={this.handleChange} />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId='emailGroup'>
                        <Form.Label>Email:</Form.Label>
                            <Form.Control type='email' name='email' onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId='messageGroup'>
                        <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} type='text' name='msg' onChange={this.handleChange} />
                    </Form.Group>
                    <input type="submit" value="Submit" />
                </Form>
            </div>
        )
    }
}

export default ContactForm
