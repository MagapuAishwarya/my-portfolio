import { profile } from '../data/content'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}.  Designed and developed with React.
        </p>
        <a href="#">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
