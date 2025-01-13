// core react is different from jsx , jsx makes it easier to write react but it is different than original react
// jsx is html like syntex , it is not html in react or js
// browser do not understand jsx , babel transpiles the jsx so that js engine can understand it
// React.createElement requires 3 paramters -- type of element, an object containing properties(attributes) ,it can be empty , children(optional)
// ReactDOM.createRoot -creates root element in which react components will be rendered

//render--this method tells react what to display on screen ,it replaces if there is existing content in html

// a function which returns some piece of jsx is called as functional component
// we can skip brackets and return statement if there is only one line - we can use normal and array functions
// we can write javascript or react element inside jsx inside -{}
// jax makes code readable it is not react
// calling a component - {Name()} <Name/> or <Name></Name>
// component name should start with uppercase letter
// component composition -combining multiple components

you can achieve everything React does using plain HTML, CSS, and JavaScript, but React makes certain tasks more efficient, scalable, and developer-friendly, especially for complex applications.

we use default export when we have to export a single thing
another way to export multiple things is to use named exports - we have to use {} while importing

react and other frameworks help in keeping data layer and UI layer together , as soon as data layer changes UI should get updated
react can do fast dom manipulations thats why it is fast

a react hook is normal built in javascript function given by react - it is a utilitu function

useState() - a react hook used in creating powerful state variables - it helps in making state of a component

syntax - const [state,useState] = useState([])
state - current state value
setState - a function to update state , when called it triggers rerendering of the component

when we call use state it gives us a state variable , we receive it using array
example - let [listOfRestaurants] = useState() ;
whatever we pass to useState() acts as a default value for the state variabel - example - let [listOfRestaurants] = useState([]) ;
we have to import useState() as a named import

whever react state variables changes react rerenders the component

re-rendering - process of updating and re-executing component to reflect changes in UI

in js we can do this but it requires very much code , react made it easy , react keeps UI layer in sync with data layer , as soon as data layer update UI will update, it updates by re-rendering , it does this in fast optimized way with very less code
react mmakes dom operations super fast
useEffect()
