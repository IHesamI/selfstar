import React from 'react'
import { useLang } from '../hooks/useLang'

export default function Header() {
  const lang=useLang();
  return (
    <div>
      <button>{lang('click')}</button>
    </div>
  )
}
