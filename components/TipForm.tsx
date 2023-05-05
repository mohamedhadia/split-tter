"use client"

import React from "react"
import { DollarSign, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "./ui/button"

type Props = {
  tipValue: number
  setTipValue: (tip: number) => void
  handleTipSelect: (tip: number) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  nOpeopleError: string | null
  formData: {
    bill: string
    noOfPeople: string
    custom: string
  }
}

export default function TipForm({
  tipValue,
  setTipValue,
  handleTipSelect,
  handleChange,
  nOpeopleError,
  formData,
}: Props) {
  return (
    <>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="bill" className="text-md font-bold text-accent">
          Bill
        </Label>
        <Input
          type="text"
          id="bill"
          name="bill"
          value={formData.bill}
          onChange={handleChange}
          placeholder="0"
          Icon={DollarSign}
        />
      </div>
      <div>
        <h3 className=" text-md font-bold text-accent">Select Tip %</h3>
        <div className="grid grid-cols-2 gap-4">
          {[5, 10, 15, 25, 50].map((tip, i) => (
            <Button
              key={i}
              size={"lg"}
              type="button"
              onClick={() => handleTipSelect(tip)}
              className={cn(
                "rounded-lg bg-secondary text-xl font-bold uppercase text-white",
                tip === tipValue
                  ? "!bg-primary !text-secondary"
                  : "hover:bg-accent hover:text-white"
              )}
            >
              {tip}%
            </Button>
          ))}
          <Input
            type="text"
            id="custom"
            name="custom"
            placeholder="Custom"
            value={formData.custom}
            onChange={handleChange}
            className="text-center placeholder:text-center"
          />
        </div>
      </div>
      <div className="mt-4 grid w-full items-center gap-1.5">
        <div className="flex justify-between">
          <Label htmlFor="bill" className="text-md font-bold text-accent">
            Number of People
          </Label>
          {nOpeopleError && (
            <p className="text-sm font-bold text-red-500">{nOpeopleError}</p>
          )}
        </div>
        <Input
          type="text"
          id="noOfPeople"
          name="noOfPeople"
          value={formData.noOfPeople}
          onChange={handleChange}
          placeholder="0"
          Icon={User}
          error={nOpeopleError ? true : false}
        />
      </div>
    </>
  )
}
