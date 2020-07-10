import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { FooterWrapper, FooterSocialIcons, FooterSocialWrapper } from '../elements'

function Footer() {
    const data = useStaticQuery(graphql`
       query {
           facebook: file(relativePath: {eq: "facebook.svg"}){
               publicURL
           },
           twitter: file(relativePath: {eq: "twitter.svg"}){
               publicURL
           },
           ins: file(relativePath: {eq: "ins.svg"}){
               publicURL
           },
           linkedIn: file(relativePath: {eq: "linkedIn.svg"}){
               publicURL
           }
       }
    `)
    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                        <img src={data.facebook.publicURL} alt='Facebook' />
                    </a>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                        <img src={data.twitter.publicURL} alt='Facebook' />
                    </a>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                        <img src={data.ins.publicURL} alt='Facebook' />
                    </a>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                        <img src={data.linkedIn.publicURL} alt='Facebook' />
                    </a>
                </FooterSocialIcons>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}

export default Footer
