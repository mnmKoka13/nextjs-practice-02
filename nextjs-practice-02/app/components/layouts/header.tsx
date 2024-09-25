import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <header className="flex fixed w-[100vw] items-center h-[60px] px-4 border-b bg-white">
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-xl">
          <Link href="/">Todo List app</Link>
        </h1>
      </div>
      <Button size="sm">New Task</Button>
    </header>
  )
}

export default Header