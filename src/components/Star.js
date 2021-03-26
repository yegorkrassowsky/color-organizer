const Star = ({ selected, onClick=f=>f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick}></div>
)
export default Star
