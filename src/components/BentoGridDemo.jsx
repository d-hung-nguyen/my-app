import { cn } from "@/lib/utils"
import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react"
import Link from "next/link"
import { LocateIcon, MapIcon } from "lucide-react"

export default function BentoGridDemo() {
	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
			{items.map((item, i) => (
				<Link href={item.url} key={i}>
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={item.className}
						icon={item.icon}
						url={item.url}
					/>
				</Link>
			))}
		</BentoGrid>
	)
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
)
const items = [
	{
		title: "Hotel factsheet in English",
		description: "Learn more about our hotel and its facilities.",
		header: <Skeleton />,
		className: "md:col-span-2",
		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
		url: "https://drive.google.com/file/d/1toi-Aa7f0CDHGHjlhdsyM_GaKvTUHD5l/view?usp=share_link",
	},
	{
		title: "Airport flyer",
		description: "Get the latest updates on airport services and facilities.",
		header: <Skeleton />,
		className: "md:col-span-1",
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
		url: "https://drive.google.com/file/d/1CuxA8ktjaQlXNDF02NuT2vH4UqSYyXL6/view?usp=share_link",
	},
	{
		title: "Resort map",
		description: "Find your way around our resort with this detailed map.",
		header: <Skeleton />,
		className: "md:col-span-1",
		icon: <MapIcon className="h-4 w-4 text-neutral-500" />,
		url: "https://drive.google.com/drive/folders/1aenv3_6Wz8HRPFdUj9gNylQ_AggGTTye?usp=share_link",
	},
	{
		title: "Dining",
		description: "Explore our dining options and menus.",
		header: <Skeleton />,
		className: "md:col-span-2",
		icon: <LocateIcon className="h-4 w-4 text-neutral-500" />,
		url: "https://drive.google.com/drive/folders/1OqMBA5waAF9x1ZXPIsjrgXoY2uuY7gW3?usp=share_link",
	},
]
