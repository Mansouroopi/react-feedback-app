import FeedbackItem from "./FeedbackItem"
const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <h1>No Feedback yet</h1>
  }
  console.log(feedback)
  return (
    <div className="feedback-list">
      {feedback.map(feed => (
        <FeedbackItem
          feed={feed}
          key={feed.id}
          handleDelete={() => handleDelete(feed.id)}
        />
      ))}
    </div>
  )
}

export default FeedbackList
