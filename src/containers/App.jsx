import React, {useState, useEffect} from 'react';
import Header from '../views/Header';
import Search from '../views/Search';
import Categories from '../views/Categories';
import Carousel from '../views/Carousel';
import CarouselItem from '../views/CarouselItem';
import Footer from '../views/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () =>{
  
    const initialState = useInitialState(API);
   
    console.log(initialState);
    return(
        <div className="App">
            <Header/>
            <Search/>
            {
                initialState.myList?.length > 0 && 
                <Categories title = 'Mi lista'>
                <Carousel>
                    {
                        initialState.myList?.map(item=>(
                            <CarouselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
                </Categories>
            }
            

            <Categories title = 'Tendencia'>
                <Carousel>
                    {
                        initialState.trends?.map(item=>(
                            <CarouselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
            </Categories>

            <Categories title = 'Originals'>
                <Carousel>
                    {
                        initialState.originals?.map(item=>(
                            <CarouselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
            </Categories>
            <Footer />

        </div>

    )
};

export default App;