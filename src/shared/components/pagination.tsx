"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, totalItems, limit }) => {
  const searchParams = useSearchParams();

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  // Create URL for a specific page
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `/projects?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center gap-2 mt-12"
    >
      {/* Previous Button */}
      <Link
        href={createPageUrl(currentPage - 1)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 hover:bg-gray-700 text-white hover:scale-105"
        }`}
        aria-disabled={currentPage === 1}
      >
        Previous
      </Link>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <Link
          key={page}
          href={createPageUrl(page)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            currentPage === page
              ? "bg-red-500 text-white"
              : "bg-gray-800 hover:bg-gray-700 text-white hover:scale-105"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href={createPageUrl(currentPage + 1)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 hover:bg-gray-700 text-white hover:scale-105"
        }`}
        aria-disabled={currentPage === totalPages}
      >
        Next
      </Link>

      {/* Total Items Info */}
      <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
        Showing {(currentPage - 1) * limit + 1}-
        {Math.min(currentPage * limit, totalItems)} of {totalItems} projects
      </span>
    </motion.div>
  );
};

export default Pagination;