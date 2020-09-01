import Countdown from 'react-count-down'

const DappSection = () => {
  const expired = () => {
    console.log('expired callback')
  }

  const options = {
    endDate: '09/11/2020 00:00 AM',
    prefix: 'to Staking Dapp Opening',
    expired
  }

  return (
    <div className="dapp section">
      <div className="content">
        <img src="/assets/images/clt-icon.png" alt="CLT" />
        <Countdown options={options} />
      </div>
    </div>
  )
}

export default DappSection