import {Link} from 'react-router-dom'
import './index.css'

const MovieItems = props => {
  const {eachMovie} = props
  const {posterPath, id, title} = eachMovie
  return (
    <Link to={`/movies/${id}`}>
      <ul>
        <img className="popular-img" src={posterPath} alt={title} />
      </ul>
    </Link>
  )
}
export default MovieItems
