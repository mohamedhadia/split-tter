type Props = {
  name: string
  amount: number
}

export default function TipRow({ name, amount }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white">
        <h4 className="font-bold capitalize tracking-tighter">{name}</h4>
        <p className="text-sm text-accent/80">/ person</p>
      </div>
      <div className="text-3xl font-bold text-primary">
        <h2>${amount}</h2>
      </div>
    </div>
  )
}
