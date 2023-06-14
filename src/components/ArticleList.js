import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    return (
        <main>
            {
                posts.map(post => {
                    return (
                        <Article key={post.title} tite={post.title} date={post.date} preview={post.preview}/>
                    )
                })
            }
        </main>
    )
}

export default ArticleList;