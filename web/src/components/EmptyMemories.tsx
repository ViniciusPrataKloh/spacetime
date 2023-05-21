import Link from 'next/link'

export function EmptyMemories() {
  return (
    <p className="w-[360px] text-center leading-relaxed">
      Você ainda não registrou nenhuma lembrança, comece a{' '}
      <Link className="underline hover:text-gray-50" href="/memories/new">
        criar agora
      </Link>
      !
    </p>
  )
}
