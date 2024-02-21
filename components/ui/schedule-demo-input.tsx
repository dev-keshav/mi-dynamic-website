import { Input } from "../ui/input"

const ScheduleDemoInput = ({
  value,
  onChange,
  label,
  name,
  placeholder,
  ...rest
}: {
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
  label: string
  name: string
  placeholder?: string
}) => {
  return (
    <>
      <div className="mb-2 text-[15px] font-semibold text-black">{label}</div>
      <Input
        className="rounded-none px-2 text-black border-solid border-2"
        value={value}
        onChange={(e) => onChange(e, name)}
        placeholder={placeholder ?? label}
        {...rest}
      />
    </>
  )
}

export default ScheduleDemoInput
