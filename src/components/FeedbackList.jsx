import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)

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
            <FeedbackItem feed={feed} key={feed.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
