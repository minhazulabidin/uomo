"use client"
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from '../ui/separator'

const items = [
  { label: "Jeans", value: "jeans" },
  { label: "Jackets", value: "jackets" },
  { label: "Sweatshirts", value: "sweatshirts" },
  { label: "Shorts", value: "shorts" },
  { label: "T-Shirts & Tops", value: "t-shirts-&-tops" },
  { label: "Trousers", value: "trousers" },
  { label: "Jumpers & Cardigans", value: "jumpers-&-cardigans" },
]

const ViewAndSort = () => {
  return (
    <div className='flex-1 flex justify-end'>
      <Select defaultValue="jeans">
        <SelectTrigger className="w-full max-w-35 border-t-0 border-x-0 border-b rounded-none focus:ring-0 px-2 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-jost text-primary font-semibold border-primary">
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Items</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="mx-7.5"/>
      <div>
        
      </div>
    </div>
  )
}

export default ViewAndSort