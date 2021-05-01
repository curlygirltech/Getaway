import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../screens/Css Screens/homedetails.css'


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
    <div classname="home-detail">
      <h3 className="title">{home?.title}</h3>
      <p classname= "description"> 
          {home?.description}
          {`rate $${home?.rate}`}
        </p>
          <img className= "home-images"
        src={home?.img_url}
      />
    
    </div>
  )
}
