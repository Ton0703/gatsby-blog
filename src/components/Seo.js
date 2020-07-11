import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Seo({ description, keywords, title, image, url, author }) {
  return (
      <StaticQuery
         query={detailQuery}
         render={data => {
             const metaDescription = description || data.site.siteMetadata.description
             const metaTitle = title || data.site.siteMetadata.title
             const metaAuthor = author  || data.site.siteMetadata.author
             const metaUrl = url || data.site.siteMetadata.url
             const metaImage = image || data.site.siteMetadata.image
             const metaKaywords = keywords || ["gatsby blog", 'gatsby-mdx-blog']

             return (
                 <Helmet
                   title={metaTitle}
                   meta={[
                       {
                           name:`description`,
                           content: metaDescription
                       },
                       {
                        name:`og:title`,
                        content: metaTitle
                    },
                    {
                        name:`og:description`,
                        content: metaDescription
                    },
                    {
                        name:`og:type`,
                        content: `website`
                    },
                    {
                        name:`og:image`,
                        content: metaImage
                    },
                    {
                        name:`og:url`,
                        content: metaUrl
                    },
                    {
                        name:`twitter:card`,
                        content: `summary_large_image`
                    },
                    {
                        name:`twitter:creator`,
                        content: metaAuthor
                    },
                    {
                        name:`twitter:description`,
                        content: metaDescription
                    },
                    {
                        name:`twitter:image`,
                        content: metaImage
                    },
                   ].concat(
                       metaKaywords && metaKaywords.length > 0 ? {
                           name: `keywords`,
                           content: metaKaywords.join(`, `),
                       } : []
                   )
                }
                 >

                 </Helmet>
             )
         }}
      >

      </StaticQuery>
  )
}

export default Seo

export const detailQuery = graphql`
  query dafaulySEOQuery {
    site {
      siteMetadata {
        author
        description
        image
        title
        twitterUsername
      }
    }
  }
`
