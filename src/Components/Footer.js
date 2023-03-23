import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-2">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">About</h6>
            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <a href="#!" className="text-reset">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#!" className="text-reset">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#!" className="text-muted"><FaFacebookSquare></FaFacebookSquare></a></li>
              <li className="mb-2"><a href="#!" className="text-muted"><FaFacebookSquare></FaFacebookSquare></a></li>
              <li className="mb-2"><a href="#!" className="text-muted"><FaFacebookSquare></FaFacebookSquare></a></li>
            
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Contact</h6>
            <ul className="list-unstyled mb-0 ">
              <li className="mb-2 "><a href="#!" className="text-muted text-decoration-none">Mirpur,Dhake,Bangladesh</a></li>
              <li className="mb-2"><a href="#!" className="text-muted text-decoration-none">+8801478596202</a></li>
              <li className="mb-2"><a href="#!" className="text-muted text-decoration-none">info@gmail.com</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Newsletter</h6>
            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Enter your email address"/>
              </div>
              <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-dark py-2">
        <div className="container text-center">
          <p className="text-muted mb-0">© 2023 My Website, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;


