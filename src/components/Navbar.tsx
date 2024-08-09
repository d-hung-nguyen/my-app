"use client"
import React, { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

export function NavbarMenu() {
	return (
		<div className="relative w-full flex">
			<Navbar className="top-2" />
			<p className="text-white dark:text-black gap-20">The Navbar will show on top of the page</p>
		</div>
	)
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null)
	return (
		<div className={cn("fixed  items-center justify-between inset-x-0 max-w-2xl mx-auto gap-20 z-50", className)}>
			<Menu setActive={setActive}>
				<HoveredLink href="/">Home </HoveredLink>
				<HoveredLink href="/rate-calculator">| Rate Calculator | </HoveredLink>
				<HoveredLink href="/contract"> Contract |</HoveredLink>

				<MenuItem setActive={setActive} active={active} item="Updates">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/rates-and-offers">Rates and Offers</HoveredLink>
						<HoveredLink href="/availability">Availability</HoveredLink>
						<HoveredLink href="/team">Team</HoveredLink>
					</div>
				</MenuItem>
			</Menu>
		</div>
	)
}
