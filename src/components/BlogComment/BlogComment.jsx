import React, { Component } from "react";
import styles from "./blogComment.module.scss";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

export class BlogComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.blogId,
      name: "",
      email: "",
      commentBody: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props.blogId);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault(); // prevents page refresh

    const _name = event.target.name.value;
    const _email = event.target.email.value;
    const _commentBody = event.target.comment.value;
    const date = Date.now();
    const _commentDate = new Date(date).toLocaleDateString();

    const comment = {
      name: _name,
      email: _email,
      commentBody: _commentBody,
      commentDate: _commentDate,
    };

    try {
      fetch(`http://localhost:5001/api/blogposts/${this.state.id}/comments`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      console.log("submitted comment");

      this.setState({ name: "", email: "", commentBody: "" }); //reset inputs to empty
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render() {
    return (
      <div className={styles.addCommentSection}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="nameGroup">
                <Form.Label className={styles.label}>Your Name:</Form.Label>
                <Form.Control
                  className={styles.inputStyle}
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group controlId="emailGroup">
                <Form.Label className={styles.label}>Email Address:</Form.Label>
                <Form.Control
                  className={styles.inputStyle}
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="commentGroup">
            <Form.Label className={styles.label}>Comment:</Form.Label>
            <Form.Control
              className={styles.commentInput}
              as="textarea"
              rows={2}
              type="text"
              name="comment"
              onChange={this.handleChange}
            />
          </Form.Group>
          <input
            type="submit"
            value="Post Comment"
            className={styles.submitBtn}
          />
        </Form>
      </div>
    );
  }
}
