"use client"

import { useEffect } from "react"

export default function TabError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(reset)
    console.error(error)
  }, [error, reset])

  return (
    <main className="p-4 md:p-6">
      <div className="mb-8 space-y-4">
        <h1 className="font-semibold text-lg md:text-2xl">Error</h1>
        <p>Test 에러가 발생했습니다.</p>
      </div>
    </main>
  )
}
