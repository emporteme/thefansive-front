"use client"

import React from "react"
import type { AuthModalMode } from "../types"

interface SignUpSectionProps {
  onModeChange: (mode: AuthModalMode) => void
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ onModeChange: _onModeChange }) => {
  return (
    <>
      <h1 className="mt-[94px] text-[32px] leading-[48px] font-normal text-black">
        Welcome to <br /> <span className="text-[40px] leading-[48px] font-bold">Thefansive platform</span>
      </h1>
    </>
  )
}

export default SignUpSection
