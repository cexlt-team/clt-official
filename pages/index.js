import { useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import DistributionSection from '../components/DistributionSection'
import RoadmapSection from '../components/RoadmapSection'
import ContactSection from '../components/ContactSection'
import DisclaimerSection from '../components/DisclaimerSection'
import DappSection from '../components/DappSection'

const anchors = ['Home', 'About', 'Distribution', 'Roadmap', 'Contact', 'Disclaimer', 'Dapp'];

const Home = props => {
  const onLeave = (origin, destination, direction) => {
    const orig = `${origin.anchor}-menu`
    const dest = `${destination.anchor}-menu`

    document.getElementById(orig).classList.toggle('active')
    document.getElementById(dest).classList.toggle('active')
  }

  const Menu = () => {
    return (
      <ul id="mainMenu" className="menu">
        {anchors.map((value, index) => (
          <li id={`${value}-menu`} className="menu-item" key={index}>
            <a 
              href={`#${value}`}
              onClick={() => {
                fullpage_api.moveTo(value)
              }}
            >
              {value}
            </a>
          </li>
        ))}
        <li>
          <a href="/download/CLT_whitepaper.pdf" target="_blank">
            Whitepaper
          </a>
        </li>
      </ul>
    )
  }

  useEffect(() => {
    const hash = window.location.hash
    let init

    if (hash === '') {
      init = 'Home-menu'
    } else {
      init = `${hash.replace('#', '')}-menu`
    }
    
    document.getElementById(init).classList.add('active')
  }, [])

  return (
    <div>
      <Menu />
      <ReactFullpage
        navigation
        anchors={anchors}
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        onLeave={onLeave.bind(this)}
        render={comp => (
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
