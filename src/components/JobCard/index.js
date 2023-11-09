import {AiFillStar} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import {HiLocationMarker} from 'react-icons/hi'

import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    title,
    companyLogoUrl,
    rating,
    employmentType,
    location,
    id,
    packagePerAnnum,
    jobDescription,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-list-items">
        <div className="company-container">
          <div>
            <img src={companyLogoUrl} alt="company logo" className="logo-url" />
          </div>
          <div>
            <h1 className="company-title">{title}</h1>
            <div className="star-icon-container">
              <AiFillStar className="star-icon" />
              <p className="rating-count">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-container">
          <div className="location-section">
            <div className="star-icon-container">
              <HiLocationMarker className="location-icon" />
              <p className="location-text">{location}</p>
            </div>
            <div className="star-icon-container">
              <BsFillBriefcaseFill className="location-icon" />
              <p className="employment-type">{employmentType}</p>
            </div>
          </div>
          <div className="star-icon-container">
            <p className="package-text">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="hr-line" />
        <h1 className="description-heading">Description</h1>
        <p className="description-content">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
