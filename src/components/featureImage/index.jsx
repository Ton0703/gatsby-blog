import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function FeatureImage({ fixed }) {
    //fixed中一定不能把graphql上的复制下来
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "test.jpeg" } }) {
        id
        fixed {
            ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  console.log(data)
  return (
      <div>
          <Img fixed={fixed ? fixed : data.imageSharp.fixed} />
      </div>
  )
}

export default FeatureImage
