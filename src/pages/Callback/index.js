import React, { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { getGithubToken } from '../../services/github'
import { authenticate } from '../../services/auth'

export default function Callback () {
  const query = new URLSearchParams(useLocation().search)
  const [token, setToken] = useState('')
  const [githubToken, setGithubToken] = useState('')


  useEffect(() => {
    async function callApi () {
      const githubToken = await getGithubToken(query.get('code'))
      setGithubToken(githubToken)
  
      const token = await authenticate(githubToken)
      setToken(token)
    }
    callApi()
  }, [query]);

  return (
    <>
    <span>GitHub Token: {githubToken}</span>
    <br />
    <span>API Token: {token}</span>
    </>
  )
}
