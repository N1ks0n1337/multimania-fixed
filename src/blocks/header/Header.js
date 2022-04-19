import React from 'react'
import BtnNFT from '../../components/button/ButtomNft'
import Btn from '../../components/button/Button'
import BtnMint from '../../components/button/ButtonMint'
import Navbar from '../../components/navbar/Navbar'
import SubTitle from '../../components/subTitle/SubTitle'
import Title from '../../components/title/Title'
import background from './backgroundHeader.png'
import './header.css'

function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})`, backgroundRepeat  : 'no-repeat', backgroundSize: 'contain', width: '100%', overflow: 'hidden'}} className='header'>
        <Navbar/>
        <div className="header__container">
        <div className="header__btn-group">
          <div className="btn__item">
          <BtnNFT className='text'>Claim free NFT</BtnNFT>
          </div>
          <div className="btn__item">
           <BtnMint className='text'>Mint</BtnMint>
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