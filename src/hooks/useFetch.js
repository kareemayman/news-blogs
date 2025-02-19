import { useEffect, useState } from "react"

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource")
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setError(false)
      })
      .catch((err) => {
        setError(true)
        console.log(err.message)
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      setData(null)
      setError(false)
      setLoading(true)
    }
  }, [url])

  return { data, loading, error }
}
