import React, { Component } from 'react';
import styles from './blogPost.module.scss';

export default class BlogPost extends Component {
    constructor(props){
        super(props);
        const id = this.props.match.params.blogID;
        console.log(`passed id: ${id}`);
    }

    
    render() {
        return (
            <div className={styles.bkg}>
                <h1>Hello</h1>
            </div>
        )
    }
}

