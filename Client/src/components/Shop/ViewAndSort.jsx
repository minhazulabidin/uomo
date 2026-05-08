"use client"
import React, { useState, useEffect } from 'react'
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
import api from '@/utils/api'
import useViewProductStore from '@/ZustandStore/ViewProduct.store'


const ViewAndSort = () => {
  const [categories, setCategories] = useState([])
  const { setView } = useViewProductStore()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get('/products/categories')
        setCategories(res?.data)
      } catch (err) {
        console.log(err)
      }
    }
    if (categories.length === 0) {
      fetchCategories()
    }

  }, [categories])

  return (
    <div className='flex-1 flex justify-end'>
      <Select defaultValue={categories?.[0]?.slug}>
        <SelectTrigger className="w-full max-w-35 border-t-0 border-x-0 border-b rounded-none focus:ring-0 px-2 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-jost text-primary font-semibold border-primary">
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {categories.map((item) => (
              <SelectItem key={item?.slug} value={item?.slug}>
                {item?.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="mx-7.5" />
      <div className="font-jost font-semibold text-sm flex items-center text-primary">
        VIEW {
          [3, 4, 5].map((num, idx) => (
            <button key={idx} className=" ml-2.5 link-underline" onClick={() => setView(num)}> {num}</button>
          ))
        }
      </div>
    </div>
  )
}

export default ViewAndSort