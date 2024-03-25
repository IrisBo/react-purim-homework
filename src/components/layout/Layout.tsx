import React from 'react'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import {titleData, subTitleData} from "../../data/Homepage-header"
import { phoneNum,currentDate, allRights } from "../../data/Homepage-footer"
import { Counter } from '../counter/Counter'

export  function Layout() {
  return (
    <div className="layout">
        <div className="header"><Header title={titleData} subTitle={subTitleData} /></div>
        <div className="counter-fun">
            <Counter/>
        </div>
        <div className="footer"><Footer contactPhone={phoneNum} currentDate={currentDate} rights={allRights}/></div>
    </div>
  )
}
