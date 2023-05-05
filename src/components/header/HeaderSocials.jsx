import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/oshada-eranga-wijerathna/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/oshadaera68" target='_blank'><FaGithub/></a>
      <a href="https://medium.com/@oshadaeraboy" target='_blank'><FaMedium/></a>
    </div>
  )
}

export default HeaderSocials
