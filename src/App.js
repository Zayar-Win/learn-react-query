import React from "react";
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RqSuperHeroPage from "./components/RqSuperHeroPage";
import SuperHeroPage from "./components/SuperHeroPage";
import {
  QueryClientProvider,
  QueryClient,
} from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/superhero'>
              Tranditional HeroPages
            </Link>
          </li>
          <li>
            <Link to='/rqsuperhero'>
              RQ SuperHeros
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/superhero'
          element={<SuperHeroPage />}
        ></Route>
        <Route
          path='/rqsuperhero'
          element={<RqSuperHeroPage />}
        ></Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
