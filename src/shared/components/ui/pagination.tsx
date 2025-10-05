"use client"

import React from "react"
import ReactPaginate from "react-paginate"
import { ArrowPaginationLeft, ArrowPaginationRight } from "@/shared/icons"
import { cn } from "@/shared/lib/utils"

interface PaginationProps {
  pageCount: number
  currentPage: number
  onPageChange: (selectedItem: { selected: number }) => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, onPageChange, className }) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={onPageChange}
        forcePage={currentPage}
        containerClassName="flex items-center gap-0"
        pageClassName="flex"
        pageLinkClassName="flex h-12 w-12 items-center justify-center rounded-2lg text-base font-medium text-gray-700  hover:bg-gray-100"
        activeClassName="text-white"
        activeLinkClassName="!text-white !bg-slate-900"
        previousClassName="flex"
        nextClassName="flex"
        previousLinkClassName="mr-6 flex h-12 w-12 items-center justify-center rounded-2lg bg-white text-gray-700  hover:bg-gray-50"
        nextLinkClassName="ml-6 flex h-12 w-12 items-center justify-center rounded-2lg bg-white text-gray-700  hover:bg-gray-50"
        disabledClassName="opacity-50 cursor-not-allowed"
        disabledLinkClassName="hover:bg-white"
        breakClassName="flex"
        breakLinkClassName="flex h-12 w-12 items-center justify-center text-gray-700"
        previousLabel={<ArrowPaginationLeft className="h-5 w-5" />}
        nextLabel={<ArrowPaginationRight className="h-5 w-5" />}
      />
    </div>
  )
}
