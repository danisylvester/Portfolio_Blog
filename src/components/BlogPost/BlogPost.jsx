import React, { Component } from 'react';
import styles from './blogPost.module.scss';
import DOMPurify from "dompurify";
import Spinner from 'react-bootstrap/Spinner';
import { BlogComment } from '../BlogComment/BlogComment.jsx';


export default class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFetching: true,
            id: this.props.match.params.blogID,
            blog: {},
            isHidden: true
        }
        this.handleShowAddComment= this.handleShowAddComment.bind(this);
    }

    componentDidMount(){
        try{
            fetch(`http://localhost:5001/api/blogposts/${this.state.id}`,{
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

    handleShowAddComment(){
        this.setState({
            isHidden: !this.state.isHidden
        })
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
                            <div className={styles.commentCount}>
                                <p>Comments({this.state.blog.comments.length})</p>
                            </div>
                            <button onClick={this.handleShowAddComment} className={styles.addCommentBtn}>Add Comment</button>
                            {!this.state.isHidden && <BlogComment blogId={this.state.id}></BlogComment>} 
                        </div>
                    </div>
            }
            </div>
        )
    }
}

