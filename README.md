# Dev Stack

Dev Stack is a responsive web application that helps developers explore
different development technologies and build their own development stack.

Users can browse technologies, view their category, difficulty level,
rating, and add their preferred technologies to their personal stack.

## Live Website

[Visit Live Website](https://cute-rabanadas-48900f.netlify.app/)

## GitHub Repository

[View Source Code](https://github.com/sayam-dev85/dev-stack01)

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- React Icons
- JSON
- Vite

## Features

1. Explore Technologies

Users can explore different development technologies and see their name,
category, description, difficulty level, rating, and badge.

2. Build Your Own Stack

Users can add their favorite technologies to their personal development
stack. The application prevents duplicate technologies from being added.

3. Manage Your Stack

Users can remove an individual technology or remove all selected
technologies. Toast notifications are also shown for stack actions.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that allows us to write HTML-like code inside JavaScript
or TypeScript. It makes React UI code easier to read and understand.


### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.


### 3. What does the useState hook do, and where did you use it in this project?
The useState hook is used to create and update state in a React component.
In this project, I used useState to store the selected technologies and
to control the mobile navigation menu.


### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook runs code after a component renders.

I used it in the TechnologySection component to fetch the technology data
from the JSON file when the component loads.


### 5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item in a list. It helps React
efficiently update the correct item when the list changes.



### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI based on a condition.

I used it in the StackSidebar component to show an empty stack message
when no technology has been selected.

{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}