import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import {titleData, subTitleData} from "../../data/Homepage-header"
import { phoneNum, allRights } from "../../data/Homepage-footer"
import { Layout } from '../../components/layout/Layout'


export default function Homepage() {
  return (
    <div>
      <Layout></Layout>


 
      {/* <Header title={titleData} subTitle={subTitleData} />
      <Footer contactPhone={phoneNum} currentDate={currentDate} rights={allRights}/> */}

     
    </div>
  )
}
