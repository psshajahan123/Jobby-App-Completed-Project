import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const SimilarJobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails

  return (
    <li className="similar-job-card">
      <div className="logo-and-title-container">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="company-logo-a"
        />
        <div className="title-and-rating-container">
          <h1 className="job-title-a">{title}</h1>
          <div className="rating-container">
            <AiFillStar className="star-icon-a" />
            <p className="rating-value">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="job-description-heading-a">Description</h1>
      <p className="job-description-content-a">{jobDescription}</p>
      <div className="location-and-package-container">
        <div className="location-icon-container">
          <IoLocationSharp className="location-icon" />
          <p className="location-text">{location}</p>
        </div>
        <div className="location-icon-container">
          <BsFillBriefcaseFill className="location-icon" />
          <p className="location-text">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobCard
