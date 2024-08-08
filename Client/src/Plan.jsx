import React from 'react'
import './Plan.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Plan = () => {
  return (
    <div>
      <>
      <main>
        <section class="heroo">
            <div class="heroo-content">
                <h1>Pricing Plans</h1>
                <p>One plan, all devices, access your recipes on all your devices including iOS, Android & Web</p>
            </div>
            <div class="heroo-images">
               

           
            </div>
        </section>
    </main>


    <section class="subscription-plans">
        
            <h2>Choose Your Plan</h2>
            <div class="plans">
                <div class="plan free">
                    <h3>Free Plan</h3>
                    <p class="price">Free</p>
                    <ul>
                        <li>Access to limited recipes</li>
                        <li>Monthly newsletter</li>
                        <li>Basic support</li>
                        <li>CB cloud sync</li>
                        <li>Use on ios,Android & web</li>
                    </ul>
                    <div className='button1'>

                    <button className='button-plan'>
        choose Free
      </button>
                    </div>
                </div>
                <div class="plan basic">
                    <h3>Basic Plan</h3>
                    <p class="price">$5.99/month</p>
                    <ul>
                        <li>Access to all recipes</li>
                        <li>Monthly cooking classes</li>
                        <li>Email support</li>
                        <li>CB cloud sync</li>
                        <li>Use on ios,Android & web</li>
                    </ul>
                    <div className='button2'>

                    <button className='button-plan1' >
        choose Basic
      </button>
                    </div>
                </div>
                <div class="plan standard">
                    <h3>Monthly Plan</h3>
                    <p class="price">$9.99/month</p>
                    <ul>
                        <li>Access to all recipes</li>
                        <li>Weekly cooking classes</li>
                        <li>Exclusive articles</li>
                        <li>Email and chat support</li>
                        <li>CB cloud sync</li>
                        <li>Use on ios,Android & web</li>
                        <li>cancel any time</li>
                    </ul>
                    <div className='button3'>

                    <button className='button-plan2'>
        choose Monthly
      </button>
                    </div>
                </div>
                <div class="plan premium">
                    <h3>Yearly Plan</h3>
                    <p class="price">$99.99/year</p>
                    <ul>
                        <li>Access to all recipes</li>
                        <li>Weekly cooking classes</li>
                        <li>Exclusive articles</li>
                        <li>One free cooking book</li>
                        <li>Priority support</li>
                        <li>CB cloud sync</li>
                        <li>Use on ios,Android & web</li>
                        <li>cancel any time</li>
                    </ul>
                    <button className='button-plan3'>
        choose yearly
      </button>
                </div>
            </div>
        
    </section>

      </>
    </div>
  )
}

export default Plan