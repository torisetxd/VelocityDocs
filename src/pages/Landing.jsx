export default function Landing() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black transition-colors">
      <div className="max-w-2xl p-8 bg-white dark:bg-zinc-950 rounded-xl shadow-lg dark:shadow-none border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-zinc-900 dark:text-white text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-zinc-600 dark:text-zinc-400">This is the landing page.</p>
      </div>
    </div>
  )
}
