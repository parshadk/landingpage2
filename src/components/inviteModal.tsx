import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface InviteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InviteModal({ isOpen, onClose }: InviteModalProps) {
  const [invites, setInvites] = useState(1)
  const [duration, setDuration] = useState(1)

  const calculatePrice = () => {
    return invites * duration * 10
  }

  const price = calculatePrice()

  const data = [
    { name: 'Invites', value: invites },
    { name: 'Duration', value: duration },
  ]

  const COLORS = ['#0088FE', '#00C49F']

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite to Event</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="invites" className="text-right">
              Invites
            </Label>
            <Input
              id="invites"
              type="number"
              className="col-span-3"
              value={invites}
              onChange={(e) => setInvites(parseInt(e.target.value))}
              min={1}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-right">
              Duration (hours)
            </Label>
            <Input
              id="duration"
              type="number"
              className="col-span-3"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              min={1}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Price</Label>
            <div className="col-span-3 font-bold">${price}</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              
            >{/* @ts-ignore*/}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Button onClick={onClose}>Invite</Button>
      </DialogContent>
    </Dialog>
  )
}
