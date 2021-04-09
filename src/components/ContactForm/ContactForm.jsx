import React, { Component } from 'react'
import styles from './contactForm.module.scss'
import Form from 'react-bootstrap/Form'
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
        const _email = event.target.email.value;
        const _subject = `Website Message from ${event.target.firstName.value} ${event.target.lastName.value}`;
        const _msg = event.target.msg.value;
        
        try{
            
            var data = {
                email: _email,
                subject: _subject,
                msg : _msg
            }
        
            fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            alert(`${event.target.firstName.value}, thank you for your message! I'll be in contact with you soon.`);
            this.setState({ firstName: '', lastName: '', email: '', msg: ''}); //reset inputs to empty
        
        } catch(err) {
            throw err;
        }
    }

    render() {
        return (
            <div className={styles.formWrapper}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col sm={12} md={6}>
                            <Form.Group controlId='firstNameGroup'>
                                <Form.Label className={styles.label}>First Name:</Form.Label>
                                <Form.Control required className={styles.inputStyle} type='text' name='firstName' onChange={this.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Group controlId='lastNameGroup'>
                                <Form.Label className={styles.label}>Last Name:</Form.Label>
                                    <Form.Control required className={styles.inputStyle} type='text' name='lastName' onChange={this.handleChange} />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId='emailGroup'>
                        <Form.Label className={styles.label}>Email:</Form.Label>
                            <Form.Control required className={styles.inputStyle} type='email' name='email' onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId='messageGroup'>
                        <Form.Label className={styles.label}>Message:</Form.Label>
                            <Form.Control required className={styles.inputStyle} as="textarea" rows={3} type='text' name='msg' onChange={this.handleChange} />
                    </Form.Group>
                    <input type="submit" value="Submit" className={styles.submitBtn} />
                </Form>
            </div>
        )
    }
}

export default ContactForm
