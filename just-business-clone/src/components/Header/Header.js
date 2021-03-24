import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import logo from "../../images/logo.png";
import './header.css';

export default class Navbar extends Component {
  render() {
    return (
      <header class='header'>
        <img src={logo} alt='logo' />
        <nav>
          <ul class='header-links'>
            <li class='header-links-item'>
              <a href='/'>Starting a Small Business</a>
              <ul>
                <li class='header-menu__content-item'>
                  <a href='/starting-a-small-business/how-to'>
                    How to Start a Small Business
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/starting-a-small-business/best-small-business-ideas'>
                    Best Small Business Ideas
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/starting-a-small-business/most-profitable-business'>
                    Most Profitable Businesses to Start
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/starting-a-small-business/writing-a-business-plan'>
                    How to Write a Business Plan
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/starting-a-small-business/how-to-come-up-with-a-business-name'>
                    How to Come Up With a Business Name
                  </a>
                </li>
              </ul>
            </li>
            <li class='header-links-item'>
              <a href='/'>Starting a Franchise</a>
              <ul>
                <li class='header-menu__content-item'>
                  <a href='/franchising/how-does-franchising-work'>
                    How Does Franchising Work?
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/franchising/best-low-cost-franchises'>
                    Best Low-Cost Franchises
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/franchising/best-franchises'>
                    Best Franchises to Own
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/franchising/most-profitable-franchises'>
                    Most Profitable Franchises
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/franchising/buying-a-franchise'>
                    How to Buy a Franchise
                  </a>
                </li>
              </ul>
            </li>
            <li class='header-links-item'>
              <a href='/'>Incorporating &amp; Other Legal Needs</a>
              <ul>
                <li class='header-menu__content-item'>
                  <a href='/legal/online-legal-services'>
                    Best Online Legal Services
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/legal/business-entity'>
                    Types of Business Entities
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/legal/business-license'>
                    How to Get a Business License
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/legal/llc-vs-sole-proprietorship'>
                    LLC vs. Sole Proprietorship
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/legal/sole-proprietors'>Sole Proprietors</a>
                </li>
              </ul>
            </li>
            <li class='header-links-item'>
              <a href='/'>Ecommerce</a>
              <ul>
                <li class='header-menu__content-item'>
                  <a href='/ecommerce/how-to-start-an-online-store'>
                    How to Start an Online Store
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/ecommerce/ecommerce-website'>
                    How to Build an Ecommerce Website
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/ecommerce/ecommerce-website-builder'>
                    Best Ecommerce Website Builders
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/ecommerce/how-to-find-products-to-sell-on-amazon'>
                    How to Find Products to Sell on Amazon
                  </a>
                </li>
              </ul>
            </li>
            <li class='header-links-item'>
              <a href='/'>HR &amp; Hiring</a>
              <ul>
                <li class='header-menu__content-item'>
                  <a href='/hr/hiring-first-employee'>
                    How to Hire Your First Employee
                  </a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/hr/free-hr-software'>Best Free HR Software</a>
                </li>
                <li class='header-menu__content-item'>
                  <a href='/hr/how-to-hire-freelancers'>
                    How to Hire Freelancers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </header>
    );
  }
}
