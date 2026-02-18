import './Header.css'
import isabellaImg from '../assets/isabella.jpeg'

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">Dashboard de países</h1>
        <div className="authorSection">
          <img src={isabellaImg} alt="Isabella Martín" className="authorImage" />
          <a 
            href="https://www.linkedin.com/in/isabellamartinp" 
            target="_blank"
            rel="noopener noreferrer"
            className="headerDescription"
          >
            Hecho por Isabella Martín
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
