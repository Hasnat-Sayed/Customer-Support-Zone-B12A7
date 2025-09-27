### What is JSX, and why is it used?
**Answer:** JSX, which stands for Javascript XML, is a syntax extension for Javascript that allows writing code that looks like HTML inside React components.

It makes the code more easier to understand compared to plain Javascript.JSX also allows embedded Javascript expressions directly inside HTML, which makes it flexible.It also runs efficiently in browsers, as React converts JSX into regular Javascript.

---

### What is the difference between State and Props?
**Answer:** Difference between State and Props:

**Props:** Props are the values that are passed from a parent component to a child component. Props cannot be modified by the child component.

**State:** State refers to the data that belongs to a component and can be updated within that component. Whenever the state changes, React automatically re-renders that component to show the updated data.

---

### What is the useState hook, and how does it work?
**Answer:** useState is a hook that requires a state variable to store value, a state updater function and an initial value that is passed inside the parentheses of useState.

useState hook allows a component to keep track of values between renders. Calling the update function tells React to re-render the component with a new data.

---

### How can you share state between components in React?
**Answer:** An effective way to share state between components is by lifting the state up to the nearest parent component that both child components share.

The parent manages the state and passes it down as props to its child components.Both child component update and read that state simultaneously.

---

### How is event handling done in React?
**Answer:** Event handling in React is done using "onClick" and other camelCase syntax. Event handlers are passed as functions instead of strings. React also allows passing extra data to event handlers using functions. 