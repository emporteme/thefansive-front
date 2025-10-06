import { TextField } from "../ui/text-field"
import { PersonalAvatarEditor } from "../widgets/personal-avatar-editor"

const PersonalTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      <PersonalAvatarEditor />
      <div className="flex w-full flex-col gap-2">
        <TextField label="Name" placeholder="This name is required to confirm orders." value="" />
        <TextField label="Username" placeholder="This name will be visible to other members" value="" />
      </div>
    </div>
  )
}

export { PersonalTabSection }
