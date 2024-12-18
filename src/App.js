import React, { Suspense } from "react";
import "./App.css";
import ToDo from "./Components/ToDo";
import Counter from "./Components/Counter";
import FormValidation from "./Components/FormValidation";
import ConditionalRendering from "./Components/ConditionalRendering";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import FetchList from "./Components/FetchList";
import Calculator from "./Components/Calculator";
import DynamicStyling from "./Components/DynamicStyling";
import Accordion from "./Components/Accordion";
import ReactRouter from "./Components/ReactRouter/ReactRouter";
import SearchableList from "./Components/SearchableList";
import Pagination from "./Components/Pagination";
import Modal from "./Components/Modal/Modal";
import FetchDataEffect from "./Components/FetchDataEffect";
import UserAuthentication from "./Components/UserAuthentication/UserAuthentication";
import CustomHook from "./Components/CustomHook/CustomHook";
import Tabs from "./Components/Tabs/Tabs";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import MultiStepForm from "./Components/MultiStepForm/MultiStepForm";
import CounterReducer from "./Components/CounterReducer/CounterReducer";
import InputFocusTracker from "./Components/InputFocusTracker/InputFocusTracker";
import ListFilterOptimization from "./Components/ListFilterOptimization/ListFilterOptimization";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import ProtectedRoute from "./Components/AuthContext/ProtectedRoute";
import Home from "./Components/AuthContext/Home";
import Login from "./Components/AuthContext/Login";
import TimerApp from "./Components/TimerApp/TimerApp";

const LazyComponent = React.lazy(() => import("./Components/LazyComponent"));

const App = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form-validation" element={<FormValidation />} />
          <Route path="/fetch-data" element={<FetchList />} />
          <Route
            path="/conditional-rendering"
            element={<ConditionalRendering />}
          />
          <Route path="/simple-calculator" element={<Calculator />} />
          <Route path="/dynamic-styling" element={<DynamicStyling />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/searchable-list" element={<SearchableList />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/fetch-data-effect" element={<FetchDataEffect />} />
          <Route path="/custom-hook" element={<CustomHook />} />
          <Route path="/user-auth" element={<UserAuthentication />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/multi-step-form" element={<MultiStepForm />} />
          <Route path="/counter-reducer" element={<CounterReducer />} />
          <Route path="/input-focus-tracker" element={<InputFocusTracker />} />
          <Route
            path="/list-filter-optimization"
            element={<ListFilterOptimization />}
          />
          <Route
            path="/auth-context"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />

          <Route
            path="/home"
            element={
              <AuthProvider>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </AuthProvider>
            }
          />
          <Route path="/timer-app" element={<TimerApp />} />
          <Route
            path="/lazy"
            element={
              <Suspense fallback={<div>Loading Lazy Component...</div>}>
                <LazyComponent />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
