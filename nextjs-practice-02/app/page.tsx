import { Todo } from '@/components/layouts/todo'
import { AlertDialog } from '@/components/ui/alert-dialog'

export default function Home() {
  return (
    <main className='flex-1 pt-[60px] grid max-w-[700px] min-h-[calc(100vh_-_1rem)] divide-y p-4 text-sm lg:min-h-[calc(100vh_-_1.5rem)]'>
      <AlertDialog>
        <div className='flex-1 overflow-auto py-4 lg:py-6'>
          <Todo title={'buy eggs'} description={'Need to get eggs, milk, and bread'} />
        </div>
      </AlertDialog>
    </main>
  )
}
