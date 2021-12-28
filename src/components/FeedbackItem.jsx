import { useState } from "react"
const FeedbackItem = () => {
  const [rating, setRating] = useState(8)
  const [review, setReview] = useState("cool apps so far i had used")
  //   const handleClick = () => {
  //     setRating(prev => {
  //       return prev + 1
  //     })
  //     setReview("just cool")
  //   }
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{review}</div>
      {/* <button onClick={handleClick}>update state</button> */}
    </div>
  )
}

export default FeedbackItem
