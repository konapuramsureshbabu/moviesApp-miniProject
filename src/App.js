import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Footer from './components/Footer'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/movies/:id" component={MovieDetails} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
)

export default App
