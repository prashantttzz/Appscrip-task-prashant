import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="hd-root">
      <div className="hd-top">
        <div className="hd-left">
          <Menu className="hd-menu-mobile" />
          <Image src="logo.svg" height={1000} width={1000} alt="logo" className="hd-logo" />
        </div>

        <h1 className="hd-title">LOGO</h1>

        <div className="hd-right">
          <Image
            src="icons.png"
            height={1000}
            width={1000}
            alt="icons"
            className="hd-icons-desktop"
          />
          <Image
            src="mobile-icons.png"
            height={1000}
            width={1000}
            alt="icons"
            className="hd-icons-mobile"
          />
        </div>
      </div>

      <nav className="hd-nav">
        <div className="hd-nav-items">
          <a href="#">SHOP</a>
          <a href="#">DEALS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </div>
      </nav>

      <div className="hd-breadcrumb"> <span className="hd-gray">HOME |</span> SHOP </div>

      <style>
        {`
          .hd-root {
            background: white;
            padding: 10px;
            padding-left: 20px;
            padding-right: 20px;
            border-bottom: 1px solid #e5e7eb;
          }

          @media (min-width: 768px) {
            .hd-root {
              padding-left: 80px;
              padding-right: 80px;
            }
          }

          .hd-top {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            padding: 16px 0;
            border-bottom: 1px solid #d1d5db;
          }

          @media (min-width: 768px) {
            .hd-top {
              border-bottom: none;
            }
          }

          .hd-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .hd-menu-mobile {
            display: block;
            height: 24px;
          }

          @media (min-width: 768px) {
            .hd-menu-mobile {
              display: none;
            }
          }

          .hd-logo {
            width: 32px;
            height: 32px;
          }

          .hd-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            font-family: var(--font-normal);
          }

          @media (min-width: 768px) {
            .hd-title {
              font-size: 32px;
            }
          }

          .hd-right {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

          .hd-icons-desktop {
            width: 200px;
            height:20px;
            display: none;

          }

          @media (min-width: 768px) {
            .hd-icons-desktop {
              display: block;
            }
          }

          .hd-icons-mobile {
            width: 80px;
            height:20px;
            display: block;
          }

          @media (min-width: 768px) {
            .hd-icons-mobile {
              display: none;
            }
          }

          .hd-nav {
            display: none;
          }

          @media (min-width: 768px) {
            .hd-nav {
              display: block;
            }
          }

          .hd-nav-items {
            display: flex;
            justify-content: center;
            gap: 32px;
            padding: 12px 0;
          }

          .hd-nav-items a {
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            color: black;
          }

          .hd-nav-items a:hover {
            color: #4b5563;
          }

          .hd-breadcrumb {
            display: block;
            margin-top: 8px;
            font-size: 14px;
          }

          @media (min-width: 768px) {
            .hd-breadcrumb {
              display: none;
            }
          }

          .hd-gray {
            color: #d1d5db;
            margin-right: 4px;
          }
        `}
      </style>
    </header>
  );
}
