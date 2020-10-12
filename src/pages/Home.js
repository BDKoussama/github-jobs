import React from 'react';
import Search from '../Components/Search';
import Content from '../Content' ; 
import StoreProvider from '../Context/JobsContext' ; 

const Home = () => {
    return (
        <StoreProvider>
            <Search/>
            <Content/>
        </StoreProvider>
    )
}


export default Home ;