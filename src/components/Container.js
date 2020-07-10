import React from "react"
import { ContainerWrapper } from "../elements"
import Nav from './Nav'
import Sider from './sider'
import Footer from "./Footer"

export const Container = ({ children }) => {
  return <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
      <Sider />
      </ContainerWrapper>
}
