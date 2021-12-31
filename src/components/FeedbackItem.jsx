import Card from "./shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa"
import PropTypes from "prop-types"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({ feed }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card reverse={true}>
      <div className="num-display">{feed.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feed.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(feed)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feed.text}</div>
    </Card>
  )
}
FeedbackItem.prototype = {
  feed: PropTypes.object.isRequired,
}

export default FeedbackItem
