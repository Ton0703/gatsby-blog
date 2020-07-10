import React from 'react'
import { useStaticQuery, Link, graphql} from 'gatsby'
import { NavWrapper } from '../elements'

 const Nav = () => {

    const data = useStaticQuery(graphql`
       query {
        file(relativePath: {eq: "logo.svg"}) {
            publicURL
          }
       }
    `)
    console.log(data)
    return (
        <NavWrapper>
             <Link to='/'>
                 <img src={data.file.publicURL} alt='my logo' />
             </Link>
        </NavWrapper>
    )
}

export default Nav