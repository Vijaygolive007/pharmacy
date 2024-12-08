import logo from '../assets/logo.png'
import { Footer } from './Footer'
import { Ingrediants } from './Ingrediants'
import { Latestnews } from './Latestnews'
import { Vitamins } from './Vitamins'

export const Logo = () => {
  return (
    <>
      <header>
          <img src={logo} alt="" />
      </header>
      <Vitamins/>
      <Ingrediants/>
      <Latestnews/>
      <Footer />
      
    </>
    
  )
}
