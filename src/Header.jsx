import React from 'react'

const Header = () => {
  return (
    <div>
       <nav>
      <img src="images/logo.png" class="logo"/>
    </nav>
    <div class="header-content">
      <h1> Unlimited movies, TV shows and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>Ready to watch? enter your email  to create or restart your membership</p>
      <form class="email-signup">
        <input type="email" placeholder="Email" required/>
        <button type="submit">Get started</button>
      </form>
    </div>
    <button class="language-btn">English <img src="images/down-icon.png"/></button>
    <button>Sign in</button>
    </div>
  )
}

export default Header
