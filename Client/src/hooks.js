const { Provider} = ReactRedux;
const {createStore} = Redux;

const initialState = {
  result: 5
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD": state={
                ...state,
                result: state.result+action.payload
              };
             break;
  case "SUBTRACT": state={
                  ...state,
                  result:action.payload-state.result
                };
            break;
case "MULTIPLY": state={
                ...state,
                result:state.result*action.payload
              };
          break;
case "DEVIDE": state={
              ...state,
              result:state.result/action.payload
            };
        break;
  }
  return state;
}

const store=createStore(reducer);

store.subscribe(() => {
   return(alert("Final Result: ", store.getState()))
});

store.dispatch({
  type:"ADD",
  payload:20
});

ReactDOM.render( <Provider store={store}> </Provider>, 
                document.getElementById('root'));