import React from 'react'
import './Header.scss' // Import file CSS để style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faSearch,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <div className='header-left'>
        <img
          src='https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/small/logo_main_3_0353466848.png'
          alt='Logo'
          className='header-logo'
          onClick={() => navigate('/')} 
        />
        <button className='menu-button'>
          <FontAwesomeIcon icon={faBars} />
          Danh mục
        </button>
      </div>
      <div className='header-center'>
        <input
          type='text'
          className='search-input'
          placeholder='Nhập tên điện thoại, máy tính, phụ kiện... cần tìm'
        />
        <button className='search-button'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='header-right'>
        <button className='user-button'>
          <FontAwesomeIcon icon={faUser} />
        </button>

        <button className='cart-button' onClick={() => navigate('/cart')}>
          <FontAwesomeIcon icon={faShoppingCart} /> Giỏ hàng
        </button>
      </div>
    </div>
  )
}

export default Header
