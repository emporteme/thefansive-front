import React from "react"
import { Search as SearchIcon } from "@/shared/icons"

const Search: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute top-1/2 left-3 z-10 -translate-y-1/2">
        <SearchIcon className="h-5 w-5 text-gray-800" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-2lg h-12 w-[180px] border border-transparent bg-slate-100 py-3 pr-4 pl-11.5 text-base leading-[1.5] font-semibold tracking-[0] text-slate-900 placeholder-slate-700 transition-all duration-200 focus:border-slate-200 focus:outline-none"
      />
    </div>
  )
}

export default Search
