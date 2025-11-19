"use client";
import { Mail, Phone, Instagram, Facebook, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Footer() {
  const [isMettaMuseExpanded, setIsMettaMuseExpanded] = useState(false);
  const [isQuickLinksExpanded, setIsQuickLinksExpanded] = useState(false);
  const [isFollowUsExpanded, setIsFollowUsExpanded] = useState(false);

  return (
    <footer className="footer-root">
      <div className="footer-top-section">
        <div className="footer-top-inner-wrap">
          <div className="newsletter-section">
            <h3 className="section-heading mb-4">BE THE FIRST TO KNOW</h3>
            <p className="newsletter-sub-text mb-4">
              Sign up for updates from mettà muse.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
          <div className="contact-currency-group">
            <div className="contact-section">
              <h3 className="section-heading mb-4">CONTACT US</h3>
              <div className="contact-details">
                <p className="contact-phone">
                  <Phone size={14} />
                  +44 221 123 5360
                </p>
                <p className="contact-mail">
                  <Mail size={14} />
                  customersvc@mettamuse.com
                </p>
              </div>
            </div>
            <div className="currency-section">
              <h3 className="section-heading mb-4">CURRENCY</h3>
              <div className="currency-display">
                <div className="currency-icon"></div>
                <span>USD</span>
              </div>
              <p className="currency-note">
                Transactions will be completed in euros and a currency reference
                is available on request.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-accordion-group">
        <div
          className="mobile-accordion-head"
          onClick={() => setIsMettaMuseExpanded(!isMettaMuseExpanded)}
        >
          <h1>metta muse</h1>
          <ChevronDown
            size={20}
            className={isMettaMuseExpanded ? "rotate-180" : ""}
          />
        </div>
        {isMettaMuseExpanded && (
          <ul className="mobile-accordion-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Artisans</a>
            </li>
            <li>
              <a href="#">Boutiques</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">EU Compliances Docs</a>
            </li>
          </ul>
        )}

        <div
          className="mobile-accordion-head"
          onClick={() => setIsQuickLinksExpanded(!isQuickLinksExpanded)}
        >
          <h1>QUICK LINKS</h1>
          <ChevronDown
            size={20}
            className={isQuickLinksExpanded ? "rotate-180" : ""}
          />
        </div>
        {isQuickLinksExpanded && (
          <ul className="mobile-accordion-list">
            <li>
              <a href="#">Orders & Shipping</a>
            </li>
            <li>
              <a href="#">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#">Payment & Pricing</a>
            </li>
            <li>
              <a href="#">Return & Refunds</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        )}

        <div
          className="mobile-accordion-head"
          onClick={() => setIsFollowUsExpanded(!isFollowUsExpanded)}
        >
          <h1>FOLLOW US</h1>
          <ChevronDown
            size={20}
            className={isFollowUsExpanded ? "rotate-180" : ""}
          />
        </div>
        {isFollowUsExpanded && (
          <div className="mobile-follow-us-content">
            <div className="social-links">
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="desktop-footer-links">
        <div className="desktop-grid">
          <div className="link-column">
            <h2 className="link-title">mettà muse</h2>
            <ul className="link-list">
              <li>
                <a href="#" className="link-item">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Artisans
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Boutiques
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  EU Compliances Docs
                </a>
              </li>
            </ul>
          </div>

          <div className="link-column">
            <h3 className="section-heading-lg">QUICK LINKS</h3>
            <ul className="link-list">
              <li>
                <a href="#" className="link-item">
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Join/Login as a Seller
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Payment & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link-item">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          <div className="link-column">
            <div className="follow-us-section">
              <h3 className="section-heading-lg">FOLLOW US</h3>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="section-heading-lg">mettà muse ACCEPTS</h3>
              <div className="payment-icons">
                <Image
                  height={100}
                  width={100}
                  src="footer-frame.png"
                  alt="Payment Methods Accepted"
                  className="payment-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-section">
        <p className="copyright-text">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>

      <style jsx global>{`
        /* --- Base Styles --- */
        .footer-root {
          background-color: #000;
          color: #fff;
          padding-left: 0.75rem; /* px-3 */
          padding-right: 0.75rem; /* px-3 */
          font-family: "Inter", sans-serif; /* Ensuring a good default font */
        }

        /* Typography */
        .section-heading,
        .section-heading-lg {
          font-size: 0.875rem; /* text-sm */
          font-weight: 600; /* font-semibold */
        }

        /* --- Top Section: Newsletter/Contact/Currency --- */
        .footer-top-section {
          padding-top: 3rem; /* py-12 */
          padding-bottom: 3rem; /* py-12 */
          border-bottom: 1px solid #374151; /* border-b border-gray-700 */
        }

        .footer-top-inner-wrap {
          margin: 0 auto;
          display: flex;
          flex-direction: column; /* flex-col */
          justify-content: space-between;
          width: 100%;
          gap: 3rem; /* gap-12 */
        }

        /* Newsletter */
        .newsletter-section {
          width: 100%;
        }

        .newsletter-sub-text {
          color: #d1d5db; /* text-gray-300 - approximated */
          margin-bottom: 1rem; /* mb-4 */
        }

        .newsletter-form {
          display: flex;
          gap: 1.25rem; /* gap-5 */
        }

        .newsletter-input {
          flex-grow: 1; /* flex-1 */
          background-color: #fff;
          color: #000;
          padding: 0.5rem 0.75rem; /* px-3 py-2 */
          font-size: 0.875rem; /* text-sm */
          outline: none; /* focus:outline-none */
          border-radius: 0.25rem; /* added for better aesthetic */
        }

        .subscribe-button {
          background-color: #000;
          border: 1px solid #4b5563; /* border border-gray-600 */
          padding: 0.5rem 1.5rem; /* px-6 py-2 */
          font-weight: 600; /* font-semibold */
          transition: background-color 150ms ease-in-out;
          cursor: pointer;
        }

        .subscribe-button:hover {
          background-color: #1f2937; /* hover:bg-gray-800 */
        }

        /* Contact & Currency Group */
        .contact-currency-group {
          display: flex;
          flex-direction: column;
          gap: 1.25rem; /* gap-5 */
        }

        /* Contact Section */
        .contact-section {
          border-top: 1px solid #6b7280; /* border-y border-gray-500 */
          border-bottom: 1px solid #6b7280;
          padding-top: 0.75rem; /* py-3 */
          padding-bottom: 0.75rem; /* py-3 */
        }

        .contact-details {
          display: flex;
          flex-direction: column;
        }

        .contact-phone {
          display: none; /* hidden */
          align-items: center;
          gap: 0.5rem; /* gap-2 */
          margin-bottom: 0.75rem; /* mb-3 */
          font-size: 0.875rem;
        }

        .contact-mail {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* gap-2 */
          font-size: 0.875rem;
        }

        /* Currency Section */
        .currency-section {
          border-bottom: 1px solid #6b7280; /* border-b border-gray-500 */
          padding-bottom: 1.25rem; /* pb-5 */
        }

        .currency-display {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* gap-2 */
        }

        .currency-icon {
          width: 1rem; /* w-4 */
          height: 1rem; /* h-4 */
          border-radius: 9999px; /* rounded-full */
          background-color: #9ca3af; /* bg-gray-400 */
        }

        .currency-note {
          margin-top: 1rem; /* mt-4 */
          display: none; /* hidden */
          font-size: 0.875rem;
          color: #d1d5db; /* text-gray-300 */
        }

        /* --- Mobile Accordions --- */
        .mobile-accordion-group {
          display: block; /* block */
        }

        .mobile-accordion-head {
          border-top: 1px solid #fff; /* border-t border-white */
          padding: 1.25rem; /* p-5 */
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .mobile-accordion-head h1 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
        }

        .mobile-accordion-list {
          padding: 1rem 1.25rem;
          list-style: none;
          margin: 0;
          font-size: 0.875rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-bottom: 1px solid #fff;
        }

        .mobile-accordion-list a {
          color: #d1d5db;
          text-decoration: none;
        }

        .mobile-follow-us-content {
          border-bottom: 1px solid #fff;
          padding: 1rem 1.25rem;
        }

        /* --- Desktop Footer Links --- */
        .desktop-footer-links {
          display: none; /* hidden */
          padding: 3rem 0; /* py-12 */
          border-bottom: 1px solid #374151; /* border-b border-gray-700 */
        }

        .desktop-grid {
          max-width: 80rem; /* max-w-7xl */
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* grid-cols-4 */
          gap: 3rem; /* gap-12 */
        }

        .link-column {
          font-size: 0.875rem; /* text-sm for all links */
        }

        .link-title {
          font-size: 1.125rem; /* text-lg */
          font-weight: 700; /* font-bold */
          margin-bottom: 1.5rem; /* mb-6 */
        }

        .section-heading-lg {
          margin-bottom: 1.5rem; /* mb-6 */
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: 0.5rem; /* space-y-2 */
        }

        .link-item {
          color: #d1d5db; /* text-gray-400 */
          text-decoration: none;
          transition: color 150ms ease-in-out;
        }

        .link-item:hover {
          color: #fff;
        }

        .follow-us-section {
          margin-bottom: 2rem; /* mb-8 */
        }

        .social-links {
          display: flex;
          gap: 1rem; /* gap-4 */
        }

        .social-icon {
          color: #9ca3af; /* text-gray-400 */
          transition: color 150ms ease-in-out;
        }

        .social-icon:hover {
          color: #fff;
        }

        .payment-image {
          width: 100%; /* Mocking the effect of w-[400px] on a desktop column */
          max-width: 400px;
          height: auto;
          border-radius: 0.25rem; /* Adding slight radius for style */
        }

        /* --- Copyright --- */
        .copyright-section {
          padding-top: 1.5rem; /* py-6 */
          padding-bottom: 1.5rem; /* py-6 */
          text-align: center;
        }

        .copyright-text {
          color: #6b7280; /* text-gray-500 */
          font-size: 0.875rem;
          margin: 0;
        }

        /* --- Media Queries (md breakpoint: 768px) --- */
        @media (min-width: 768px) {
          .footer-root {
            padding-left: 5rem; /* md:px-20 */
            padding-right: 5rem; /* md:px-20 */
          }

          .footer-top-section {
            padding-left: 2rem; /* md:px-8 */
            padding-right: 2rem; /* md:px-8 */
          }

          .footer-top-inner-wrap {
            flex-direction: row; /* md:flex-row */
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;
          }

          .newsletter-section {
            width: 50%;
          }

          .newsletter-input {
            width: 400px; /* md:w-[400px] */
            flex-grow: 0;
          }

          .contact-currency-group {
            width: 50%; /* md:w-1/2 */
            flex-direction: row;
            gap: 3rem;
          }

          .contact-section {
            padding: 0; /* md:py-0 */
            border-top: none; /* md:border-0 */
            border-bottom: none; /* md:border-0 */
            flex-grow: 1;
          }

          .contact-details {
            flex-direction: column;
          }

          .contact-phone {
            display: flex; /* md:flex */
          }

          .currency-section {
            padding: 0; /* md:py-0 */
            border-bottom: none; /* md:border-0 */
            flex-grow: 1;
          }

          .currency-note {
            display: block; /* md:block */
          }

          .mobile-accordion-group {
            display: none; /* md:hidden */
          }

          .desktop-footer-links {
            display: block; /* md:block */
          }
        }

        /* Utility for Chevron Icon */
        .rotate-180 {
          transform: rotate(180deg);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
