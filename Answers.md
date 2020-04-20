1. What problem does the context API help solve?
   Context API makes it much simpler to pass props down instead of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Store = Appication State.
   Actions = 'what actions do we want to happen to change the state'
   Reducer = 'How are we returning the state when the action is done'

1) What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is the global state that the applicaton lives in. Any component (if using application state.. such as Context API and reudux) can change the state of any component in the application.

   Where as Component state is much more black and white where in order for a state change to happen a function must be called in that component (can be passed down through props...) to change that components level state.

1) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux thunk is a middleware that essentially allows us to dispatch actions withing actions. In other words.. an action now can make an api call then dispatch another action to adjust the application level state all within one event handler.

1) What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux is absolutely amazing. very complex and admittedly I needed to use notes to remember everything I had to do to make this work, but when you get it working the appliaction just flows so well and it's so easy to make changes.
