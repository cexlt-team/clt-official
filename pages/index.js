import { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import DistributionSection from '../components/DistributionSection'
import RoadmapSection from '../components/RoadmapSection'
import ContactSection from '../components/ContactSection'
import DisclaimerSection from '../components/DisclaimerSection'
import DappSection from '../components/DappSection'

const Home = props => {
  const moveSectionDown = () => {
    fullpage_api.moveSectionDown()
  }

  const Menu = () => {
    return (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100
        }}
      >
        <ul className="actions">
          <li>
            <button onClick={moveSectionDown}>
              Move Section Down
            </button>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <Menu />
      <ReactFullpage
        debug
        navigation
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        render={comp =>
          console.log('render prop change') || (
            <ReactFullpage.Wrapper>
              <HomeSection />
              <AboutSection />
              <DistributionSection />
              <RoadmapSection />
              <ContactSection />
              <DisclaimerSection />
              <DappSection />
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  )
}

export default Home
