import React, { useEffect, useState } from 'react'
import Routes from './Routes'
import { setAccessToken } from './accessToken'

interface Props {}

const App: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:4000/refresh-token', {
        method: 'POST',
        credentials: 'include'
      })

      const { accessToken } = await result.json()

      setAccessToken(accessToken)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return <Routes />
}

export default App
