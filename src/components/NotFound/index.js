import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="image"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="paragraph">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
