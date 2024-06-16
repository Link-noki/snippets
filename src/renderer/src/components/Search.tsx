import { useState } from 'react'
export default function Search(): JSX.Element {
  const [search, setSearch] = useState('')
  return (
    <div className="bg-slate-50 p-5 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-lg bg-slate-200 text-slate-500"
          placeholder="Search"
        />
      </section>
    </div>
  )
}
