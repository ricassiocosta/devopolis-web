import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setDevInfo } from '../../store/actions/dev'
import { setToken } from '../../store/actions'

import { getGithubToken } from '../../services/github'
import { authenticate } from '../../services/auth'
import { getDevInfo } from '../../services/dev'

export default function Callback() {
  const query = new URLSearchParams(useLocation().search)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    async function callApi() {
      const githubToken = await getGithubToken(query.get('code'))

      const { token, username } = await authenticate(githubToken)
      dispatch(setToken(token))

      const devInfo = await getDevInfo(username)
      dispatch(setDevInfo(devInfo))

      history.replace('/dashboard')
    }
    callApi()
  })

  return <></>
}
