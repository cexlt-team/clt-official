import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const ContactSection = () => {
  return (
    <div className="contact section">
      <div className="content container">
        <div className="section-title">Contact</div>
        <div className="contact-email">
          <p>Marketing</p>
          <p>rex@cexlt.io</p>
        </div>
        <div className="contact-email">
          <p>Operating</p>
          <p>jason@cexlt.io</p>
        </div>
        <div className="contact-email">
          <p>Support</p>
          <p>support@cexlt.io</p>
        </div>
        <div className="community-link">
          <a href="https://github.com/cexlt-team" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://medium.com/@cexlt" target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="https://t.me/cexlt" target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://twitter.com/cexlt" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection