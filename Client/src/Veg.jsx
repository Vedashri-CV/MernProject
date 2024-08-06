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
import searchicon from './assets/images/searchicon.jpg';
import author from './assets/images/author.jpeg'
import author1 from './assets/images/author1.jpeg';


const Veg = () => {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/Blog');
    };
    const click = () => {
        navigate('/Nonveg');
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
            <button  onClick={handleclick} className="category-btn">All</button>
            <button className="category-btn active">Veg</button>
            <button onClick={click}className="category-btn">Non-Veg</button>
          </div>
        </nav>
        

        <section className="blog-posts">
          <div className="cont">

          <div className="post-card">
              <img src={img1} alt="Blog Image" />
              <div className="post-content">
                <h2>How To Cook Oat Bran for Breakfast</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">High protein, high fiber – quick and easy to make!</p>
                <div className="post-author">
                  <img src={author}alt="Author Image" />
                  <span>Suganya</span>
                </div>
              </div>
            </div>


            <div className="post-card">
              <img src={img2} alt="Blog Image" />
              <div className="post-content">
                <h2>Gorgeous Peach Salad</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">Fresh cucumber, bitey shallots, cooling mint, and sweet fleshy peaches coming together in serious flavor harmony! I love this peach salad.</p>
                <div className="post-author">
                  <img src={author }alt="Author Image" />
                  <span>VedaShri</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <img src={GreenRice} alt="Blog Image" />
              <div className="post-content">
                <h2>Amazing Green Rice</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">This green rice is my FAVORITE! It’s packed with spinach and cilantro, perfectly spicy, nutritious, and goes with just about everything.</p>
                <div className="post-author">
                  <img src={author1} alt="Author Image" />
                  <span>Marquise Brown</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <img src={Avocado} alt="Blog Image" />
              <div className="post-content">
                <h2>Avocado Caesar Green Beans</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">Grab a bag of green beans, blitz up a quick avocado caesar, toast some panko, and let’s go! This is some type of magic..</p>
                <div className="post-author">
                  <img src={author1}alt="Author Image" />
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

            <div className="post-card">
              <img src={img2} alt="Blog Image" />
              <div className="post-content">
                <h2>Gorgeous Peach Salad</h2>
                <p>12 Feb 2023</p>
                <p className="post-excerpt">Fresh cucumber, bitey shallots, cooling mint, and sweet fleshy peaches coming together in serious flavor harmony! I love this peach salad.</p>
                <div className="post-author">
                  <img src={author1} alt="Author Image" />
                  <span>VedaShri</span>
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

export default Veg;
