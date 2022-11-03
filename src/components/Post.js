import React from 'react'

const Post = ({article}) => {

    const {title, date, id} = article.fields
    const theType = article.sys.contentType.sys.id
    console.log(article.fields);

    return (

      <div>

        <h2 className="title">{title}</h2>
        <p className="date">{id}</p>

        </div>

        )
    }
        
export default Post