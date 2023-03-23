import React from 'react';
import Image1 from '../images/b1.jpg'
import Image2 from '../images/b2.jpg'
import Image3 from '../images/b3.jpg'
import Image4 from '../images/b4.jpg'
import { FaStar } from "react-icons/fa";

const BrandPage = () => {
    return (
        <section className='featured my-5 pb-5'>
            <div className='container text-center mt-5 py-5'>
                <h3>Our Featured</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Sed debitis facilis culpa porro commodi tenetur.</p>
            </div>
            <div className='row mx-auto container-fluid'>
                <div className='product text-center col-lg-3 col-md-4 col-12'>
                    <img className='img-fluid' src={Image1} alt="b1" />
                    <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <h5 className='p-name'>Apple Laptop</h5>
                    <h4 className='p-price'>$1250.00</h4>
                    <button className='btn-1'>Buy Now</button>
                </div>
                <div className='product text-center col-lg-3 col-md-4 col-12'>
                    <img className='img-fluid' src={Image2} alt="b2" />
                    <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <h5 className='p-name'>Apple Watch</h5>
                    <h4 className='p-price'>$150.00</h4>
                    <button className='btn-1'>Buy Now</button>
                </div>
                <div className='product text-center col-lg-3 col-md-4 col-12'>
                    <img className='img-fluid' src={Image3} alt="b3" />
                    <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <h5 className='p-name'>Iphone 14pro</h5>
                    <h4 className='p-price'>$1250.00</h4>
                    <button className='btn-1'>Buy Now</button>
                </div>
                <div className='product text-center col-lg-3 col-md-4 col-12'>
                    <img className='img-fluid' src={Image4} alt="b1" />
                    <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <h5 className='p-name'>Apple Airpods</h5>
                    <h4 className='p-price'>$120.00</h4>
                    <button className='btn-1'>Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default BrandPage;