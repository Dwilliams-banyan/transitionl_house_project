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
import { addMoveOutNotice , addWeekEndPassNotice , addDayOffNotice} from './action/requestAction';

const store = ourStore()

store.subscribe(()=> console.log(store.getState()))

store.dispatch(addResident({name:"DeMarcus",age:27,relaseDate:"2020/05/30",moveInDate:"2020/05/30"}))
store.dispatch(addResident({name:"Alex",age:31,relaseDate:"2019/09/13",moveInDate:"2019/09/13"}))
store.dispatch(addResident({name:"Roy",age:39,relaseDate:"2019/12/24",moveInDate:"2019/12/24"}))

store.dispatch(addMoveOutNotice({name:"Demarcus",dayOfMove:"01/29/93",address:"6320 Jocelyn Dr",yourState:"TN",zip:"37416",city:"Chattanooga"}))
store.dispatch(addMoveOutNotice({name:"Alex",dayOfMove:"01/29/93",address:"6320 Jocelyn Dr",yourState:"TN",zip:"37416",city:"Chattanooga"}))

store.dispatch(addWeekEndPassNotice({pass:"weekend", residentName:"kfws",dateOfPass:"01/29/93", timeLeaving:"7:00am", returningDate : "01/29/93",parole:"no"}))
store.dispatch(addWeekEndPassNotice({pass:"weekend", residentName:"kfsdvws",dateOfPass:"01/29/93", timeLeaving:"7:00am", returningDate : "01/29/93",parole:"no"}))
store.dispatch(addWeekEndPassNotice({pass:"weekend", residentName:"kfvcfsdws",dateOfPass:"01/29/93", timeLeaving:"7:00am", returningDate : "01/29/93",parole:"no"}))

store.dispatch(addDayOffNotice({residentName:"ew",dateOfRequest:"01/29/93",numOfDays:3,startTimeOff:"01/29/93",theReason:"other"}))
store.dispatch(addDayOffNotice({residentName:"ewswc",dateOfRequest:"01/29/93",numOfDays:5,startTimeOff:"01/29/93",theReason:"sick_leave"}))
store.dispatch(addDayOffNotice({residentName:"ewasxsa",dateOfRequest:"01/29/93",numOfDays:6,startTimeOff:"01/29/93",theReason:"vacation"}))


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
