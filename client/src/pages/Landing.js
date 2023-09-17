import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage.js'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          I'm baby coloring book bodega boys chambray slow-carb ramps, palo santo craft beer roof party. Cold-pressed chia distillery umami squid pug cloud bread. Fam street art typewriter poutine vaporware. Organic salvia XOXO keffiyeh glossier.
          </p>
          <Link to='/register' className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} atl="hunt for job" className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing