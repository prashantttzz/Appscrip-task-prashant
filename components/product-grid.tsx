"use client";
import { useState } from "react";
import { Heart, ChevronLeft, ChevronDown, X } from "lucide-react";
import { SortDropdown } from "./sort-dropdown";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  outOfStock?: boolean;
}

interface FilterCategory {
  name: string;
  items: string[];
}

const filterCategories: FilterCategory[] = [
  { name: "IDEAL FOR", items: ["All", "SHOP", "BAGS", "ACCESSORIES"] },
  { name: "OCCASIONS", items: ["All", "NEW", "BESTSELLERS", "FEATURED"] },
  { name: "WORK", items: ["All", "LEATHER", "CANVAS", "SYNTHETIC"] },
  { name: "FABRIC", items: ["All", "BRAND A", "BRAND B", "BRAND C"] },
  { name: "SEGMENT", items: ["All", "UNDER $50", "$50-$100", "$100+"] },
  { name: "SUITABLE FOR", items: ["All", "ECO-FRIENDLY", "RECYCLED"] },
  { name: "RAW MATERIALS", items: ["All", "TRENDING 1", "TRENDING 2"] },
  { name: "PATTERN", items: ["All", "TRENDING 1", "TRENDING 2"] },
];


export function ProductGrid({ products }: { products: Product[] }) {
  const [sortBy, setSortBy] = useState("recommended");
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    filterCategories[0].name
  );
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

  const handleSortChange = (sortId: string) => {
    setSortBy(sortId);
    let sorted = [...products];

    switch (sortId) {
      case "newest":
        sorted = sorted.sort((a, b) => b.id - a.id); 
        break;
      case "popular":
        sorted = sorted.sort(() => Math.random() - 0.5);
        break;
      case "price-low":
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = products; 
    }

    setSortedProducts(sorted);
  };

  return (
    <div className="pg-root">
      <div className="pg-hero">
        <h2 className="pg-title">DISCOVER OUR PRODUCTS</h2>
        <p className="pg-sub">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="pg-controls">
        <div className="pg-left-controls">
          <div className="pg-count desktop-only">
            {sortedProducts.length.toLocaleString()} ITEMS
          </div>
          <button
            className="pg-toggle desktop-only"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <ChevronLeft className={`icon-sm ${sidebarOpen ? '' : 'rot-right'}`} /> 
            {sidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className="pg-right-controls">
          <button
            className="pg-filter-toggle mobile-only"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >

            {sidebarOpen ? "HIDE FILTER" : "FILTER"}
          </button>

          <div className="pg-sort">
            <SortDropdown onSortChange={handleSortChange} />
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div className="pg-overlay mobile-only" onClick={() => setSidebarOpen(false)} />
      )}

      <div className={`pg-main ${sidebarOpen ? 'sidebar-on' : 'sidebar-off'}`}>
        {(sidebarOpen) && ( 
          <aside
            className={`pg-sidebar ${sidebarOpen ? "open" : ""}`}
          >
            <div className="pg-sidebar-top mobile-only">
              <button className="pg-close" onClick={() => setSidebarOpen(false)}>
                <X />
              </button>
            </div>

            <div className="pg-sidebar-inner">
              <label className="pg-customize">
                <input type="checkbox" />{" "}
                <span className="pg-customize-label">CUSTOMIZE</span>
              </label>

              <div className="pg-filters">
                {filterCategories.map((category) => (
                  <div className="pg-filter-block" key={category.name}>
                    <button
                      className="pg-filter-head"
                      onClick={() =>
                        setExpandedCategory(
                          expandedCategory === category.name
                            ? null
                            : category.name
                        )
                      }
                    >
                      <span className="category-name">{category.name}</span>
                      <ChevronDown
                        className={`icon-sm category-name ${
                          expandedCategory === category.name ? "rot" : ""
                        }`}
                      />
                    </button>

                    <p className="pg-filter-lead">{category.items[0]}</p>

                    {expandedCategory === category.name && (
                      <div className="pg-filter-items">
                        {category.items.map((item, idx) => (
                          <label className="pg-filter-item" key={idx}>
                            <input type="checkbox" />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
        <main className="pg-content">
          <div className="pg-grid">
            {sortedProducts.map((product) => (
              <article className="pg-card" key={product.id}>
                <div className="pg-image-wrap">
                  {product.outOfStock && (
                    <div className="pg-oos">OUT OF STOCK</div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name || "Product image"}
                    className="pg-image"
                  />
                </div>

                <div className="pg-card-body">
                  <h3 className="pg-product-name">
                    {product.name || "PRODUCT NAME"}
                    <button className="pg-heart-mobile mobile-only">
                      <Heart className="icon-sm" />
                    </button>
                  </h3>

                  <div className="pg-card-bottom">
                    <p className="pg-price">
                      Sign in or create an account to see pricing.
                    </p>
                    <button className="pg-heart desktop-only">
                      <Heart className="icon-sm" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <style>
        {`
          :root {
            --gap-xs: 8px;
            --gap-sm: 16px;
            --gap-md: 32px;
            --color-muted: #6b7280;
            --border: #e5e7eb;
            --sidebar-width: 350px; /* Define sidebar width as a variable */
          }

          .pg-root {
            color: #111827;
            background: #ffffff;
          }

          .pg-hero {
            text-align: center;
            border-bottom: 1px solid var(--border);
            padding: 20px 16px;
          }
          .category-name{
          color:black}
          .pg-title {
            margin: 0 0 8px;
            font-size: 28px;
            line-height: 1.05;
          }

          .pg-sub {
            margin: 0 auto;
            max-width: 680px;
            color: var(--color-muted);
            font-size: 13px;
          }

          .pg-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid var(--border);
          }

          .pg-left-controls,
          .pg-right-controls {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .pg-count {
            font-weight: 700;
            font-size: 13px;
          }

          .pg-toggle,
          .pg-filter-toggle {
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 13px;
            color: #4b5563;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .pg-filter-toggle {
            padding-right: 12px;
            border-right: 1px solid #d1d5db;
          }
          
          .pg-sort-select {
              border: 1px solid var(--border);
              padding: 6px 10px;
              border-radius: 4px;
              font-size: 13px;
              cursor: pointer;
          }

          /* Mobile Overlay */
          .pg-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.3);
            z-index: 20;
          }

          .pg-main {
            display: flex; /* Default flex for mobile/tablet */
            gap: 32px;
            padding: 16px;
          }

          /* Mobile Sidebar: fixed and slides in */
          .pg-sidebar {
            width: var(--sidebar-width);
            background: #ffffff;
            z-index: 40;
            transition: transform 260ms ease;
            
            /* Mobile positioning */
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            transform: translateX(-100%);
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          }

          .pg-sidebar.open {
            transform: translateX(0);
          }
          
          /* Desktop visibility/layout */
          @media (min-width: 1024px) {
            .pg-sidebar {
                /* Reset mobile positioning */
                position: static;
                transform: translateX(0) !important;
                /* Add desktop border */
                border-right: 1px solid #e5e7eb;
                /* Remove box shadow for static element */
                box-shadow: none; 
            }
          }


          .pg-sidebar-inner {
            padding: 24px;
          }

          .pg-sidebar-top {
            display: flex;
            justify-content: flex-end;
            padding: 12px;
          }

          .pg-customize {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 18px;
            font-weight: 700;
          }

          .pg-filters {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .pg-filter-block {
            border-bottom: 1px solid #e9e9e9;
            padding: 12px 0;
          }

          .pg-filter-head {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 700;
            font-size: 14px;
          }

          .pg-filter-lead {
            margin: 6px 0 8px;
            font-size: 12px;
          }

          .pg-filter-items {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .pg-content {
            flex: 1;
            /* When sidebar is closed on desktop, we want content to take full width */
            width: 100%;
          }

          .pg-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .pg-card {
            background: #fff;
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            transition: transform 160ms ease;
          }

          .pg-card:hover {
            transform: translateY(-4px);
          }

          .pg-image-wrap {
            position: relative;
            height: 160px;
            shadow:2xl;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .pg-image {
            max-height: 100%;
  filter: drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.15));

            max-width: 100%;
            object-fit: contain;
          }

          .pg-oos {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.04);
            font-weight: 700;
            font-size: 12px;
            z-index: 10;
          }

          .pg-card-body {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .pg-product-name {
            font-size: 14px;
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .pg-card-bottom {
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
          
          .pg-price {
            font-size: 13px;
            color: #6b7280;
            margin: 0;
          }

          .pg-heart,
          .pg-heart-mobile,
          .pg-close {
            background: none;
            border: none;
            color: #9ca3af;
            cursor: pointer;
          }

          .icon-sm {
            width: 16px;
            height: 16px;
            transition: transform 200ms ease;
          }

          .rot {
            transform: rotate(180deg);
          }
          
          .rot-right {
              transform: rotate(-90deg); /* Used for the SHOW FILTER button */
          }

          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: inline-flex;
          }

          @media (min-width: 1024px) {
            
            .pg-main {
              /* Desktop: use grid to manage layout shift when filter is shown/hidden */
              display: grid;
              grid-template-columns: minmax(0, 1fr); /* Default to content only */
              gap: 32px;
   
            }

            .pg-main.sidebar-on {
                /* When sidebar is open, allocate space for it */
                grid-template-columns: var(--sidebar-width) minmax(0, 1fr); 
            }

            .pg-sidebar-top {
              display: none;
            }

            .desktop-only {
              display: inline-flex;
            }

            .mobile-only {
              display: none !important; /* Important to hide overlay/filter button */
            }

            .pg-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }

            .pg-image-wrap {
              height: 260px;
            }
          }

          /* Mobile sidebar positioning (kept for clarity, though combined with base .pg-sidebar now) */
          @media (max-width: 1023px) {
             .pg-sidebar {
                 transform: translateX(-100%);
             }
             .pg-sidebar.open {
                 transform: translateX(0);
             }
          }

          @media (max-width: 480px) {
            .pg-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }

            .pg-image-wrap {
              height: 140px;
            }
          }
        `}
      </style>
    </div>
  );
}
