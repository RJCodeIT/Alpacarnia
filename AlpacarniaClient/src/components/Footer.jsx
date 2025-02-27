import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>O nas</h2>
                <Link to='/alpacarnia'>Jak działamy</Link>
                <Link to='/alpacarnia/products'>Zwierzęta</Link>
                <Link to='/alpacarnia'>Goście</Link>
                <Link to='/alpacarnia'>Inwestorzy</Link>
                <Link to='/alpacarnia/services'>Warunki usług</Link>
            </div>
            <div className="footer-link-items">
                <h2>Oferta</h2>
                <Link to='/alpacarnia/products'>Spacery</Link>
                <Link to='/alpacarnia/products'>Imprezy</Link>
                <Link to='/alpacarnia'>Grille</Link>
                <Link to='/alpacarnia'>Futro</Link>
                <Link to='/alpacarnia'>Sesje zdjęciowe</Link>
            </div>         
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/alpacarnia'>Instagram</Link>
                <Link to='/alpacarnia'>TikTok</Link>
                <Link to='/alpacarnia'>Facebook</Link>
                <Link to='/alpacarnia'>Youtube</Link>
                <Link to='/alpacarnia'>X</Link>
            </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            
            <small className="website-rights">ALPACARNIA C 2023</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to="/alpacarnia"
                target="_blank"
                aria-label="Facebook"
                >
                 <i className="fa fa-facebook"></i>
                </Link>
                <Link className="social-icon-link instagram"
                to="/alpacarnia"
                target="_blank"
                aria-label="Instagram"
                >
                 <i className="fa fa-instagram"></i>
                </Link>
                <Link
                className='social-icon-link youtube'
                to='/alpacarnia'
                target='_blank'
                aria-label='Youtube'
                >
                <i className='fa fa-youtube' />
                </Link>
                <Link
                className='social-icon-link twitter'
                to='/alpacarnia'
                target='_blank'
                aria-label='Twitter'
                >
                <i className='fa fa-twitter' />
                </Link>
                <Link
                className='social-icon-link linkedin'
                to='/alpacarnia'
                target='_blank'
                aria-label='LinkedIn'
                >
                <i className='fa fa-linkedin' />
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
