import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeebackData"
import { useState } from "react"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const handleFeedback = id => {
    if (window.confirm("are u sure ypu want to delete feed?")) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={handleFeedback} />
      </div>
    </>
  )
}

export default App
