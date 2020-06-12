import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import ourStore from './store/configStore'
// import App from './App';
import 'mdbreact/dist/css/mdb.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import AppRouter from './router/appRouter'
import { addResident } from './action/creatingActions'
import { addMoveOutNotice} from './action/requestAction';

const store = ourStore()

store.subscribe(()=> console.log(store.getState()))

store.dispatch(addResident({name:"DeMarcus",age:27}))
store.dispatch(addResident({name:"Alex",age:31}))
store.dispatch(addResident({name:"Roy",age:39}))

store.dispatch(addMoveOutNotice({name:"Demarcus",dayOfMove:"01/29/93",address:"6320 Jocelyn Dr",yourState:"TN",zip:"37416",city:"Chattanooga"}))
store.dispatch(addMoveOutNotice({name:"Alex",dayOfMove:"01/29/93",address:"6320 Jocelyn Dr",yourState:"TN",zip:"37416",city:"Chattanooga"}))

// store.dispatch(addWeekEndPassNotice())


const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(JSX, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
