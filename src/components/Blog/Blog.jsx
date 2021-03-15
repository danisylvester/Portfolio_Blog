import React, { Component } from 'react'
import { Card, CardColumns} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import styles from './blog.module.scss';
import DOMPurify from "dompurify";
import { Button } from 'bootstrap';
import { readyException } from 'jquery';



export class Blog extends Component {
    constructor(props){
        super(props); 
        this.state = {
            isFetching: true,
            blogPosts: [],
        };
    }

    // Fetching blog data and storing it in blogPosts state array
    componentDidMount(){
        try{
            fetch('http://localhost:5001/api/blogposts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return res.json()})
            .then((data) => {
                data.forEach(el => {
                    this.setState({
                        blogPosts: [...this.state.blogPosts, el]
                    });         
                });
                this.setState({isFetching: false})
            });
        } catch(err) {
            console.log(err);
        }
    }

    handleClick(event){
        console.log(event.target.value);
    }

    displayBlogPosts(blogPosts){
        return (
            blogPosts.map((blog) => {
                return (
                    <Card key={blog._id} className={styles.blogCard}>
                        <Card.Header>{blog.title}</Card.Header>
                        <Card.Body className={styles.cardBody}>
                            <Card.Text dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.body)}}></Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button value={blog._id} onClick={this.handleClick}>
                                Read Me
                            </button>
                            <small className='text-muted'>
                                {blog.date}
                            </small>
                        </Card.Footer>
                    </Card>
                )
            })                   
        )
    }

    render() {          
        return (
            <div className={styles.bkg}>
                {
                    this.state.isFetching ? 
                    <Spinner animation="border" />
                    :
                    <CardColumns>
                        {this.displayBlogPosts(this.state.blogPosts)}
                    </CardColumns>
                }
            </div>
        )
    }
}

export default Blog

