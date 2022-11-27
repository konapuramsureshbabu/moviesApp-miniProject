import './index.css'

const Genres = props => {
  const {eachItem} = props
  const {name} = eachItem
  return (
    <li className="items">
      <p>{name}</p>
    </li>
  )
}
export default Genres
