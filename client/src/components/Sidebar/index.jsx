import React from 'react'
import './style.scss'
import edit_icon from '../../assets/editer.png'
import option_icon from '../../assets/option.png'
import archive_icon from '../../assets/archiver.png'
const index = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__new'>
            <div className='sidebar__new-logo'>
            {/* <img src={edit_icon} /> */}
            </div>
            <div className='sidebar__new-title'>New chat</div>
            <div className='sidebar__new-icon'>
                <img src={edit_icon} />
            </div>
        </div>
        <div className='chat__list'>
            <div className='chat__list-title'>Today</div>
            <div className='chat__list-items'>
                <div className='list__item'>
                    <div className='list__item-text'>Corrigez diapositive floue.</div>
                    <div className='list__item-options'>
                        <div className='option-more'>
                            <img src={option_icon} className='option-img'/>
                        </div>
                        <div className='option-archive'>
                            <img src={archive_icon} className='option-img'/>
                        </div>
                    </div>
                </div>
                <div className='list__item'>
                    <div className='list__item-text'>Corrigez diapositive floue.</div>
                    <div className='list__item-options'>
                        <div className='option-more'>
                            <img src={option_icon} className='option-img'/>
                        </div>
                        <div className='option-archive'>
                            <img src={archive_icon} className='option-img'/>
                        </div>
                    </div>
                </div>
                <div className='list__item'>
                    <div className='list__item-text'>Corrigez diapositive floue.</div>
                    <div className='list__item-options'>
                        <div className='option-more'>
                            <img src={option_icon} className='option-img'/>
                        </div>
                        <div className='option-archive'>
                            <img src={archive_icon} className='option-img'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='chat__list-title'>Yesturday</div>
            <div className='chat__list-items'>
            <div className='list__item'>
                    <div className='list__item-text'>Corrigez diapositive floue.</div>
                    <div className='list__item-options'>
                        <div className='option-more'>
                            <img src={option_icon} className='option-img'/>
                        </div>
                        <div className='option-archive'>
                            <img src={archive_icon} className='option-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index