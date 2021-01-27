import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Search from '../views/Search';
import Categories from '../views/Categories';
import Carousel from '../views/Carousel';
import CarouselItem from '../views/CarouselItem';
import useInitialState from '../hooks/useInitialState';


// const API = 'http://localhost:3000/initalState';

const Home = ({myList, trends, originals}) =>{
  
    // const initialState = useInitialState(API);
    // return initialState.length===0 ? <h1>loading...</h1> :()
    return(
        <>
            <Search/>
            {
                myList?.length > 0 && 
                <Categories title = 'Mi lista'>
                <Carousel>
                    {
                        myList?.map(item=>(
                            <CarouselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
                </Categories>
            }
            

            <Categories title = 'Tendencia'>
                <Carousel>
                    {
                        trends?.map(item=>(
                            <CarouselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
            </Categories>

            <Categories title = 'Originals'>
                <Carousel>
                    {
                        originals?.map(item=>(
                            <CarouselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
            </Categories>

        </>

    )
};

const mapStateToProps = state =>{
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
}

export default connect (mapStateToProps, null)(Home);