import './listItem.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      if (item) {
        try {
          const res = await axios.get("/movies/find/" + item, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTU4ZjBiYzdiZTAyMmI0MWQ2YzRlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjYzNzM5NCwiZXhwIjoxNjY3MDY5Mzk0fQ.wQ5wjYL_MzRVrz6jIUq7j1HDDHrvLCWfAeoQSCwJz5k"
            }
          })
          setMovie(res.data)
        } catch (err) {
          console.log(err)
        }
      }
    }
    getMovie()
  }, [item])

  return (
      <Link to="/watch" state={{movie:movie}}>
      <div
      className='listItem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >
        <img src={movie.img} alt='' />
        {isHovered && (<>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className='icon' />
              <AddIcon className='icon' />
              <ThumbUpAltOutlinedIcon className='icon' />
              <ThumbDownAltOutlinedIcon className='icon' />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>)}
      </div>
    </Link>
    )
  
}
  
export default ListItem
