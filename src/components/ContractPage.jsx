import { Card } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table"

export default function ContractPage() {
	return (
		<Card className="p-4">
			<h1 className="text-3xl font-bold mb-4">Mövenpick Resort Kuredhivaru Maldives FIT Static Rate Agreement 2023/2024</h1>

			<h2 className="text-xl font-semibold mb-2">Parties Involved</h2>
			<Card>
				<p>
					<strong>Zen Resort Pvt Ltd</strong>, a company incorporated and registered in the Maldives with its address at H. Dhoorihaa
					5th Floor (5-B) Kalaafaanu Hingun 20076 Male’ Maldives, the owner of Mövenpick Resort Kuredhivaru Maldives, hereinafter
					referred to as the “Hotel”, and <strong>Luxe Voyage LTD</strong>, hereinafter referred to as the “Agent”.
				</p>
				<p>
					This agreement is valid from <strong>21 December 2023 – 25 December 2024</strong> and applicable for all markets.
				</p>
			</Card>

			<h2 className="text-xl font-semibold mb-2">Contact Information</h2>
			<Card>
				<div className="flex justify-between mb-4">
					<div>
						<p>
							<strong>Company Name:</strong> Luxe Voyage LTD
						</p>
						<p>
							<strong>Address:</strong> La Croisette 2nd Floor - Block C-1, Office 206-207, Grand Bay, Mauritius
						</p>
						<p>
							<strong>Telephone Number:</strong> +230 269 4154 / 53
						</p>
						<p>
							<strong>Contact Person:</strong> Elena Kovalchuk
						</p>
						<p>
							<strong>Position:</strong> Managing Director
						</p>
						<p>
							<strong>Email Address:</strong> elena@luxevoyage.mu
						</p>
					</div>
					<div>
						<p>
							<strong>Company Name:</strong> Mövenpick Resort Kuredhivaru Maldives
						</p>
						<p>
							<strong>Address:</strong> Kuredhivaru Island 20076 Noonu Atoll, Maldives
						</p>
						<p>
							<strong>Telephone Number:</strong> +960 656 3000
						</p>
						<p>
							<strong>Contact Person:</strong> Liu Lingqiao
						</p>
						<p>
							<strong>Position:</strong> Senior Director of Sales
						</p>
						<p>
							<strong>Email Address:</strong> liu.lingqiao@movenpick.com
						</p>
					</div>
				</div>
			</Card>

			<h2 className="text-xl font-semibold mb-2">Room Rates</h2>
			<Card>
				<Table>
					<TableHead> Room Type</TableHead>
					<TableHead> Shoulder Season</TableHead>
					<TableHead> Festive Season</TableHead>
					<TableHead> High Season</TableHead>
					<TableHead> Low Season</TableHead>
					<TableHead> Shoulder Season</TableHead>

					<TableBody>
						<TableRow>
							<TableCell> Overwater Pool Villa Lagoon</TableCell>
							<TableCell> $775</TableCell>
							<TableCell> $1360</TableCell>
							<TableCell> $980</TableCell>
							<TableCell> $690</TableCell>
							<TableCell> $775</TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Overwater Pool Villa Sunrise</TableCell>
							<TableCell> $845</TableCell>
							<TableCell> $1430</TableCell>
							<TableCell> $1050</TableCell>
							<TableCell> $760</TableCell>
							<TableCell> $845</TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Overwater Pool Villa Ocean</TableCell>
							<TableCell> $900</TableCell>
							<TableCell> $1485</TableCell>
							<TableCell> $1105</TableCell>
							<TableCell> $815</TableCell>
							<TableCell> $900</TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Beach Pool Villa Sunset</TableCell>
							<TableCell> $1000</TableCell>
							<TableCell> $1585</TableCell>
							<TableCell> $1205</TableCell>
							<TableCell> $915</TableCell>
							<TableCell> $1000</TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Beach Pool Villa Deluxe</TableCell>
							<TableCell> $1075</TableCell>
							<TableCell> $1660</TableCell>
							<TableCell> $1280</TableCell>
							<TableCell> $990</TableCell>
							<TableCell> $1075</TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Three Bedroom Beach Pool Residence</TableCell>
							<TableCell> $3500</TableCell>
							<TableCell> $6000</TableCell>
							<TableCell> $4000</TableCell>
							<TableCell> $3500</TableCell>
							<TableCell> $3500</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<p>
					<strong>Note:</strong> The above rates are in US Dollars inclusive of 10% Service Charge and 16% T-GST. The rates are per
					villa per night inclusive of daily breakfast at ONU Marché as per the standard occupancy of the villa/residence. Rates are
					subject to Green Tax (USD 6 per person per night).
				</p>
			</Card>

			<h2 className="text-xl font-semibold mb-2">Special Offers and Discounts</h2>
			<Card>
				<p>
					<strong>Early Bird Offer:</strong> 30% discount on room rates for bookings made 90 days prior to arrival. Valid from 21 Dec
					2023 - 25 Dec 2024 for all villa categories.
				</p>
				<p>
					<strong>Long Stay Offer:</strong> 5% discount on room rates for bookings of 12 nights or more. Valid from 21 Dec 2023 - 25
					Dec 2024 for all villa categories.
				</p>
				<p>
					<strong>Repeater Discount:</strong> 5% discount on room rates for repeat guests. Valid from 21 Dec 2023 - 25 Dec 2024 for all
					villa categories.
				</p>
				<p>
					<strong>Family Offer:</strong> Free meals for maximum two children under 13.99 years of age per room when dining with parents
					as per the meal plan booked by parents. Complimentary sofa bed setup in Beach Pool Villas.
				</p>
			</Card>

			<h2 className="text-xl font-semibold mb-2">Transfer Information</h2>
			<Card>
				<p>
					<strong>Roundtrip Seaplane:</strong> USD 625 per adult, USD 390 per child (2-11.99 years), complimentary for children (0-1.99
					years).
				</p>
				<p>
					<strong>Luggage Allowance:</strong> 20 kgs per person and 5 kgs hand luggage. Additional charges may apply for excess
					baggage.
				</p>
			</Card>

			<h2 className="text-xl font-semibold mb-2">Additional Policies</h2>
			<Card>
				<p>
					<strong>Extra Adult and Children Policy:</strong> Adults (14 years and above): USD 185 per night. Children (2 – 13.99 years
					old): USD 185 per night. Infants (1.99 years and below): Complimentary.
				</p>
				<p>
					<strong>Cancellation and Deposit Policy:</strong> Festive Season: 100% payment 45 days prior to arrival. Shoulder and High
					Season: 50% of total invoice 30 – 15 days prior to arrival. 100% of total invoice 14 – 00 days prior to arrival. Low Season:
					100% payment 21 days prior to arrival. 50% of total invoice 21 – 15 days prior to arrival. 100% of total invoice 14 – 00 days
					prior to arrival.
				</p>
			</Card>

			<h2 className="text-xl font-semibold mb-2">Agreement Signatures</h2>
			<Card>
				<p>On behalf of Mövenpick Resort Kuredhivaru Maldives</p>
				<p>Name: Liu Lingqiao</p>
				<p>Designation: Senior Director of Sales</p>
				{/* Placeholder for signature and date */}
				<p>
					<strong>Signature:</strong> ______________________
				</p>
				<p>
					<strong>Date:</strong> ______________________
				</p>

				<p>On behalf of Luxe Voyage LTD</p>
				<p>Name: Elena Kovalchuk</p>
				<p>Designation: Managing Director</p>
				{/* Placeholder for signature and date */}
				<p>
					<strong>Signature:</strong> ______________________
				</p>
				<p>
					<strong>Date:</strong> ______________________
				</p>
			</Card>

			<footer className="mt-10">
				<p className="text-center">
					For any questions, please contact Liu Lingqiao at <a href="mailto:liu.lingqiao@movenpick.com">liu.lingqiao@movenpick.com</a>{" "}
					or call +960 656 3000. You may also contact Elena Kovalchuk at <a href="mailto:elena@luxevoyage.mu">elena@luxevoyage.mu</a>{" "}
					or call +230 269 4154.
				</p>
				<p className="text-center mt-4">
					<strong>Legal Disclaimer:</strong> The terms and conditions of this contract are subject to change. Please review all terms
					carefully before signing.
				</p>
			</footer>
		</Card>
	)
}
