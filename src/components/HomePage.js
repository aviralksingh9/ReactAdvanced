import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="main-title">Welcome to React Exercises</h1>
      <p className="description">
        Explore the following React exercises to improve your skills!
      </p>
      <div className="container">
        <div className="button-container">
          <Link to="/todo" className="btn">
            Todo List
          </Link>
          <Link to="/counter" className="btn">
            Counter
          </Link>
          <Link to="/form-validation" className="btn">
            Form with Validation
          </Link>
          <Link to="/fetch-data" className="btn">
            Fetch API Data
          </Link>
          <Link to="/conditional-rendering" className="btn">
            Conditional Rendering
          </Link>
          <Link to="/simple-calculator" className="btn">
            Simple Calculator
          </Link>
          <Link to="/dynamic-styling" className="btn">
            Dynamic Styling
          </Link>
          <Link to="/accordion" className="btn">
            Accordion UI
          </Link>
          <Link to="/react-router" className="btn">
            React Router Setup
          </Link>
          <Link to="/searchable-list" className="btn">
            Searchable List
          </Link>
          <Link to="/pagination" className="btn">
            Pagination
          </Link>
          <Link to="/modal" className="btn">
            Modal Component
          </Link>
          <Link to="/fetch-data-effect" className="btn">
            Fetch Data with useEffect
          </Link>
          <Link to="/custom-hook" className="btn">
            Custom Hook
          </Link>
          <Link to="/user-auth" className="btn">
            User Authentication
          </Link>
          <Link to="/tabs" className="btn">
            Tabs Component
          </Link>
          <Link to="/shopping-cart" className="btn">
            Shopping Cart
          </Link>
          <Link to="/multi-step-form" className="btn">
            Multi-Step Form
          </Link>
          <Link to="/counter-reducer" className="btn">
            Counter with Reducer
          </Link>
          <Link to="/input-focus-tracker" className="btn">
            Input Focus Tracker
          </Link>
          <Link to="/list-filter-optimization" className="btn">
            Optimized List Filter
          </Link>
          <Link to="/auth-context" className="btn">
            Authentication with Context API
          </Link>
          <Link to="timer-app" className="btn">
            Timer App
          </Link>
          <Link to="/lazy" className="btn">
            Lazy Loaded Component
          </Link>
          <Link to="/input-box" className="btn">
            Input Box Manager
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
