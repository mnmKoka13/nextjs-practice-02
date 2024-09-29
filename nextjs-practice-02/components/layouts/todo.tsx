'use client'

import React, { FC, useState } from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { TrashIcon } from '../ui/icons/TrashIcon'

type Props = {
  title: string;
  description: string;
}

export const Todo: FC<Props> = ({ title, description }) => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const handleDone = () => {
    setIsDone(!isDone);
  }

  return (
    <div className='flex items-center gap-4 p-4'>
      <Checkbox className='mx-auto' id='task1' onCheckedChange={handleDone} />
      <div className={`flex-1 min-w-0 ${isDone && "line-through"}`}>
        <h3 className='font-medium leading-none'>{title}</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{description}</p>
      </div>
      <Button className='rounded-full w-8 h-8' size='icon' variant='destructive'>
        <TrashIcon className='w-4 h-4' />
      </Button>
    </div>
  )
}
