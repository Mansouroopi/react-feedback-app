import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <h1>No Feedback yet</h1>
  }
  console.log(feedback)

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(feed => (
          <motion.div
            key={feed.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              feed={feed}
              key={feed.id}
              handleDelete={() => handleDelete(feed.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map(feed => (
  //       <FeedbackItem
  //         feed={feed}
  //         key={feed.id}
  //         handleDelete={() => handleDelete(feed.id)}
  //       />
  //     ))}
  //   </div>
  // )
}

FeedbackList.prototype = {
  feedback: PropTypes.array.isRequired,
}
export default FeedbackList
