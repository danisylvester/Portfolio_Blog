import React, { Component } from 'react';
import styles from './blogPost.module.scss';
import DOMPurify from "dompurify";
import Spinner from 'react-bootstrap/Spinner';
import { BlogComment } from '../BlogComment/BlogComment.jsx';
import { Card} from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip'

export default class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFetching: true,
            id: this.props.match.params.blogID,
            blog: {},
            isHidden: true, 
            hasLiked: false, 
        }
        this.handleShowAddComment= this.handleShowAddComment.bind(this);
        this.handleLike= this.handleLike.bind(this);
        this.handleCopyLink = this.handleCopyLink.bind(this);
        this.handleToUpdate = this.handleToUpdate.bind(this);
    }

    componentDidMount(){
        this.getBlogPost(this.state.id)
    }

    getBlogPost(blogId){
        try{
            fetch(`/api/blogposts/${blogId}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return res.json()})
            .then((data) => {
                console.log(`data: ${data}`)
                this.setState({
                    blog : {...data}
                });
                console.log(`blog: ${this.state.blog}`)
                this.setState({isFetching: false})
            });
        } catch(err){
            console.log(err);
        }
    }

    // Display comments
    displayComments(commentsArr){
        return(
            commentsArr.map((comment) => {
                return(
                    <Card key={comment._id} className={styles.commentCard}>
                        <Card.Body className={styles.cardBody}>
                            {comment.commentBody}
                        </Card.Body>
                        <Card.Footer className={styles.cardFooter}>
                            <div className={styles.cardUserName}>
                                - {comment.name}
                            </div>
                            <div className={styles.cardDate}>
                                {comment.commentDate}
                            </div>
                        </Card.Footer>
                    </Card>
                )
            })
        )
    }

    // Toggle BlogComment component when add comment button is pressed
    handleShowAddComment(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    // Handle update when a comment is submitted
    handleToUpdate(arg){
        this.setState({
            blog: {...arg},
            isHidden: true
        });
    }

    // Update likes count 
    handleLike(blogId){
        console.log(`start hasLiked status: ${this.state.hasLiked}`)
        const prevCount = this.state.blog.likes;
        const count = this.state.hasLiked ? parseInt(prevCount) - 1 : parseInt(prevCount) + 1;

        const data = {
            newCount : count
        }
        try {
            fetch(`/api/blogposts/${blogId}/likes`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    blog: {...data}
                })
            })
            this.setState({
                hasLiked: !this.state.hasLiked
            })
            console.log(`new hasLiked status: ${this.state.hasLiked}`)
        } catch (err) {
            console.log(err);
            throw err;
        }     
    }

    // Copy url to user's clipboard
    handleCopyLink(){
        const currentUrl = document.createElement('input'), text = window.location.href;
        document.body.appendChild(currentUrl);
        currentUrl.value = text;
        currentUrl.select();
        document.execCommand('Copy');
        document.body.removeChild(currentUrl);
    }
    
    render() {
        return (
            <div className={styles.bkg}>
            {
                this.state.isFetching ?
                    <div className={styles.spinnerWrapper}>
                        <Spinner animation="border" />
                    </div>
                :
                    <div className={styles.grid}>
                        <div className={styles.gridTitleContainer}>
                            <div className={styles.blogTitle} 
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(this.state.blog.title)
                                }}
                            ></div>
                        </div>
                        <div className={styles.gridBody}>
                            <div className={styles.blogBody}
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(this.state.blog.body)
                                }}
                            ></div>
                        </div>
                        <div className={styles.gridComments}>
                            <div className={styles.iconWrapper}>
                                <button onClick={()=>this.handleLike(this.state.id)} className={styles.likeBtn}><img className={styles.icon} src='/assets/like.png'></img>({this.state.blog.likes})</button>
                            </div>
                            <div className={styles.iconWrapper}>
                                <span><img className={styles.icon} src='/assets/comment.png'></img> ({this.state.blog.comments.length})</span>
                            </div>
                            <div className={styles.iconWrapper}>
                                <button onClick={this.handleCopyLink} className={styles.likeBtn}><img src='/assets/link.png' className={styles.icon}></img></button>
                            </div>
                            <div>
                                <button onClick={this.handleShowAddComment} className={styles.addCommentBtn}>+ Comment</button>
                            </div>

                            {!this.state.isHidden && <BlogComment blogId={this.state.id} handleToUpdate={this.handleToUpdate}></BlogComment>}
                            <div className={styles.commentsWrapper}>
                                {this.displayComments(this.state.blog.comments)}
                            </div> 
                        </div>
                    </div>
            }
            </div>
        )
    }
}

