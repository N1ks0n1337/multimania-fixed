import React from 'react'
import Btn from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'
import SubTitle from '../../components/subTitle/SubTitle'
import Title from '../../components/title/Title'
import background from './backgroundHeader.png'
import './header.css'

function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})`, backgroundRepeat  : 'no-repeat', backgroundSize: 'contain'}} className='header'>
        <Navbar/>
        <div className="header__container">
        <div className="header__btn-group">
          <div className="btn__item">
          <Btn className='text' theme ='brown'>Claim free NFT</Btn>
          </div>
          <div className="btn__item">
          <Btn className='text' theme ='mint'>Mint</Btn>
          </div>
          <div className="btn__item">
          <Btn className='text' theme ='purple'>Read Whitepaper</Btn>
          </div>
        </div>
        </div>
    </header>
  )
}

export default Header