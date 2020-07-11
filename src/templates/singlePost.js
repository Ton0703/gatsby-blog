import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import FeatureImage from '../components/featureImage'
import './markdown.css'

function singlePost({data}) {
    const post = data.mdx.frontmatter
    const {date, excerpt, slug, title} = post
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
    return (
        <div>
            {title}
            {excerpt}
            {slug}
            {date}
            <div className='markdown-body'>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            </div>

        </div>
    )
}

export default singlePost

export const PageQuery = graphql`
query MyQuery($id: String!) {
    mdx(id: {eq: $id}) {
        frontmatter {
      date
      excerpt
      slug
      title
      featureImage {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    body
  }
}
`