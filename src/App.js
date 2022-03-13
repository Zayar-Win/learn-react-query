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
import { ReactQueryDevtools } from "react-query/devtools";
import HeroDetails from "./components/HeroDetails";
import ParallelQuery from "./components/ParallelQuery";
import DynamicQueryParallel from "./components/DynamicQueryParallel";
import Dependent from "./components/Dependent";

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
          path='/parallel-query'
          element={<ParallelQuery />}
        />
        <Route
          path='/super-heros/:id'
          element={<HeroDetails />}
        ></Route>
        <Route
          path='/dynamic-parallel-query'
          element={
            <DynamicQueryParallel
              herosId={[1, 3]}
            />
          }
        />
        <Route
          path='/dependent-queries'
          element={
            <Dependent
              email={"zayarwin@gmail.com"}
            />
          }
        />
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
      <ReactQueryDevtools
        initialIsOpen={false}
        position='bottom-right'
      />
    </QueryClientProvider>
  );
};

export default App;
