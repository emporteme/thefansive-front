interface TextFieldProps {
  label: string
  placeholder: string
  value: string
  onChange?: () => void
}

const TextField: React.FC<TextFieldProps> = ({ value, label, placeholder, onChange }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-dark-bg text-sm font-normal">{label}</label>
      <input
        value={value}
        className="w-full rounded-md border border-gray-300 p-2"
        placeholder={placeholder}
        type="text"
        onChange={onChange}
      />
    </div>
  )
}

export { TextField }
