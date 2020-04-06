import React, { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { getGithubToken } from '../../services/github'
import { authenticate } from '../../services/auth'

export default function Callback () {
  const query = new URLSearchParams(useLocation().search)
  const [token, setToken] = useState('')
  const [githubToken, setGithubToken] = useState('')


  useEffect(() => {
    const githubToken = getGithubToken(query.get('code'))
    setGithubToken(githubToken)

    const token = authenticate(githubToken)
    setToken(token)
  }, [query]);

  return (
    <>
    {githubToken}
    {token}
    </>
  )
}
