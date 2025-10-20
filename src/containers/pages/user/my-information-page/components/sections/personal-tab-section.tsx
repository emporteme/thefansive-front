import { useRef } from "react"
import { ChangePassword, ChangePasswordRef } from "../widgets/change-password"
import { PersonalAvatarEditor } from "../widgets/personal-avatar-editor"
import { PersonalSaveBlock } from "../widgets/personal-save-block"

const PersonalTabSection: React.FC = () => {
  const changePasswordRef = useRef<ChangePasswordRef>(null)

  const handleSave = async () => {
    if (changePasswordRef.current) {
      await changePasswordRef.current.submit()
    }
  }

  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      <PersonalAvatarEditor />

      <ChangePassword ref={changePasswordRef} />
      <PersonalSaveBlock onSave={handleSave} />
    </div>
  )
}

export { PersonalTabSection }
