import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableRow } from "../../components/ui/table"

export default function ContractPage() {
	return (
		<div className="flex flex-col">
			<Card>
				<CardHeader>
					<CardTitle>Mövenpick Resort Kuredhivaru Maldives FIT Static Rate Agreement 2023/2024</CardTitle>
				</CardHeader>
				<CardContent>
					This agreement is valid from <strong>21 December 2023 – 25 December 2024</strong> and applicable for all markets.
				</CardContent>

				<Card>
					<CardHeader>
						<CardTitle>Contact Information</CardTitle>
					</CardHeader>
					<CardContent>
						<strong>Company Name:</strong> Mövenpick Resort Kuredhivaru Maldives
						<strong>Address:</strong> Kuredhivaru Island 20076 Noonu Atoll, Maldives
						<strong>Telephone Number:</strong> +960 656 3000
						<strong>Contact Person:</strong> Liu Lingqiao
						<strong>Position:</strong> Senior Director of Sales
						<strong>Email Address:</strong> liu.lingqiao@movenpick.com
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Room rates</CardTitle>
					</CardHeader>
					<CardContent>
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
						<CardFooter>
							<CardDescription>
								The above rates are in US Dollars inclusive of 10% Service Charge and 16% T-GST. The rates are per villa per night
								inclusive of daily breakfast at ONU Marché as per the standard occupancy of the villa/residence. Rates are subject
								to Green Tax (USD 6 per person per night).
							</CardDescription>
						</CardFooter>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Special offers and discounts</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							<strong>Early bird offer: </strong>30% discount on room rates for bookings made 90 days prior to arrival. Valid from 21
							Dec 2023 - 25 Dec 2024 for all villa categories.
							<strong>Long Stay Offer:</strong> 5% discount on room rates for bookings of 12 nights or more. Valid from 21 Dec 2023 -
							25 Dec 2024 for all villa categories.
							<strong>Repeater Discount:</strong> 5% discount on room rates for repeat guests. Valid from 21 Dec 2023 - 25 Dec 2024
							for all villa categories.
							<strong>Family Offer:</strong> Free meals for maximum two children under 13.99 years of age per room when dining with
							parents as per the meal plan booked by parents. Complimentary sofa bed setup in Beach Pool Villas.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Transfer Information</CardTitle>
					</CardHeader>
					<CardContent>
						<strong>Roundtrip Seaplane:</strong> USD 625 per adult, USD 390 per child (2-11.99 years), complimentary for children
						(0-1.99 years).
						<strong>Luggage Allowance:</strong> 20 kgs per person and 5 kgs hand luggage. Additional charges may apply for excess
						baggage.
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Additional policies</CardTitle>
					</CardHeader>
					<CardContent>
						<strong>Extra Adult and Children Policy:</strong> Adults (14 years and above): USD 185 per night. Children (2 – 13.99
						years old): USD 185 per night. Infants (1.99 years and below): Complimentary.
						<strong>Cancellation and Deposit Policy:</strong> Festive Season: 100% payment 45 days prior to arrival. Shoulder and High
						Season: 50% of total invoice 30 – 15 days prior to arrival. 100% of total invoice 14 – 00 days prior to arrival. Low
						Season: 100% payment 21 days prior to arrival. 50% of total invoice 21 – 15 days prior to arrival. 100% of total invoice
						14 – 00 days prior to arrival.
					</CardContent>
				</Card>
			</Card>
		</div>
	)
}
