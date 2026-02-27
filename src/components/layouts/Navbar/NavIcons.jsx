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
                                    <DialogContent className="sm:max-w-md" showCloseButton={false}>
                                        <Input
                                            id="link"
                                            placeholder="Type your search query here..."
                                        />
                                    </DialogContent>
                                </Dialog>

                            ) : item.name == "user" ? (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button variant="outline" className={"border-none outline-none cursor-pointer"}>{item?.icon}</button>
                                    </DialogTrigger>
                                    <DialogContent showCloseButton={false}>
                                        <DialogHeader>
                                            <DialogTitle>Edit Profile</DialogTitle>
                                            <DialogDescription>
                                                This dialog doesn&apos;t have a close button in the top-right
                                                corner.
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            ) : <button className='cursor-pointer'>{item?.icon}</button>
                        }

                    </li>
                ))
            }
        </ul>
    )
}

export default NavIcons
