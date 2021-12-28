import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"

const FeedbackItem = ({ feed, handleDelete }) => {
  return (
    <Card reverse={true}>
      <div className="num-display">{feed.rating}</div>
      <button className="close" onClick={() => handleDelete(feed.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feed.text}</div>
    </Card>
  )
}

export default FeedbackItem
