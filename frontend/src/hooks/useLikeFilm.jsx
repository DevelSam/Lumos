import { useCallback, useState } from 'react'

const useLikeFilm = () => {
  const userToken = localStorage.getItem('user')
  const [films, setFilms] = useState('')
  const [loading, setLoading] = useState(false)
  const addLikeFilms = async (id, bool) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/likeFilms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userToken}` },
        body: JSON.stringify({ filmId: id, filmLike: bool }),
      })
      const data = await response.json()
      if (!response.ok) {
        return data.message
      }
    } catch (e) {
      console.error(e)
    }
  }

  const deleteLikeFilms = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/likeFilms`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ filmId: id }),
      })
      const data = await response.json()
      return data.message
    } catch (e) {
      console.error(e)
    }
  }

  const getLikeFilms = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/likeFilms`, {
        headers: {
          'Content-Type': 'application/json charset=utf-8',
          Authorization: `Bearer ${userToken}`,
        },
      })
      const data = await response.json()
      if (response.ok) {
        setFilms(data)
      } else {
        return data.message
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [userToken])

  return { addLikeFilms, deleteLikeFilms, getLikeFilms, films, loading }
}
export default useLikeFilm
