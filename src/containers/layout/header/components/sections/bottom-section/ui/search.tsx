import React from "react"
import { Search as SearchIcon } from "@/shared/icons"

const Search: React.FC = () => {
  return (
    <div className="relative flex items-center text-gray-700">
      <div className="pointer-events-none absolute left-3">
        <SearchIcon className="h-5 w-5" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-45 rounded-lg border border-gray-100 bg-gray-50 py-2.5 pr-4 pl-10 font-semibold placeholder-gray-400 transition-all duration-200 hover:border-gray-300 focus:border-transparent focus:ring-2 focus:ring-rose-500 focus:outline-none"
      />
    </div>
  )
}

export default Search
