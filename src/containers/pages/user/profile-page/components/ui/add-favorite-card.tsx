interface AddFavoriteCardProps {
  title: string
  onAdd: () => void
}

const AddFavoriteCard: React.FC<AddFavoriteCardProps> = ({ title, onAdd }) => {
  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-transparent px-3 py-2.5 transition-colors hover:bg-slate-50"
      onClick={onAdd}
    >
      <div className="flex h-[18px] w-[18px] items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1.5L9 16.5M1.5 9L16.5 9" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-base font-medium text-slate-600">{title}</span>
      <div className="flex h-[18px] w-[18px] items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="7.5" stroke="#475569" strokeWidth="1.5" />
          <path d="M9 5.5L9 12.5M5.5 9L12.5 9" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </button>
  )
}

export { AddFavoriteCard }
