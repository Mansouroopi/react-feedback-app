import FeedbackItem from "./FeedbackItem"
const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length == 0) {
    return <h1>No Feedback yet</h1>
  }
  return (
    <div className="feedback-list">
      {feedback.map((feed, index) => (
        <FeedbackItem feed="{feed}" key={feed.id} />
      ))}
    </div>
  )
}

export default FeedbackList
