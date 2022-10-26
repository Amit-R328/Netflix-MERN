import './list.scss'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem.jsx'
import { useRef, useState } from 'react';

const List = ({list}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className='list'>
            <span className='listTitle'>{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className='sliderArrow left'
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) =>(
                        <ListItem index={i} item={item}/>
                    ))}
                    <ListItem index={0}/>
                </div>
                <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
