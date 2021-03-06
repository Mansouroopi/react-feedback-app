import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((accumulator, current) => {
      return (accumulator += current.rating)
    }, 0) / feedback.length
  average = average.toFixed(1).replace(/[.,]0$/, "")
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating {average}</h4>
    </div>
  )
}


FeedbackStats.prototype = {
    feedback:PropTypes.array.isRequired
}
export default FeedbackStats


