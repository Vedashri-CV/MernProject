import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import img1 from './assets/images/Oat-Bran-Finished-scaled.jpg';
import img2 from './assets/images/Peach-Salad-in-Bowl.jpg';
import GreenRice from './assets/images/Green-Rice.jpg';
import Avocado from './assets/images/Avocado.jpg';
import MarryMeChicken from './assets/images/Marry-Me-Chicken.jpg';
import SesameButterNoodles from './assets/images/Sesame-Butter-Noodles.jpg';
import ChickenSalad from './assets/images/Chicken-Salad.jpg';
import HoneyChipotleChickenSkewers from './assets/images/Honey-Chipotle-Chicken-Skewers.jpg';
import uttand from './assets/images/UU.jpg';
import chec from './assets/images/chechicken.jpg';
import searchicon from './assets/images/searchicon.jpg';
import author from './assets/images/author.jpeg'
import author1 from './assets/images/author1.jpeg';


const Nonveg = () => {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/veg');
    };
    const Click = () => {
      navigate('/');
  };
  return (
    <>
    <div className='body'>
      <header>
       
      </header>

      <main>
        <section className="hero">
          <div className="containerr">
            <h1>The Cooking Blog</h1>
            <p>Your source of great content</p>
            <div className='search-box'>
              <input type='text' placeholder='Search'/>
              <img src={searchicon} alt='/'></img>
            </div>
       
          </div>
        </section>


        <nav className="cate">
          <div className="containerr">
            <button onClick={Click} className="category-btn">All</button>
            <button onClick={handleClick} className="category-btn">Veg</button>
            <button  className="category-btn active">Non-Veg</button>
          </div>
        </nav>
        

        <section className="blog-posts">
          <div className="cont">

          <div className="post-card">
              <img src={chec} alt="Blog Image" />
              <div className="post-content">
                <h2>Chettinad Chicken Curry</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">This recipe is from one of the most aromatic and spiciest cuisines of India - Chettinad! Chettinad ....</p>
                <div className="post-author">
                  <img src={uttand} alt="Author Image" />
                  <span>Uttand</span>
                </div>
              </div>
            </div>

          <div className="post-card">
              <img src={HoneyChipotleChickenSkewers} alt="Blog Image" />
              <div className="post-content">
                <h2>Honey Chipotle Chicken Skewers</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">These chicken skewers are a family favorite! Very easy, deliciously smokys.</p>
                <div className="post-author">
                  <img src={author} alt="Author Image" />
                  <span>Raman</span>
                </div>
              </div>
            </div>

           

           
         
            

            <div className="post-card">
              <img src={MarryMeChicken} alt="Blog Image" />
              <div className="post-content">
                <h2>Marry Me Chicken</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">Golden, juicy chicken coated in a simple creamy sauce with tomatoes, garlic, and thyme. I love this with mashed potatoes and a salad! This is just so good..</p>
                <div className="post-author">
                  <img src={author1} alt="Author Image" />
                  <span>Marquise Brown</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <img src={SesameButterNoodles} alt="Blog Image" />
              <div className="post-content">
                <h2>Shortcut Sesame Butter Noodles</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">One of my favorite back-pocket recipes! Packaged noodles for ease, butter for creaminess, honey for sweetness, and sesame oil for depth. Just tangly slips of joy!</p>
                <div className="post-author">
                  <img src={author1} alt="Author Image" />
                  <span>Marquise Brown</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <img src={ChickenSalad} alt="Blog Image" />
              <div className="post-content">
                <h2>Super Yummy Chicken Salad</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">This Chicken Salad is so good! Protein-packed with a delicious creamy dressing, and perfect for an on-the-go lunch in a sandwich or wrap..</p>
                <div className="post-author">
                  <img src={author} alt="Author Image" />
                  <span>Marquise Brown</span>
                </div>
              </div>
            </div>

           


          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Nonveg;
