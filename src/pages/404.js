import React from "react"
import { graphql } from "gatsby"
import FeatureImage from "../components/featureImage"

function NotFound({ data }) {
  const featureImage = data.imageSharp.fixed
  return <FeatureImage fixed={featureImage} />
}

export default NotFound

export const notFoundQuery = graphql`
  query {
    imageSharp(fixed: { originalName: { eq: "sad-cat.jpeg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
