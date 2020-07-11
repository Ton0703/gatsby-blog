import React from "react"
import { graphql, Link } from "gatsby"

function Posts({ pageContext, data }) {
  const post = data.allMdx.edges
  const { numPages, currentPage } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prePage = currentPage - 1 === 1 ? '/' : `/page=${currentPage - 1}`
  const nextPage = `/page=${currentPage + 1}`

  
  return (
    <div>
      {post.map(item => (
        <div>{item.node.frontmatter.title}</div>
      ))}
       <div className='pagination'>
           <div style={{pointerEvents: isFirst ? 'none' : 'auto'}}>
                 <Link to={prePage} style={{color: isFirst ? 'gray' : '#000', textDecoration: 'none'}}>
                     上一页
                 </Link>
           </div>
           <div style={{pointerEvents: isLast ? 'none' : 'auto'}}>
             <Link to={nextPage} style={{color: isLast ? 'gray' : '#000', textDecoration: 'none'}}>
                 下一页
             </Link>
           </div>
       </div>
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
