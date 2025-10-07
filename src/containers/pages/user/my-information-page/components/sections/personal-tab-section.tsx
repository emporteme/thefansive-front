import { ChangePassword } from "../widgets/change-password"
import { PersonalAvatarEditor } from "../widgets/personal-avatar-editor"
import { PersonalSaveBlock } from "../widgets/personal-save-block"

const PersonalTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      <PersonalAvatarEditor />

      <ChangePassword />
      <PersonalSaveBlock />
    </div>
  )
}

export { PersonalTabSection }
