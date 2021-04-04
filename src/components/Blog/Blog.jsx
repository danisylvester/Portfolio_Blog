import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import styles from './blog.module.scss';
import DOMPurify from "dompurify";


export class Blog extends Component {
    constructor(props){
        super(props); 
        this.state = {
            isFetching: true,
            blogPosts: [],
            xOffset: 0
        };
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }
    
    // Fetching blog data and storing it in blogPosts state array
    componentDidMount(){
        try{
            fetch('http://localhost:5001/api/blogposts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
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

    // Handle Read Me click
    handleReadMeClick(event){
        console.log(event.target.value);
    }

    displayBlogPosts(blogPosts){
        return (
            blogPosts.map((blog) => {
                return (
                    <div className={styles.sliderItem} key={blog._id}>
                    <Card key={blog._id} className={`${styles.blogCard}`}>
                        <Card.Body className={styles.cardBody}>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text 
                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.body)}}
                                className={styles.cardText}
                                ></Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button value={blog._id} onClick={this.handleReadMeClick}>
                                Read Me
                            </button>
                            <small className='text-muted'>
                                {blog.date}
                            </small>
                        </Card.Footer>
                    </Card>
                    </div>
                )
            })                   
        )
    }
    handleLeftClick(){
        let slider = document.getElementById('slider');
        if(this.state.xOffset < 0){
            if(window.innerWidth < 768){
                this.state.xOffset += 100;
                slider.style.transform = `translateX(${this.state.xOffset}%)`;
            } else {
                this.state.xOffset += 50;
                slider.style.transform = `translateX(${this.state.xOffset}%)`;
            }
        }
    }
    handleRightClick(){
        let slider = document.getElementById('slider');
        if(window.innerWidth < 768){
            let max = (Math.floor(this.state.blogPosts.length) * -100) +100;
            console.log(`max: ${max}`)
            console.log(`x start: ${this.state.xOffset}`)
            if(this.state.xOffset > max){
                this.state.xOffset -= 100;
                slider.style.transform = `translateX(${this.state.xOffset}%)`;  
                console.log(`x new: ${this.state.xOffset}`)
            }
        }
        else{
            let maxMobile = Math.floor(this.state.blogPosts.length / 2) * -100;
            console.log(`max: ${maxMobile}`)
            console.log(`x start: ${this.state.xOffset}`)
            if(this.state.xOffset > maxMobile){
                this.state.xOffset -= 50;    
                slider.style.transform = `translateX(${this.state.xOffset}%)`;  
                console.log(`x new: ${this.state.xOffset}`)  
            } 
        }
    }

    render() { 
        return (
            <>
                <div className={styles.bkg}>
                    {
                        this.state.isFetching ? 
                        <div className={styles.spinnerWrapper}>
                            <Spinner animation="border" />
                        </div>
                        :
                        <div className={styles.sliderContainer}>
                            <div id='slider' className={styles.slider}>
                            {this.displayBlogPosts(this.state.blogPosts)}
                            </div>
                            <a onClick={this.handleLeftClick} className={styles.leftArrow} id='left'>LEFT</a>
                            <a onClick={this.handleRightClick} className={styles.rightArrow} id='right'>RIGHT</a>
                        </div>
                    }
                </div>
            </>
        )
    }
}
