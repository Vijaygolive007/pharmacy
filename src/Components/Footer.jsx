import React from 'react'
import phone from '../assets/phone.png'
import mail from '../assets/email.png'
import location from '../assets/location.png'
import group from '../assets/Group.png'
import logo from '../assets/logo.png'
import '../Css/Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='d-flex justify-content-evenly mt-5 footer-deatail-con'>
          <div className='footer-icon-content d-flex'>
            <div className='footer-icon'><img className='icon' src={phone} alt="phone" /></div>
            <div className='d-flex flex-column'>
              <span className='fw-normal'>Phone Number</span>
              <span className='fw-bold'>+974 3118 1843</span>
            </div>
          </div>
          <div className='footer-icon-content d-flex'>
            <div className='footer-icon'><img className='icon' src={mail} alt="email" /></div>
            <div className='d-flex flex-column'>
              <span className='fw-normal'>Email Address</span>
              <span className='fw-bold'>Elbrithcqnr@gmail.com</span>
            </div>
          </div>
          <div className='footer-icon-content d-flex'>
            <div className='footer-icon'><img className='icon' src={location} alt="location" /></div>
            <div className='d-flex flex-column'>
              <span className='fw-normal'>Office Location</span>
              <span  className='fw-bold'>Ambassador Street, Zone 61,</span>
            </div>
          </div>
      </div>
      <div className='d-flex justify-content-evenly mt-5'>
          <div className='footer-icon-last d-flex'>
            <div className='footer-icon'><img className='icon' src={logo} alt="phone" /></div>
          </div>
          <div className='footer-icon-last d-flex'>
            <p className='fw-normal'>
              Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you find the necessary vitamins
            </p>
          </div>
          <div className='footer-icon-last'></div>
      </div>
      <p className='mt-3 text-center'><img className='p-2'  src={group} alt="small location" />Elbrit Life Science Private Limited. C20, BKC, G block, Mumbai 400051</p>
    </footer>
  )
}
