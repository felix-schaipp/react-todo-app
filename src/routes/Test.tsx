import { useMemo } from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Resource } from '../types'
import './Test.css'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function Test(): JSX.Element {
  const [resourceType, setResourceType] = useState<Resource>('posts')
  const [items, setItems] = useState([])
  const getApiData = useCallback(
    async (resource: Resource, pageNumber?: number) => {
      const response = await fetch(
        `${BASE_URL}/${resource}/${pageNumber ? pageNumber : ''}`
      )

      if (!response) return []
      const data = await response.json()
      console.log(data)
      if (!data || !data?.length) return []
      setItems(data)
    },
    []
  )

  useEffect(() => {
    getApiData(resourceType)
  }, [resourceType, getApiData])

  useMemo(() => getApiData, [getApiData])

  function handleClick(resource: Resource): void {
    setResourceType(resource)
    return
  }

  return (
    <div className="test">
      <h2>API Test</h2>
      <div className="resource-type">
        <button onClick={() => handleClick('posts')}>Posts</button>
        <button onClick={() => handleClick('albums')}>Albums</button>
        <button onClick={() => handleClick('users')}>Users</button>
      </div>
      {items.map((entry, index) => (
        <pre key={index}>{JSON.stringify(entry)}</pre>
      ))}
    </div>
  )
}
