"use client"

import React from "react"
import ReactPaginate from "react-paginate"
import ArrowLeft from "@/shared/icons/(navigation)/arrow-left"
import ArrowRight from "@/shared/icons/(navigation)/arrow-right"
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
        pageLinkClassName="flex h-12 w-12 items-center justify-center rounded-xl text-base font-medium text-[#364153] transition-colors hover:bg-gray-50"
        activeClassName="bg-[#0F1729] text-white rounded-xl"
        activeLinkClassName="!text-white"
        previousClassName="flex"
        nextClassName="flex"
        previousLinkClassName="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#31415C] transition-colors hover:bg-gray-50"
        nextLinkClassName="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#31415C] transition-colors hover:bg-gray-50"
        disabledClassName="opacity-50 cursor-not-allowed"
        disabledLinkClassName="hover:bg-white"
        breakClassName="flex"
        breakLinkClassName="flex h-12 w-12 items-center justify-center text-[#364153]"
        previousLabel={<ArrowLeft className="h-5 w-5" />}
        nextLabel={<ArrowRight className="h-5 w-5" />}
      />
    </div>
  )
}
