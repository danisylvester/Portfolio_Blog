import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import styles from './blog.module.scss';
import DOMPurify from "dompurify";
import { Link } from 'react-router-dom';


export class Blog extends Component {
    constructor(props){
        super(props); 
        this.state = {
            isFetching: true,
            blogPosts: [],
            xOffset: 0
        };
        // Left and right arrow controls for slider
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

    // Handle Read Me click on blog post card
    handleReadMeClick(event){
        console.log(event.target.value);
    }

    // Formatting blogposts into cards
    displayBlogPosts(blogPosts){
        return (
            blogPosts.map((blog) => {
                let date = blog.date.substring(0,10).replace(/-/g, '/');
                let blogID = blog._id;
                return (
                    <div className={styles.sliderItem} key={blog._id}>
                    <Card key={blog._id} className={`${styles.blogCard}`}>
                        <Card.Body className={styles.cardBody}>
                            <Card.Title
                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.title)}}
                            >
                            </Card.Title>
                            <Card.Text 
                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.body)}}
                                className={styles.cardText}
                            >
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className={styles.cardFooter}>
                            <Link to={`/blogpost/${blogID}`}>
                                <button className={styles.readBtn}>
                                    Read Me
                                </button>
                            </Link>
                            <small className={`text-muted ${styles.date}`}>
                                {date}
                            </small>
                        </Card.Footer>
                    </Card>
                    </div>
                )
            })                   
        )
    }
    // Handle slider left arrow click
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
    // Handle slider right arrow click
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
                    <div className={styles.headerContainer}>
                        <div className={styles.titleWrapper}>
                            <h3 className={styles.purpleText}>Recent</h3>
                            <h3 className={styles.header}>BLOG POSTS</h3>
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.text}>Learn more about the new technologies I’m learning through my blog posts!</p>
                        </div>
                    </div>
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
                            <a onClick={this.handleLeftClick} className={styles.leftArrow} id='left'>
                                <img className={styles.arrow} src='/src/assets/leftArrow.png'></img>
                            </a>
                            <a onClick={this.handleRightClick} className={styles.rightArrow} id='right'>
                                <img className={styles.arrow} src='/src/assets/rightArrow.png'></img>
                            </a>
                        </div>
                    }
                </div>
            </>
        )
    }
}
