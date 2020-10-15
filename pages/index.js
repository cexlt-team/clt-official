import { useState, useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { FiMenu } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import DistributionSection from '../components/DistributionSection'
import RoadmapSection from '../components/RoadmapSection'
import ContactSection from '../components/ContactSection'
import DisclaimerSection from '../components/DisclaimerSection'
import DappSection from '../components/DappSection'

const anchors = ['Home', 'About', 'Distribution', 'Roadmap', 'Contact', 'Disclaimer'];

const Home = props => {
  const onLeave = (origin, destination, direction) => {
    const orig = `${origin.anchor}-menu`
    const dest = `${destination.anchor}-menu`

    document.getElementById(orig).classList.toggle('active')
    document.getElementById(dest).classList.toggle('active')
  }

  const Menu = () => {
    const [open, setOpen] = useState(false)

    const handleDrawer = () => {
      setOpen(!open)
    }

    return (
      <div>
        <div id="mainLogo">
          <img src="/assets/images/clt-icon.png" alt="CLT" />
          <div className="logo-title">CLT</div>
        </div>
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
            <a href="https://staking.cexlt.io" target="_blank">
              Dapp
            </a>
          </li>
          <li>
            <a href="https://info.uniswap.org/pair/0x95a63caaa2f9a7556594ee20fa7a3ae07ef2791f" target="_blank">
              Trade
            </a>
          </li>
          <li>
            <a href="/download/CLT_whitepaper_v2.pdf" target="_blank">
              Whitepaper
            </a>
          </li>
        </ul>
        <div id="mobileMenu">
          <div className="drawer-btn" onClick={handleDrawer}><FiMenu /></div>
          <div className={open ? 'drawer-layer on' : 'drawer-layer'}>
            <div className="drawer-close" onClick={handleDrawer}><FiArrowRight /></div>
            <ul>
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
                <a href="https://staking.cexlt.io" target="_blank">
                  Dapp
                </a>
              </li>
              <li>
                <a href="https://info.uniswap.org/pair/0x95a63caaa2f9a7556594ee20fa7a3ae07ef2791f" target="_blank">
                  Trade
                </a>
              </li>
              <li>
                <a href="/download/CLT_whitepaper_v2.pdf" target="_blank">
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  )
}

export default Home
