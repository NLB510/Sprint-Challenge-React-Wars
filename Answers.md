# Answers

1.  What is React JS and what problems does it try and solve?

  - React JS is a UI component library that solves the problem of managing UI elements and the data that goes inside of them with reusable UI components. Reusable components allow an app to scale as its UI and data grows without the need to tear down and rebuild an app. An example of this is Facebook or Twitter dashboards. They are broken up into chunks of components that either display specific data or handle the input and navigation of the app.

1.  What does it mean to _think_ in react?

  - Thinking in react means thinking of an app in terms of it’s components. An example would be a simple chat app, like iPhone messages. If I were to build a message app in react I would break down its parts into components when building. The chat display, the header showing who the message is from, and the log of messages would each be their own component containers. Then each of those component containers would be broken down into smaller components if needed depending on what information is being displayed.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  - A functional component makes is a React component that is only responsible for managing the presentation of state. They cannot mutate state as they don't have access to the React Component lifecycle methods. A Class component is a class that extends the React.Component class of React and has access to all lifecycle methods needed to manage state. Class components generally pass down state as props to functional components. 

1.  Describe state.
  - State is the data being stored in the form of an object by a react app, which can be passed around to components via props. State can also be updated via the setState method as the data changes which then updates any component using that data as a prop. State drives the decisions when building out app components. 

1.  Describe props.
  - Props can be thought of as the highways that our state travels throughout an app. Props are immutable objects that get passed down or up through the component tree of a react app. They hold the state data that allows various components to access and display it. 
