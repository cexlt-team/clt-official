const AboutSection = () => {
  return (
    <div className="about section">
      <div className="content container">
        <div className="wrap">
          <div className="about-item">
            <img src="/assets/images/icon-burn.png" />
            <div className="title-text">Transaction Burn</div>
            <div className="sub-text">
              Each transaction, CLT token burned
              based on total amount of transaction,
              CLT’s scarcity increase            
            </div>
          </div>
          <div className="about-item">
            <img src="/assets/images/icon-contribute.png" />
            <div className="title-text">Liquidity Offerings</div>
            <div className="sub-text">
              Each transaction, CLT token burned
              based on total amount of transaction,
              CLT’s scarcity increase            
            </div>
          </div>
          <div className="about-item">
            <img src="/assets/images/icon-staking.png" />
            <div className="title-text">Staking Dapp</div>
            <div className="sub-text">
              Each transaction, CLT token burned
              based on total amount of transaction,
              CLT’s scarcity increase            
            </div>
          </div>
          <div className="about-item">
            <img src="/assets/images/icon-dfl.png" />
            <div className="title-text">Token Deflation</div>
            <div className="sub-text">
              Each transaction, CLT token burned
              based on total amount of transaction,
              CLT’s scarcity increase            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection