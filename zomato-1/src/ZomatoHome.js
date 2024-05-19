
import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
export const ZomatoHome = () => {
  let navigate = useNavigate()
  function AddRestraw() {
    navigate('/add')
  }
  function Login() {
    navigate('/log')
  }

  return (

    <div>
      <div className='main'>

        <div className='nav'>
          <p onClick={() => AddRestraw()} >Add Restaurent</p>
          <p onClick={() =>Login()}>login</p>
          <p>Sign up</p>

        </div>
        <div className='logo'>
          <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' />

        </div>
        <div className='txt'>
          <h1 >Find the  restaurants, cafés and bars in India</h1>
        </div>


        <img className='img' src='	https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' />
        <div class="popup" id="signupPopup">
    <div class="popup-content">
        <span class="close" id="closeSignup">X</span>
         {/* <span class="close" id="closeSignup">&times;</span>  */}
        <h2>Sign Up</h2>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <button type="submit">Sign Up</button>
        </div>
    </div>
</div>
       
      </div>
      <div>
        <h1 className='loct'>Popular locations in
          <img className='img2' src='https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp' />
          India</h1>
        <p className='undrloct'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
      </div>
      <div className='cntnr'>
        <button className='cntnritm'>Agra Restaurent</button>
        <button className='cntnritm'>Ahmedabad Restaurants</button>
        <button className='cntnritm'>Ajmer Restaurants</button>
        <button className='cntnritm'>Bhopal Restaurants</button>
        <button className='cntnritm'>Bihar Restaurants</button>
        <button className='cntnritm'>Chattisgarh Restaurants</button>
        <button className='cntnritm'>Chennai Restaurants</button>
        <button className='cntnritm'>Delhi Restaurants</button>
        <button className='cntnritm'>Dubai Restaurants</button>
        <button className='cntnritm'>Goa Restaurants</button>
        <button className='cntnritm'>Haryana Restaurants</button>
        <button className='cntnritm'>Hati Restaurants</button>
        <button className='cntnritm'>Inganghat Restaurants</button>
        <button className='cntnritm'>Jabalpur Restaurants</button>
        <button className='cntnritm'>Kanpur Restaurants</button>
        <button className='cntnritm'>Ladakh Restaurants</button>
        <button className='cntnritm'>Maharashtra Restaurants</button>
        <button className='cntnritm'>Orisa Restaurants</button>
        <button className='cntnritm'>Rewa Restaurants</button>
        <button className='cntnritm'>Satna Restaurants</button>
        <button className='cntnritm'>Telangana Restaurants</button>
      </div>
      <div className='footer'>

        <img className='footimg' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' />
        <div className='lstfoot'>
          <button className='indselect1'><img className='slctimg' src='https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp' />India </button>
          <button className='indselect'>English</button>
        </div>

        <div className='footerext'>
          <p>ABOUT ZOMATO</p>
          <p>ZOMATOVERSE</p>
          <p>FOR RESTAURANTS</p>
          <p>LEARN MORE</p>
          <p>SOCIAL LINKS</p>
        </div>
        <div className='footext2'>
          <span> <p >Who We Are</p></span>
          <p >Blog</p>
          <p >Work With Us</p>
          <p >Investor Relation</p>
          <p >Report Fraud</p>
          <p >Press Kit</p>
          <p >Contact Us</p>
           
        </div>
        <div className='zom'>
        <p>Zomato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
          </div>
          <div className='partn'>
              <p>Partner With Us</p>
              <p>Apps For You</p>
            </div>
            <div className='lrnmr'>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
              <p>Sitemap</p>
            </div>
            
      </div>
    </div>

  )
}
