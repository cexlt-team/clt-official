import { FiArrowRight } from 'react-icons/fi'

const HomeSection = () => {
  return (
    <div className="home section">
      <div className="content">
        <div className="sub-text">Bring decentralization and liquidity to centralized tokens</div>
        <div className="main-text">Centralized exchange token’s Liquidity Token</div>
        <a href="https://staking.cexlt.io" target="_blank">
          <div className="dapp-link">
            <div className="link-text">ShowKase</div>
            <div className="link-icon"><FiArrowRight /></div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HomeSection