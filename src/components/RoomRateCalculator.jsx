"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select } from "./ui/select"

export default function RoomRateCalculator() {
	const [checkin, setCheckin] = useState("")
	const [checkout, setCheckout] = useState("")
	const [adults, setAdults] = useState(1)
	const [children, setChildren] = useState(0)
	const [roomType, setRoomType] = useState("Overwater Pool Villa Lagoon")
	const [totalCost, setTotalCost] = useState(null)
	const [costBreakdown, setCostBreakdown] = useState({})
	const [policyDetails, setPolicyDetails] = useState("")

	const roomTypes = {
		"Overwater Pool Villa Lagoon": {
			shoulder: 775,
			festive: 1360,
			high: 980,
			low: 690,
			maxAdults: 2,
			maxChildren: 1,
		},
		"Overwater Pool Villa Sunrise": {
			shoulder: 845,
			festive: 1430,
			high: 1050,
			low: 760,
			maxAdults: 2,
			maxChildren: 1,
		},
		"Overwater Pool Villa Ocean": {
			shoulder: 900,
			festive: 1485,
			high: 1105,
			low: 815,
			maxAdults: 2,
			maxChildren: 1,
		},
		"Beach Pool Villa Sunset": {
			shoulder: 1000,
			festive: 1585,
			high: 1205,
			low: 915,
			maxAdults: 2,
			maxChildren: 2,
		},
		"Beach Pool Villa Deluxe": {
			shoulder: 1075,
			festive: 1660,
			high: 1280,
			low: 990,
			maxAdults: 2,
			maxChildren: 2,
		},
		"Three Bedroom Beach Pool Residence": {
			shoulder: 3500,
			festive: 6000,
			high: 4000,
			low: 3500,
			maxAdults: 6,
			maxChildren: 3,
		},
	}

	const handleCalculation = () => {
		const checkinDate = new Date(checkin)
		const checkoutDate = new Date(checkout)
		const totalNights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)

		if (checkoutDate <= checkinDate) {
			alert("Check-out date must be later than check-in date.")
			return
		}

		const selectedRoom = roomTypes[roomType]
		if (adults > selectedRoom.maxAdults || children > selectedRoom.maxChildren) {
			alert(`Maximum occupancy for this villa is ${selectedRoom.maxAdults} adults and ${selectedRoom.maxChildren} children.`)
			return
		}

		let baseCost = 0
		let extraGuestCost = 0
		let discount = 0
		let transferCost = adults * 625 + children * 390

		for (let i = 0; i < totalNights; i++) {
			const currentDate = new Date(checkinDate)
			currentDate.setDate(checkinDate.getDate() + i)

			let rate = 0
			if (currentDate >= new Date("2023-12-26") && currentDate <= new Date("2024-01-10")) {
				rate = selectedRoom.festive
			} else if (
				(currentDate >= new Date("2023-12-21") && currentDate <= new Date("2023-12-25")) ||
				(currentDate >= new Date("2024-10-01") && currentDate <= new Date("2024-12-25"))
			) {
				rate = selectedRoom.shoulder
			} else if (currentDate >= new Date("2024-01-11") && currentDate <= new Date("2024-03-31")) {
				rate = selectedRoom.high
			} else if (currentDate >= new Date("2024-04-01") && currentDate <= new Date("2024-09-30")) {
				rate = selectedRoom.low
			}

			baseCost += rate
		}

		// Extra charges for additional guests
		if (adults > selectedRoom.maxAdults) {
			extraGuestCost += (adults - selectedRoom.maxAdults) * 185 * totalNights
		}
		if (children > selectedRoom.maxChildren) {
			extraGuestCost += (children - selectedRoom.maxChildren) * 185 * totalNights
		}

		let totalCost = baseCost + extraGuestCost + transferCost

		// Discount calculations
		const today = new Date()
		const daysAhead = (new Date(checkin) - today) / (1000 * 60 * 60 * 24)

		if (daysAhead >= 90) {
			discount += totalCost * 0.3 // Early Bird Discount
		}
		if (totalNights >= 12) {
			discount += totalCost * 0.05 // Long Stay Discount
		}
		if (true) {
			// Assuming repeater guest
			discount += totalCost * 0.05 // Repeater Discount
		}

		totalCost -= discount

		setTotalCost(totalCost.toFixed(2))
		setCostBreakdown({
			baseCost: baseCost.toFixed(2),
			extraGuestCost: extraGuestCost.toFixed(2),
			transferCost: transferCost.toFixed(2),
			discount: discount.toFixed(2),
		})
		calculatePolicyDetails(checkinDate, totalCost)
	}

	const calculatePolicyDetails = (checkinDate, totalCost) => {
		let dueAmount = 0
		let dueDate = ""
		let cancellationPolicy = ""

		if (checkinDate >= new Date("2023-12-26") && checkinDate <= new Date("2024-01-10")) {
			dueAmount = totalCost
			dueDate = new Date(checkinDate)
			dueDate.setDate(checkinDate.getDate() - 45)
			cancellationPolicy = "50% of total invoice 45 – 30 days prior to arrival. 100% of total invoice 30 – 00 days prior to arrival."
		} else if (
			(checkinDate >= new Date("2023-12-21") && checkinDate <= new Date("2023-12-25")) ||
			(checkinDate >= new Date("2024-10-01") && checkinDate <= new Date("2024-12-25")) ||
			(checkinDate >= new Date("2024-01-11") && checkinDate <= new Date("2024-03-31"))
		) {
			dueAmount = totalCost * 0.5
			dueDate = new Date(checkinDate)
			dueDate.setDate(checkinDate.getDate() - 30)
			cancellationPolicy = "50% of total invoice 30 – 15 days prior to arrival. 100% of total invoice 14 – 00 days prior to arrival."
		} else if (checkinDate >= new Date("2024-04-01") && checkinDate <= new Date("2024-09-30")) {
			dueAmount = totalCost * 0.5
			dueDate = new Date(checkinDate)
			dueDate.setDate(checkinDate.getDate() - 21)
			cancellationPolicy = "50% of total invoice 21 – 15 days prior to arrival. 100% of total invoice 14 – 00 days prior to arrival."
		}

		dueDate = dueDate.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
		setPolicyDetails({
			dueAmount: dueAmount.toFixed(2),
			dueDate,
			cancellationPolicy,
		})
	}

	return (
		<Card className="p-4">
			<h1 className="p-2xl font-bold mb-4">FIT Static Rate Agreement 2023/2024</h1>
			<text>
				This agreement is made by and between Zen Resort Pvt Ltd, the owner of Mövenpick Resort Kuredhivaru Maldives, and Luxe Voyage
				LTD, valid from <span className="p-indigo-600 font-semibold">21 December 2023 to 25 December 2024</span>, applicable for all
				markets.
			</text>

			<Card className="p-4 bg-gray-50 mt-6">
				<Label htmlFor="checkin">Check-In Date:</Label>
				<Input type="date" id="checkin" value={checkin} onChange={(e) => setCheckin(e.target.value)} />

				<Label htmlFor="checkout">Check-Out Date:</Label>
				<Input type="date" id="checkout" value={checkout} onChange={(e) => setCheckout(e.target.value)} />

				<Label htmlFor="adults">Number of Adults:</Label>
				<Input type="number" id="adults" value={adults} onChange={(e) => setAdults(e.target.value)} min="1" />

				<Label htmlFor="children">Number of Children:</Label>
				<Input
					type="number"
					id="children"
					value={children}
					onChange={(e) => setChildren(e.target.value)}
					min="0"
					required
					className="mb-4"
				/>

				<Label htmlFor="room-type">Room Type:</Label>
				<Select id="room-type" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
					{Object.keys(roomTypes).map((type) => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</Select>

				<div className="mt-4">
					<Label>
						<strong>Maximum Occupancy:</strong> {roomTypes[roomType].maxAdults} adults, {roomTypes[roomType].maxChildren} children
					</Label>
					<Label>
						<strong>Transfer Rates:</strong> USD 625 per adult, USD 390 per child (2-11.99 years)
					</Label>
					<Label>
						<strong>Meal Plan:</strong> Daily breakfast at ONU Marché included
					</Label>
				</div>

				<Button className="p-4 w-full" onClick={handleCalculation}>
					Calculate Rate
				</Button>
			</Card>
			<Card>
				{totalCost && (
					<div className="mt-6 p-4 bg-white shadow-md rounded-md">
						<h3 className="p-lg font-semibold">Total Cost: ${totalCost} (including transfers)</h3>
						<div className="mt-4">
							<Label>
								<strong>Base Room Cost:</strong> ${costBreakdown.baseCost}
							</Label>
							<Label>
								<strong>Extra Guest Cost:</strong> ${costBreakdown.extraGuestCost}
							</Label>
							<Label>
								<strong>Transfer Cost:</strong> ${costBreakdown.transferCost}
							</Label>
							<Label>
								<strong>Total Discount:</strong> -${costBreakdown.discount}
							</Label>
						</div>
					</div>
				)}

				{policyDetails && (
					<div className="mt-4 p-4 bg-white shadow-md rounded-md">
						<h3 className="p-lg font-semibold">
							Deposit Required: ${policyDetails.dueAmount} by {policyDetails.dueDate}
						</h3>
						<Label>
							<strong>Cancellation Policy:</strong> {policyDetails.cancellationPolicy}
						</Label>
					</div>
				)}
			</Card>
		</Card>
	)
}
