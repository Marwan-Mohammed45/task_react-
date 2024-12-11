import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // استيراد ملف CSS
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>
      <section>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 umg"
              src="/images/html-css-collage-concept-with-hacker.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 umg"
              src="/images/html-css-collage-concept-with-person.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 umg"
              src="/images/html-css-collage-concept.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className='section2'>
        <h1>Create user interfaces from components</h1>
        <p>
          React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
        </p>
      </section>

      <section className='section3'>
        <img src="/images/bernd-dittrich-uL1TI7xyLHQ-unsplash.jpg" alt="" />
        <img src="/images/bernd-dittrich-vkH9T8NNNU8-unsplash.jpg" alt="" />
        <img src="/images/madeline-n-jVP0wxSWsHM-unsplash.jpg" alt="" />
      </section>

      <section className='section4'>
        <div className='react'>
          <h2>React Js</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias accusantium amet atque laudantium modi reiciendis quam nam. Quae cumque amet iusto eaque sit dolores placeat ipsam vero voluptatem autem!</p>
          <Button variant="primary">React Js</Button>
        </div>
        <div>
          <img src="/images/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg" alt="" />
        </div>
      </section>

      <section className='section4'>
        <div>
          <img src="/images/nangialai-stoman-1Lt1ny9nGWY-unsplash.jpg" alt="" />
        </div>
        <div className='react'>
          <h2>React Js</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias accusantium amet atque laudantium modi reiciendis quam nam. Quae cumque amet iusto eaque sit dolores placeat ipsam vero voluptatem autem!</p>
          <Button variant="primary">React Js</Button>
        </div>
      </section>

      <section className='section5'>
        <div>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        </div>
        <div>
          <h2>Component-Based</h2>
          <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        </div>
        <div>
          <h2>Learn Once, Write Anywhere</h2>
          <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
        </div>
      </section>       
    </div>
  );
};

export default Home;
