import React from "react"
import NewCard from "./new-card"

const News = () => {
  return (
    <div className="mx-[5vw] flex flex-col gap-6 rounded-xl bg-[#F1F5F9] px-6 py-10">
      <h1 className="text-center text-3xl font-semibold text-slate-900">News that will be interesting to you</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <NewCard />
        <NewCard />
      </div>
    </div>
  )
}

export default News
