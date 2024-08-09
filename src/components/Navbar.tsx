"use client"
import React, { useState } from "react"
import { Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

import Link from "next/link"

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null)
	return (
		<div className="fixed">
			<div className={cn(" z-50 min-w-full items-center  justify-center", className)}>
				<Menu setActive={setActive}>
					<div className="flex flex-row space-x-5">
						<Link href="/">Home </Link>
						<Link href="/rate-calculator">Rate Calculator</Link>
						<Link href="/contract">Contract</Link>

						<MenuItem setActive={setActive} active={active} item="Updates">
							<div className="flex flex-col space-y-4 text-sm">
								<Link href="/rates-and-offers">Rates and Offers</Link>
								<Link href="/availability">Availability</Link>
								<Link href="/team">Team</Link>
							</div>
						</MenuItem>
					</div>
				</Menu>
			</div>
		</div>
	)
}
