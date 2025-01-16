core react is different from jsx , jsx makes it easier to write react but it is different than original react
jsx is html like syntex , it is not html in react or js
browser do not understand jsx , babel transpiles the jsx so that js engine can understand it
React.createElement requires 3 paramters -- type of element, an object containing properties(attributes) ,it can be empty , children(optional)
ReactDOM.createRoot -creates root element in which react components will be rendered

render--this method tells react what to display on screen ,it replaces if there is existing content in html

a function which returns some piece of jsx is called as functional component
we can skip brackets and return statement if there is only one line - we can use normal and array functions
we can write javascript or react element inside jsx inside -{}
jsx code should have a parent
jax makes code readable it is not react
calling a component - {Name()} <Name/> or <Name></Name>
component name should start with uppercase letter
component composition -combining multiple components

you can achieve everything React does using plain HTML, CSS, and JavaScript, but React makes certain tasks more efficient, scalable, and developer-friendly, especially for complex applications.

we use default export when we have to export a single thing
another way to export multiple things is to use named exports - we have to use {} while importing

react and other frameworks help in keeping data layer and UI layer together , as soon as data layer changes UI should get updated
react can do fast dom manipulations thats why it is fast

a react hook is normal built in javascript function given by react - it is a utility function

useState() - a react hook used in creating powerful state variables - it helps in making state of a component

syntax - const [state,useState] = useState([])
state - current state value
setState - a function to update state , when called it triggers rerendering of the component

useState() returns an array
const [state,useState] = useState([]) -- this is array destructuring
const arr = useState()

const [state,useState] = arr ;
const state = arr[0] ;
const setState = arr[1] ;

it is all valid

when we call useState() it gives us a state variable , we receive it using array
example - let [listOfRestaurants] = useState() ;
whatever we pass to useState() acts as a default value for the state variabel - example - let [listOfRestaurants] = useState([]) ;
we have to import useState() as a named import

whever react state variables changes react rerenders the component

re-rendering - process of updating and re-executing component to reflect changes in UI

in js we can do this but it requires very much code , react made it easy , react keeps UI layer in sync with data layer , as soon as data layer update UI will update, it updates by re-rendering , it does this in fast optimized way with very less code
react mmakes dom operations super fast

virtual dom is not an actual dom - actual dom is the html tags
virtual dom is a representaion of actual dom
react create object from jsx code

diff algorithm - finds out difference between new virtual dom and new virtual dom --> it then updates actual dom

The React Fiber algorithm is a modern reconciliation engine introduced by React to optimize and improve the rendering process, especially for large and complex applications.
Fiber is React's mechanism for determining what changes need to be made to the DOM when the application’s state or props change.
A fiber is a JavaScript object that represents a React component and its state.
Each fiber node corresponds to a React element in the virtual DOM and contains details such as the component type, props, and state.

Reconciliation in React is the process by which React determines how to update the DOM efficiently in response to changes in state or props. It involves comparing the new virtual DOM tree (created based on the updated state or props) with the previous virtual DOM tree and determining the minimal set of changes required to update the real DOM.

react csn communcates to other servies via api calls

useEffect() - react renders the component then makes the api calls given in use effect and then re-renders the component with new data
takes 2 arguments - first an callback function arrow function- second is dependency array

monolith architecture
microservices architecture
useEffect()
promise n - async await
optional chaining --> rendering based on output of a condition

conditional rendering
