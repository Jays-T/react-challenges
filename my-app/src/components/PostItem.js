import React from 'react'
import css from './css/Content.module.css';

const PostItem = (props) => {

    return (
        props.savedPosts.map(post => {

            const {name, title, description, image} = post;
            return(
                <div key={title} className = {css.SearchItem}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt={title}></img>
                    <p>{description}</p>
                </div>
            )
        })
    )
}

export default PostItem