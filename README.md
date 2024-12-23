# React Exercises App

Welcome to the **React Exercises App**! This app is a collection of React exercises designed to help you practice and improve your React skills. Each exercise focuses on a different aspect of React, from state management to routing, hooks, and dynamic imports.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project List](#project-list)
- [Skills Covered](#skills-covered)
- [Special Features](#special-features)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Future Improvements](#future-improvements)
- [Contribution](#contribution)
- [License](#license)

---

## Overview

This application consists of multiple React components implementing real-world use cases. Each component serves a specific purpose, such as building a to-do list, counter app, form validation, API data fetching, and more. It is organized using React Router for navigation between projects.

---

## Features

- **Routing**: Navigate through various React exercises using React Router.
- **Lazy Loading**: Some components are lazy-loaded to optimize performance.
- **Dynamic Styling**: Use React state and inline styles to dynamically change component styling.
- **Authentication**: Simulate user login and authentication using React Context API.
- **Form Handling**: Includes exercises that work with forms, validation, and multi-step forms.
- **State Management**: Use both `useState` and `useReducer` to manage component state.
- **Component-Based Design**: Modular components for reusability and clarity.
- **Forms and Validation**: Interactive forms with validation logic.
- **API Integration**: Fetching and displaying data using `useEffect` and custom hooks.
- **Performance Optimization**: Usage of `useMemo`, `useCallback`, and `React.memo` for efficiency.
- **Dynamic UI Elements**: Accordion, Tabs, Modals, and more.
- **User Authentication**: Simulated login/logout flow using React Context API.
- **Styling**: Dynamic inline styles and theme toggles.
- **Timer Functionality**: Play, Pause, and Reset timer functionality.

---

## Project List

Below is a list of projects implemented in this application:

1. **Todo List Application**
   - Build a simple todo list app where users can add, delete, and mark tasks as complete.
2. **Counter with State**
   - Create a counter with increment and decrement functionality using React state.
3. **Form with Validation**
   - Build a form with inputs for name, email, and password. Validate the form using simple rules.
4. **Fetch API Data and Display**
   - Fetch data from an API (like JSONPlaceholder) and display it in a list format.
5. **Conditional Rendering**
   - Implement login/logout functionality with conditional rendering.
6. **Simple Calculator**
   - Build a simple calculator with basic arithmetic operations.
7. **Dynamic Styling with State**
   - Change the background color of a component based on the state.
8. **Accordion UI Component**
   - Implement an accordion component where users can expand and collapse sections.
9. **React Router Setup**
   - Set up React Router with multiple pages and navigation links.
10. **Searchable List**
    - Create a search bar to filter a list of items.
11. **Pagination**
    - Create a paginated list with navigation controls.
12. **Modal Component**
    - Build a modal that appears when a button is clicked and can be closed.
13. **Fetch Data with useEffect**
    - Fetch and display a list of posts from an API using the `useEffect` hook.
14. **Custom Hook**
    - Create a custom hook for fetching data from an API.
15. **User Authentication Simulation**
    - Simulate user authentication with login, logout, and profile components.
16. **Tabs Component**
    - Build a tabs component that switches between different content views.
17. **Shopping Cart**
    - Build a shopping cart with add/remove functionality.
18. **Multi-Step Form**
    - Create a multi-step form with separate components for each step.
19. **Counter with Reducer**
    - Implement a counter component using `useReducer` for state management.
20. **Input Focus Tracker**
    - Track how many times an input field has been focused using `useRef`.
21. **Optimized List Filter**
    - Optimize list filtering performance using `useCallback` and `useMemo`.
22. **Authentication with Context API**
    - Implement authentication using the React Context API to manage global state.
23. **Timer App**  
    - Timer with Play, Pause, and Reset functionality.
24. **Dynamic Input Box Manager**
    - Add, remove, and manage input boxes dynamically with specific deletion logic.

---

## Skills Covered

- React State (`useState`, `useReducer`)
- React Lifecycle and Effects (`useEffect`)
- Forms and Controlled Components
- Event Handling in React
- Conditional Rendering
- React Router (Routing and Navigation)
- React Context API and Global State Management
- Custom Hooks for Reusability
- Performance Optimization (`useMemo`, `useCallback`)
- React Portals
- DOM Manipulation with `useRef`
- Dynamic UI Styling
- Pagination Logic

---

## Special Features

### Lazy Loading

- The app uses React's **lazy loading** for the `LazyComponent`. This component is only loaded when the user navigates to the `/lazy` route. This improves performance by splitting the bundle and loading components only when necessary.

#### Example:

In `App.js`, the `LazyComponent` is lazy-loaded as follows:

```jsx
const LazyComponent = React.lazy(() => import("./Components/LazyComponent"));

<Route
  path="/lazy"
  element={
    <Suspense fallback={<div>Loading Lazy Component...</div>}>
      <LazyComponent />
    </Suspense>
  }
/>
```

---

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/aviralksingh9/ReactAdvanced.git
cd react-advanced-projects
```

### Running the Application

Start the development server:

```bash
npm start
```

Go to [http://localhost:3000](http://localhost:3000) in your browser.

### Folder Structure

```plaintext
src/
├── Components/
│   ├── ToDo/
│   ├── Counter/
│   ├── FormValidation/
│   ├── ConditionalRendering/
│   ├── FetchList/
│   ├── Accordion/
│   ├── Tabs/
│   ├── TimerApp/
│   ├── ShoppingCart/
│   ├── AuthContext/   # User authentication components
│   ├── CustomHook/
│   └── ... (other components)
│
├── App.js             # Main App component
├── index.js           # Entry point for React
└── App.css            # Global styles
```

### Dependencies

Key libraries and frameworks used:

- **React**: Core library for building the UI.
- **React Router**: For routing and navigation.
- **React Context API**: State management.
- **CSS**: Styling the application.

### Future Improvements

- Add animations for UI components.
- Enhance error handling and API integration.
- Optimize components with React.memo for better performance.

### Contribution

Feel free to contribute to this project by submitting pull requests or opening issues.

1. **Fork the repository**.
2. **Create a feature branch**:

   ```bash
   git checkout -b feature-branch
   ```

3. **Commit changes**:

   ```bash
   git commit -m "Add new feature"
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature-branch
   ```

5. Open a Pull Request.

### License

This project is open-source and available under the MIT License.
