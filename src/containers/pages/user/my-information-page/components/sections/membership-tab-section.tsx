import { TextField } from "../ui/text-field"

const MembershipTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-2">
      <TextField label="Name" placeholder="This name is required to confirm orders." />
      <TextField label="Username" placeholder="This name will be visible to other members" />
    </div>
  )
}

export { MembershipTabSection }
