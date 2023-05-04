"use client"

import { Button } from "@/components/ui/button"
import TipRow from "@/components/TipRow"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6 pb-8 pt-6 lg:container md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-center text-2xl font-bold uppercase tracking-[0.5rem] text-secondary">
          split
          <br />
          tter
        </h1>

        <div className="flex w-full flex-col justify-center rounded-lg bg-white p-4 lg:flex-row">
          <div className="p-2"> first</div>
          <div className="space-y-8 rounded-xl bg-secondary p-6 py-8">
            <TipRow name="Tip Amount" amount={0} />
            <TipRow name="Total" amount={0} />
            <Button className="w-full rounded-sm text-xl font-bold uppercase text-secondary">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
