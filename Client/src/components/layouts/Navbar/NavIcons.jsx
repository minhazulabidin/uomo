import React from 'react'
import navbarData from '../../../../data/navbarData'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { XIcon } from 'lucide-react'
import LoginForm from '../LoginForm/LoginForm'



const NavIcons = () => {
    return (
        <ul className='flex gap-8'>
            {
                navbarData.icons.map((item, index) => (
                    <li key={index}>
                        {
                            item?.name == "search" ? (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button variant="outline" className={"border-none outline-none cursor-pointer"}>{item?.icon}</button>
                                    </DialogTrigger>
                                    <DialogContent showCloseButton={false}>
                                        <Input
                                            id="link"
                                            placeholder="Type your search query here..."
                                        />
                                    </DialogContent>
                                </Dialog>

                            ) : item.name == "user" ? (
                                <Sheet>
                                    <SheetTrigger asChild className='cursor-pointer'>{item?.icon}</SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader className={"bg-[#FAF9F8] p-10"}>
                                            <SheetTitle>
                                                <div className="flex justify-between items-center">
                                                    <h3 className='font-jost font-medium text-base'>LOGIN</h3>
                                                    <SheetClose asChild>
                                                        <XIcon size={20} />
                                                    </SheetClose>
                                                </div>
                                            </SheetTitle>

                                        </SheetHeader>
                                        <SheetDescription>
                                            <LoginForm />
                                        </SheetDescription>
                                    </SheetContent>
                                </Sheet>
                            ) : <button className='cursor-pointer'>{item?.icon}</button>
                        }

                    </li>
                ))
            }
        </ul>
    )
}

export default NavIcons
