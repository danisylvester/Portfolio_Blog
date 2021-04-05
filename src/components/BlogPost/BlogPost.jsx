import React, { Component } from 'react';
import styles from './blogPost.module.scss';
import DOMPurify from "dompurify";


export default class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFetching: true,
            id: this.props.match.params.blogID,
            blog: {}
        }
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
    
    render() {
        return (
            <div className={styles.grid}>
                <div className={styles.gridTitle}>
                    <div className={styles.title} 
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
            </div>
        )
    }
}

