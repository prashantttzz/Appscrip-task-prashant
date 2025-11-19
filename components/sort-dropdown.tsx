"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface SortOption {
  id: string;
  label: string;
}

const sortOptions: SortOption[] = [
  { id: "recommended", label: "RECOMMENDED" },
  { id: "newest", label: "NEWEST FIRST" },
  { id: "popular", label: "POPULAR" },
  { id: "price-low", label: "PRICE: LOW TO HIGH" },
  { id: "price-high", label: "PRICE: HIGH TO LOW" },
];

interface SortDropdownProps {
  onSortChange?: (sortId: string) => void;
}

export function SortDropdown({ onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("recommended");

  const handleSelect = (sortId: string) => {
    setSelectedSort(sortId);
    setIsOpen(false);
    onSortChange?.(sortId);
  };

  const selectedLabel =
    sortOptions.find((opt) => opt.id === selectedSort)?.label || "RECOMMENDED";

  return (
    <div className="sd-root">
      <button onClick={() => setIsOpen(!isOpen)} className="sd-trigger">
        {selectedLabel}
        <ChevronDown className={`sd-icon ${isOpen ? "sd-rot" : ""}`} />
      </button>

      {isOpen && (
        <div className="sd-menu">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className="sd-item"
            >
              {selectedSort === option.id ? (
                <Check className="sd-check" />
              ) : (
                <div className="sd-placeholder" />
              )}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && <div className="sd-overlay" onClick={() => setIsOpen(false)} />}

      <style>
        {`
          .sd-root {
            position: relative;
            display: inline-block;
          }

          .sd-trigger {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.05em;
            background: none;
            border: none;
            cursor: pointer;
            color: #374151;
          }

          .sd-trigger:hover {
            color: #111;
          }

          .sd-icon {
            width: 16px;
            height: 16px;
            transition: transform 0.2s ease;
          }

          .sd-rot {
            transform: rotate(180deg);
          }

          .sd-menu {
            position: absolute;
            right: 0;
            top: calc(100% + 8px);
            width: 220px;
            background: white;
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08);
            z-index: 50;
          }

          .sd-item {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.05em;
            background: none;
            border: none;
            cursor: pointer;
            text-align: left;
          }

          .sd-item:hover {
            background: #f9fafb;
          }

          .sd-check {
            width: 16px;
            height: 16px;
          }

          .sd-placeholder {
            width: 16px;
            height: 16px;
          }

          .sd-overlay {
            position: fixed;
            inset: 0;
            z-index: 10;
          }
        `}
      </style>
    </div>
  );
}
