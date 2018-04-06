import React from 'react'

//import './Home.css'

const HIDDEN_SYMBOL = '❓'

const Home = ({ isConnected }) => (
    <div className={'home'}>
        { isConnected == 'false' && Home.displayHome() }
    </div>
)
export default Home
