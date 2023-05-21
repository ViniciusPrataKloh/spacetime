import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function New() {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 p-16">
      <Link
        href="/"
        className="hover-text-gray-100 flex items-center gap-1 text-sm text-gray-200"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
