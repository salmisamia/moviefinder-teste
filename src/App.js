import "./App.scss"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Row from "./components/Row"
import Video from "./components/Video"
import requests from "./config/Requests"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner/>
            <br/><br/>
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row
              title="Programmes originaux "
              fetchUrl={requests.fetchOriginals}
              isPoster={true}
            />
            <Row
              title="Tendances actuelles"
              fetchUrl={requests. fetchTopRated}
            />

            <Row title="Films d'action" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
          



          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
