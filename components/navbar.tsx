"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">PMJ</span>
                    </div> */}
                    <span className="font-bold text-xl hidden sm:inline-block">
                        PT. PUTRAMAS MULIA JAYA
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#services"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="#products"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Products
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button size="sm" className="hidden md:flex">
                        <Link href="/dashboard">Admin Area</Link>
                    </Button>
                    <ModeToggle />

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-8 mt-8">
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                        <span className="text-primary-foreground font-bold text-xl">
                                            PMJ
                                        </span>
                                    </div>
                                    <span className="font-bold text-xl">PT. PUTRAMAS MULIA JAYA</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    <Link
                                        href="#services"
                                        className="mx-5 text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        href="#about"
                                        className="mx-5 text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="#products"
                                        className="mx-5 text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        Products
                                    </Link>
                                    <Link
                                        href="#contact"
                                        className="mx-5 text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </nav>
                                <div className="flex flex-col gap-4">
                                    <Button className="m-auto w-50">Get Quote</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
