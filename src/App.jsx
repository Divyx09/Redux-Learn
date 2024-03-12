import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Styles/app.scss'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './Actions/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <>
      <div className='container d-flex flex-column main-content justify-content-center'>
        <h1>
          Increment/Decrement counter
        </h1>
        <div className='sub-content'>
          <a onClick={() => {
            dispatch(decNumber())
          }}>
            <span>&#x268A;  </span>
          </a>
          <input type="text" value={myState} />
          <a onClick={() => {
            dispatch(incNumber())
          }}>
            <span>&#x271A;</span>
          </a>
        </div>
      </div>
    </>
  )
}
export default App