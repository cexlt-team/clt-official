const AboutSection = () => {
  return (
    <div className="about section">
      <div className="content container">
        <div className="wrap">
          <div className="about-item">
            <img src="/assets/images/icon-burn.png" />
            <div className="title-text">Transaction Burn</div>
            <div className="sub-text">
              CLT is burnt every transaction<br />to maintain its value            
            </div>
          </div>
          <div className="about-item">
            <img src="/assets/images/icon-contribute.png" />
            <div className="title-text">Liquidity Offerings</div>
            <div className="sub-text">
              CLT provides robust demand<br />to Centralized Exchange's token           
            </div>
          </div>
          <div className="about-item">
            <img src="/assets/images/icon-staking.png" />
            <div className="title-text">Staking Dapp</div>
            <div className="sub-text">
              Boosted reward provided through<br />CLT Staking Dapp            
            </div>
          </div>
          <div className="about-item">
            <img src="/assets/images/icon-dfl.png" />
            <div className="title-text">Token Deflation</div>
            <div className="sub-text">
              Smart-Contract Token<br />burn to keep the value of CLT            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection