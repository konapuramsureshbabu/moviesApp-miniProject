import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const searchConst = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Search extends Component {
  state = {
    searchStatus: searchConst.initial,
    searchResultsList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getSearchResultsData()
  }

  getSearchResultsData = async searchInput => {
    this.setState({searchStatus: searchConst.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const searchApiUrl = `https://apis.ccbp.in/movies-app/movies-search?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(searchApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
      </div>
    )
  }
}
export default Search
