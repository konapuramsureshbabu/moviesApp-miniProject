import './index.css'

const AvailableLanguages = props => {
  const {spokenLanguages} = props
  return (
    <ul>
      {spokenLanguages.map(each => (
        <li className="items">
          <p>{each.englishName}</p>
        </li>
      ))}
    </ul>
  )
}
export default AvailableLanguages
