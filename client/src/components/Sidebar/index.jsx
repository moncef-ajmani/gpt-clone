import React, { useEffect, useState } from 'react'
import './style.scss'
import edit_icon from '../../assets/editer.png'
import option_icon from '../../assets/option.png'
import archive_icon from '../../assets/archiver.png'
import axios from '../../api/axios'
import {Link} from 'react-router-dom'
import logout_icon from '../../assets/logout.png' 
import { useAuth } from '../../Contexts/AuthContext'
const index = () => {
    const [history,setHistory] = useState([])
    const { logout, authUser } = useAuth()
    useEffect(()=>{
        axios.get("/history")
        .then(({data})=>{
            setHistory(data.historyItems)
        })
        .catch(err=>alert("Error fetching history"))
    },[])
    const handleClick = () =>{
        logout()
    }
    return (
    <div className='sidebar'>
        <div className='sidebar__container'>
            <Link className='sidebar__new' to="/">
                <div className='sidebar__new-logo'>
                </div>
                <div  className='sidebar__new-title'>New chat</div>
                <div className='sidebar__new-icon'>
                    <img src={edit_icon} />
                </div>
            </Link>
           
                <div className='chat__list'>
                <div className='chat__list-title'>Chat List ({history.length})</div>
                <div className='chat__list-items'>
                    {history.map(({conversationId,title},index)=>{
                        return (
                            <Link className='list__item' key={index} to={`/c/${conversationId}`}>
                                <div className='list__item-text'>{title.replace(/"/g,"")}</div>
                                <div className='list__item-options'>
                                    <div className='option-more'>
                                        <img src={option_icon} className='option-img'/>
                                    </div>
                                    <div className='option-archive'>
                                        <img src={archive_icon} className='option-img'/>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
           
            
            <div  className='sidebar__user'>
                <div className="sidebar__user-avatar"></div>
                <div className="sidebar__user-name">{authUser.username}</div>
                <div className="sidebar__user-logout" onClick={handleClick}>
                    <img src={logout_icon}/>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default index