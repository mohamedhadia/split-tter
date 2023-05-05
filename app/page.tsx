"use client"

import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import TipForm from "@/components/TipForm"
import TipRow from "@/components/TipRow"

export default function IndexPage() {
  const [tipValue, setTipValue] = useState<number>(0)
  const [formData, setFormData] = useState({
    bill: "",
    noOfPeople: "",
    custom: "",
  })
  const [nOpeopleError, setNOpeopleError] = useState<string | null>(null)

  const tipPerPerson = useMemo(() => {
    // use custom tip value if selected
    if (tipValue === 0)
      return Number(formData.bill) * (Number(formData.custom) / 100)
    // Calculate tip per person
    return Number(formData.bill) * (tipValue / 100)
  }, [tipValue, formData.bill, formData.custom])

  const totalPaid = useMemo(() => {
    // Validate input
    const noOfPeople = Number(formData.noOfPeople)
    if (formData.noOfPeople === "" || noOfPeople === 0) {
      setNOpeopleError("Can't be zero")
      return 0
    } else {
      setNOpeopleError(null)
    }

    // Calculate total amount to be paid
    return tipPerPerson * noOfPeople + Number(formData.bill)
  }, [tipPerPerson, formData.noOfPeople, formData.bill])

  const handleTipSelect = (tip: number) => {
    setTipValue(tip)
    setFormData((prev) => {
      return { ...prev, custom: "" }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
    if (name === "custom") {
      setTipValue(0)
    }
  }
  return (
    <section className="grid h-screen place-items-center items-center gap-6 pb-8 pt-6 lg:container md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-20">
        <h1 className="text-center text-2xl font-bold uppercase tracking-[0.5rem] text-secondary">
          split
          <br />
          tter
        </h1>

        <form className="flex w-full flex-col justify-center gap-6 rounded-2xl bg-white p-4 lg:flex-row">
          <div className="flex-1 space-y-8 p-2">
            <TipForm
              tipValue={tipValue}
              setTipValue={setTipValue}
              handleTipSelect={handleTipSelect}
              handleChange={handleChange}
              formData={formData}
              nOpeopleError={nOpeopleError}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-8 rounded-xl bg-secondary p-6 py-10">
            <div className="space-y-8">
              <TipRow name="Tip Amount" amount={tipPerPerson ?? 0} />
              <TipRow name="Total" amount={totalPaid ?? 0} />
            </div>
            <Button
              onClick={() => {
                // reset form data
                document.forms[0].reset()
              }}
              className="w-full rounded-sm text-xl font-bold uppercase text-secondary"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
