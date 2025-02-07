/* eslint-disable no-unused-vars */
import React from 'react';
import Products from './Components/Products/Products';
import bookImage1 from './assets/Dancer_gang.jpg';
import bookImage2 from './assets/Dont_Look.png';
import bookImage3 from './assets/Hide.webp';
import bookImage4 from './assets/Percy_Jackson.webp';
import bookImage5 from './assets/Mermaid.jpg';
import bookImage6 from './assets/Moon.jpeg';
import bookImage7 from './assets/SeeAnimals.webp';
import bookImage8 from './assets/The-Bad-Guys.webp';
import trans1 from './assets/trans1.jpg';
import trans2 from './assets/trans2.jpg';
import trans3 from './assets/trans3.jpg';
import trans4 from './assets/trans4.jpg';
import fiction1 from './assets/fiction1.jpg';
import fiction2 from './assets/fiction2.jpg';
import fiction3 from './assets/fiction3.jpg';
import fiction4 from './assets/fiction4.jpg';
import novel1 from './assets/novel1.jpg';
import novel2 from './assets/novel2.jpg';
import novel3 from './assets/novel3.jpg';
import novel4 from './assets/novel4.jpg';
import short1 from './assets/short1.jpg';
import short2 from './assets/short2.jpg';
import short3 from './assets/short3.jpg';
import short4 from './assets/short4.jpg';

const Content = () => {
    const newArrivals = [
        {
            id: 1,
            imageUrl: '',
            name: 'The Danger Gang',
            price: 800,
            rating: 4,
        },
        {
            id: 2,
            imageUrl: '',
            name: 'Dont Look Back',
            price: 1100,
            rating: 5,
        },
        {

            id: 3,
            imageUrl: '',
            name: 'Hide and Seek',
            price: 950,
            rating: 4,
        },
        {
            id: 4,
            imageUrl: '',
            name: 'Percy Jackson',
            price: 950,
            rating: 4,
        },
        {
            id: 5,
            imageUrl: '',
            name: 'Mermaid',
            price: 950,
            rating: 4,
        },
        {
            id: 6,
            imageUrl: '',
            name: 'Moon',
            price: 950,
            rating: 4,
        },
    
    ];

    const translations = [
        {
            id: 11,
            imageUrl: '', 
            name: 'A Multidisciplinary Approach',
            price: 800,
            rating: 4,
        },
        {
            id: 12,
            imageUrl: '', 
            name: 'Flights',
            price: 1100,
            rating: 5,
        },
        {
            id: 13,
            imageUrl: '',
            name: 'Tram 83',
            price: 800,
            rating: 4,
        },
        {
            id: 14,
            imageUrl: '', 
            name: 'Fever Dream',
            price: 1100,
            rating: 5,
        },
    
    ];

    const fiction = [
        {
            id: 21,
            imageUrl: '', 
            name: 'Lolita',
            price: 800,
            rating: 4,
        },
        {
            id: 22,
            imageUrl: '',
            name: 'Amongst Women',
            price: 1100,
            rating: 5,
        },
        {
            id: 23,
            imageUrl: '',
            name: 'The Beginning of Spring',
            price: 800,
            rating: 4,
        },
        {
            id: 24,
            imageUrl: '',
            name: 'The History of Tom Jones, a Foundling',
            price: 1100,
            rating: 5,
        },
    
    ];

    const novels = [
        {
            id: 41,
            imageUrl: '',
            name: 'Wuthering Heights',
            price: 800,
            rating: 4,
        },
        {
            id: 42,
            imageUrl: '',
            name: 'A Singular Life',
            price: 1100,
            rating: 5,
        },
        {
            id: 43,
            imageUrl: '',
            name: 'Lord of the Flies',
            price: 800,
            rating: 4,
        },
        {
            id: 44,
            imageUrl: '',
            name: 'Emma',
            price: 1100,
            rating: 5,
        },
    
    ];

    const shortStories = [
        {
            id: 31,
            imageUrl: '',
            name: 'The Turn of the Screw',
            price: 800,
            rating: 4,
        },
        {
            id: 32,
            imageUrl: '',
            name: 'The Eternal Moment',
            price: 1100,
            rating: 5,
        },
        {
            id: 33,
            imageUrl: '',
            name: 'Interpreter of Maladies',
            price: 800,
            rating: 4,
        },
        {
            id: 34,
            imageUrl: '', 
            name: 'An Occurrence at Owl Creek Bridge',
            price: 1100,
            rating: 5,

        },
    
    ];

    return (
        <div className="content">
            {/* New Arrivals Section */}
            <div className="section">
                <h2 className="sectionTitle">New Arrivals</h2>
                <div className="productlist">
                    {/* Render newArrivals products */}
                    {newArrivals.map(product => (
                        <Products
                            key={product.id}
                            id={product.id}
                            image={
                                product.id === 1
                                ? bookImage1
                                :product.id === 2
                                ? bookImage2
                                :product.id === 3
                                ? bookImage3
                                :product.id === 4
                                ? bookImage4
                                :product.id === 5
                                ? bookImage5
                                :product.id === 6
                                ? bookImage6
                                :product.id === 7
                                ? bookImage7
                                :product.id === 8
                                ? bookImage8
                                :bookImage1

                            }
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                </div>
                {translations.length > 0 && (
                    <button className="exploreButton">
                        More Explore
                    </button>
                )}
            </div>


          



            {/* Fiction Section */}
            <div className="section">
                <h2 className="sectionTitle">Fiction</h2>
                <div className="productlist">
                    {/* Render fiction products */}
                    {fiction.map(product => (
                        <Products
                            key={product.id}
                            id={product.id}
                            image={
                                product.id === 21
                                ? fiction1
                                :product.id === 22
                                ? fiction2
                                :product.id === 23
                                ? fiction3
                                :product.id === 24
                                ? fiction4
                                :fiction4

                            }
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                </div>
                {translations.length > 0 && (
                    <button className="exploreButton">
                        More Explore
                    </button>
                )}
            </div>

            {/* Novels Section */}
            <div className="section">
                <h2 className="sectionTitle">Novels</h2>
                <div className="productlist">
                    {/* Render novels products */}
                    {novels.map(product => (
                        <Products
                            key={product.id}
                            id={product.id}
                           image={
                                product.id === 41
                                ? novel1
                                :product.id === 42
                                ? novel2
                                :product.id === 43
                                ? novel3
                                :product.id === 44
                                ? novel4
                                :novel1
                            }
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                </div>
                {translations.length > 0 && (
                    <button className="exploreButton">
                        More Explore
                    </button>
                )}
            </div>

            {/* Short Stories Section */}
            <div className="section">
                <h2 className="sectionTitle">Short Stories</h2>
                <div className="productlist">
                    {/* Render shortStories products */}
                    {shortStories.map(product => (
                        <Products
                            key={product.id}
                            id={product.id}
                            image={
                                product.id === 31
                                ? short1
                                :product.id === 32
                                ? short2
                                :product.id === 33
                                ? short3
                                :product.id === 34
                                ? short4
                                :short4
                            }
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                </div>
                {translations.length > 0 && (
                    <button className="exploreButton">
                        More Explore
                    </button>
                )}
            </div>
        </div>
    );
}

export default Content;
