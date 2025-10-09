import React from "react"

interface QuestionLinkProps {
  onClick?: () => void
  question: string
  action: string
}

export const QuestionLink = ({ onClick, question, action }: QuestionLinkProps) => {
  return (
    <div className="flex items-center justify-center gap-1 p-4 text-center text-lg">
      <span className="text-slate-700">{question}</span>
      <button
        className="font-extrabold text-slate-700 underline-offset-6 hover:underline active:text-slate-900"
        onClick={onClick}
      >
        {action}
      </button>
    </div>
  )
}
