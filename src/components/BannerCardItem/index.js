// Write your code here.
import './index.css'

const CardDetails = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <div className="card-container">
      <li className={className}>
        <div className="details-container">
          <h1 className="heading">{headerText}</h1>
          <p className="paragraph">{description}</p>
          <button className="button" type="submit">
            Show More
          </button>
        </div>
      </li>
    </div>
  )
}

export default CardDetails
