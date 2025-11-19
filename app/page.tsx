import { Metadata } from "next";
import { Header } from "@/components/header";
import { ProductGrid } from "@/components/product-grid";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shop – Product Listing",
  description:
    "Browse the latest products available on our shop. Server-side rendered for performance and SEO.",
};

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const data = await res.json();

    if (!Array.isArray(data)) return [];

    return data;
  } catch (e) {
    return [];
  }
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <div className="page">
        <div className="topBar">
          <div className="topBarText topBarHideMobile">
            <Image
              src="/element-4.png"
              alt="element-logo"
              height={100}
              width={100}
              className="topBarIcon"
            />
            Lorem ipsum dolor
          </div>
          <div className="topBarText topBarHideMobile">
            <Image
              src="/element-4.png"
              alt="element-logo"
              height={100}
              width={100}
              className="topBarIcon"
            />
            Lorem ipsum dolor
          </div>
          <div className="topBarText">
            <Image
              src="/element-4.png"
              alt="element-logo"
              height={100}
              width={100}
              className="topBarIcon"
            />
            Lorem ipsum dolor
          </div>
        </div>

        <Header />

        <div className="contentWrapper">
          <main className="mainContent">
            <ProductGrid products={products} />
          </main>
        </div>

        <Footer />
      </div>

      <style>
        {`
        .page {
          min-height: 100vh;
          display: flex;
          padding:0px;
          flex-direction: column;
          background: white;
        }

        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: black;
          padding: 8px 20px;
        }

        .topBarText {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #EB4C6B;
        }

        .topBarIcon {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .topBarHideMobile {
            display: none;
          }
        }

        .contentWrapper {
          display: flex;
          flex: 1;
          padding: 8px;
        }

        @media (min-width: 768px) {
          .contentWrapper {
            padding-left: 80px;
            padding-right: 80px;
          }
        }

        .mainContent {
          flex: 1;
        }
      `}
      </style>
    </>
  );
}
