import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RootState, Dispatch } from './store'
import {loginParms} from './models/user'

const mapState = (state: RootState) => ({
  token: state.user.jwt,
})

const mapDispatch = (dispatch: Dispatch) => ({
  login: ({username,password}:loginParms) => dispatch.user.login({username,password})
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

const App: React.FC<Props> = (props:Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "username") {
      setUsername(event.target.value)
    } 
    else if (event.target.name === "password") {
      setPassword(event.target.value)
    } 
  }

  return (
    <div>
      <h1>your token: {props.token}</h1>
      <label>username</label>
      <input name="username" onChange={inputHander} value={username}></input>
      <label>password</label>
      <input name="password" onChange={inputHander} value={password}></input>
      <button  onClick={()=>props.login({username,password})}>login</button>
    </div>
  );
}

export default connect(
	mapState,
	mapDispatch
)(App)