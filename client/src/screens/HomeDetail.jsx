import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function HomeDetail(props) {
  const [home, setHome] = useState(null)

  const { homes } = props
  const {id} = useParams()
  
  useEffect(() => {
    const fetchOneHome = () => {
      const singleHome = homes.find((eachHome) => eachHome.id === Number(id))
      setHome(singleHome)
    }
    if (homes.length) {
      fetchOneHome()
    }
  },[homes, id])
  return (
    <div>
      <h3>Home Detail</h3>
      <p>
          {home?.description}
          {`rate $${home?.rate}`}
        </p>
          <img className= "home-images"
        src={home?.img_url}
      />
      <form>
        <input type="text"
          value=
        />
        <input type="text"
          value=
        />
      </form>
    </div>
  )
}
