import React from "react"
import { graphql } from "gatsby"

function Posts({ data }) {
  const post = data.allMdx.edges
  console.log(post)
  return (
    <div>
      {post.map(item => (
        <div>{item.node.frontmatter.title}</div>
      ))}
    </div>
  )
}

export default Posts

export const pageQuery = graphql`
  query AllPostQuery($skip: Int!, $limit: Int!) {
    allMdx(limit: $limit, skip: $skip) {
      edges {
        node {
          frontmatter {
            excerpt
            slug
            title
            date
          }
        }
      }
    }
  }
`
