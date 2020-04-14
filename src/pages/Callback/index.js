import React, { useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

import actions from '../../store/actions'

import { getGithubToken } from '../../services/github'
import { authenticate } from '../../services/auth'
import { getDevInfo } from '../../services/dev'

const Callback = () => {
  const query = new URLSearchParams(useLocation().search)
  const dispatch = useDispatch()
  const history = useHistory()
  const { setToken } = actions.auth
  const { setDevInfo } = actions.dev

  useEffect(() => {
    async function callApi () {
      const githubToken = await getGithubToken(query.get('code'))
  
      const { token, username } = await authenticate(githubToken)
      dispatch(setToken(token))

      const devInfo = await getDevInfo(username)
      dispatch(setDevInfo(devInfo))

      history.replace('/dashboard')
    }
    callApi()
  });

  return <></>
}

export default Callback
