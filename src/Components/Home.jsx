import React from 'react'
import { Link } from 'react-router-dom'
import FAQ from './FAQ'

const Home = () => {
  return (
    <>
      <div className='lg:flex items-center mt-32 justify-center lg:ml-44 '>
        <div className='lg:w-2/5 md:w-2/6 w-full lg:ml-10 ml-0'>
          <img src="https://codinginpublic.dev/projects/react-router-budget-app/assets/illustration-4f619ef1.jpg" alt="" className='p-10  w-full h-auto rounded-md' />
        </div>
        <div className='grid justify-center align-middle mt-4 lg:mt-0 lg:pl-10 lg:pr-10 md:pl-4 md:pr-4 pl-4 pr-4 text-center'>
          <h1 className="lg:text-6xl md:text-4xl text-2xl">Take Control of </h1>
          <h1 className="lg:text-6xl md:text-4xl text-2xl text-cyan-400">Your Money</h1>
          <p className='lg:text-xl md:text-4xl text-2xl mt-4'>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
          <div className='grid justify-center'>
            <button className='p-2 mt-10 pl-4 pr-4 rounded-lg text-white bg-black '><Link to='/Login'>Lets Go..</Link></button>
          </div>
        </div>

      </div>

      <div className="mt-8 grid justify-center pb-10 lg:pl-0 lg:pr-0 pl-5 pr-5">
        <h2 className="lg:text-3xl md:text-2xl text-xl mt-6 font-semibold text-cyan-500">Why Choose Our Daily Expense Tracker:</h2>
        <p className="lg:text-xl md:text-2xl text-lg mt-4">
          Keeping track of your expenses has never been this easy. Our Daily Expense Tracker offers:
        </p>
        <ul className="list-decimal list-inside text-left mt-4">
          <li>Effortless Expense Logging: Record your spending in seconds.</li>
          <li>Smart Budgeting: Set personalized budgets and track your progress.</li>
          <li>Insights at a Glance: Visualize your financial habits with clear charts and graphs.</li>
          {/* <li>Secure and Private: Your financial data is encrypted and fully secure.</li> */}
          <li>User-Friendly Interface: Intuitive design for a seamless experience.</li>
        </ul>
      </div>
      <FAQ />
    </>
  )
}

export default Home