function FormatRating(rating) {
  return Number.isInteger(rating) ? rating.toFixed(1) : rating.toFixed(1)
}
export default FormatRating
