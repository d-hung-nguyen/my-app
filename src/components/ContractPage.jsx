import { Card } from "../components/ui/card"

export default function ContractPage() {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-4">Mövenpick Resort Kuredhivaru Maldives FIT Static Rate Agreement 2023/2024</h1>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Parties Involved</h2>
				<Card className="p-4 bg-gray-50">
					<p>
						<strong>Zen Resort Pvt Ltd</strong>, a company incorporated and registered in the Maldives with its address at H.
						Dhoorihaa 5th Floor (5-B) Kalaafaanu Hingun 20076 Male’ Maldives, the owner of Mövenpick Resort Kuredhivaru Maldives,
						hereinafter referred to as the “Hotel”, and <strong>Luxe Voyage LTD</strong>, hereinafter referred to as the “Agent”.
					</p>
					<p className="mt-4">
						This agreement is valid from <strong>21 December 2023 – 25 December 2024</strong> and applicable for all markets.
					</p>
				</Card>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Contact Information</h2>
				<Card className="p-4 bg-gray-50">
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
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Room Rates</h2>
				<Card className="p-4 bg-gray-50">
					<table className="w-full text-left table-auto">
						<thead>
							<tr>
								<th className="border-b py-2">Room Type</th>
								<th className="border-b py-2">Shoulder Season</th>
								<th className="border-b py-2">Festive Season</th>
								<th className="border-b py-2">High Season</th>
								<th className="border-b py-2">Low Season</th>
								<th className="border-b py-2">Shoulder Season</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border-b py-2">Overwater Pool Villa Lagoon</td>
								<td className="border-b py-2">$775</td>
								<td className="border-b py-2">$1360</td>
								<td className="border-b py-2">$980</td>
								<td className="border-b py-2">$690</td>
								<td className="border-b py-2">$775</td>
							</tr>
							<tr>
								<td className="border-b py-2">Overwater Pool Villa Sunrise</td>
								<td className="border-b py-2">$845</td>
								<td className="border-b py-2">$1430</td>
								<td className="border-b py-2">$1050</td>
								<td className="border-b py-2">$760</td>
								<td className="border-b py-2">$845</td>
							</tr>
							<tr>
								<td className="border-b py-2">Overwater Pool Villa Ocean</td>
								<td className="border-b py-2">$900</td>
								<td className="border-b py-2">$1485</td>
								<td className="border-b py-2">$1105</td>
								<td className="border-b py-2">$815</td>
								<td className="border-b py-2">$900</td>
							</tr>
							<tr>
								<td className="border-b py-2">Beach Pool Villa Sunset</td>
								<td className="border-b py-2">$1000</td>
								<td className="border-b py-2">$1585</td>
								<td className="border-b py-2">$1205</td>
								<td className="border-b py-2">$915</td>
								<td className="border-b py-2">$1000</td>
							</tr>
							<tr>
								<td className="border-b py-2">Beach Pool Villa Deluxe</td>
								<td className="border-b py-2">$1075</td>
								<td className="border-b py-2">$1660</td>
								<td className="border-b py-2">$1280</td>
								<td className="border-b py-2">$990</td>
								<td className="border-b py-2">$1075</td>
							</tr>
							<tr>
								<td className="border-b py-2">Three Bedroom Beach Pool Residence</td>
								<td className="border-b py-2">$3500</td>
								<td className="border-b py-2">$6000</td>
								<td className="border-b py-2">$4000</td>
								<td className="border-b py-2">$3500</td>
								<td className="border-b py-2">$3500</td>
							</tr>
						</tbody>
					</table>
					<p className="mt-4">
						<strong>Note:</strong> The above rates are in US Dollars inclusive of 10% Service Charge and 16% T-GST. The rates are per
						villa per night inclusive of daily breakfast at ONU Marché as per the standard occupancy of the villa/residence. Rates are
						subject to Green Tax (USD 6 per person per night).
					</p>
				</Card>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Special Offers and Discounts</h2>
				<Card className="p-4 bg-gray-50">
					<p className="mb-4">
						<strong>Early Bird Offer:</strong> 30% discount on room rates for bookings made 90 days prior to arrival. Valid from 21
						Dec 2023 - 25 Dec 2024 for all villa categories.
					</p>
					<p className="mb-4">
						<strong>Long Stay Offer:</strong> 5% discount on room rates for bookings of 12 nights or more. Valid from 21 Dec 2023 - 25
						Dec 2024 for all villa categories.
					</p>
					<p className="mb-4">
						<strong>Repeater Discount:</strong> 5% discount on room rates for repeat guests. Valid from 21 Dec 2023 - 25 Dec 2024 for
						all villa categories.
					</p>
					<p>
						<strong>Family Offer:</strong> Free meals for maximum two children under 13.99 years of age per room when dining with
						parents as per the meal plan booked by parents. Complimentary sofa bed setup in Beach Pool Villas.
					</p>
				</Card>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Transfer Information</h2>
				<Card className="p-4 bg-gray-50">
					<p className="mb-4">
						<strong>Roundtrip Seaplane:</strong> USD 625 per adult, USD 390 per child (2-11.99 years), complimentary for children
						(0-1.99 years).
					</p>
					<p>
						<strong>Luggage Allowance:</strong> 20 kgs per person and 5 kgs hand luggage. Additional charges may apply for excess
						baggage.
					</p>
				</Card>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Additional Policies</h2>
				<Card className="p-4 bg-gray-50">
					<p className="mb-4">
						<strong>Extra Adult and Children Policy:</strong> Adults (14 years and above): USD 185 per night. Children (2 – 13.99
						years old): USD 185 per night. Infants (1.99 years and below): Complimentary.
					</p>
					<p className="mb-4">
						<strong>Cancellation and Deposit Policy:</strong> Festive Season: 100% payment 45 days prior to arrival. Shoulder and High
						Season: 50% of total invoice 30 – 15 days prior to arrival. 100% of total invoice 14 – 00 days prior to arrival. Low
						Season: 100% payment 21 days prior to arrival. 50% of total invoice 21 – 15 days prior to arrival. 100% of total invoice
						14 – 00 days prior to arrival.
					</p>
				</Card>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Agreement Signatures</h2>
				<Card className="p-4 bg-gray-50">
					<p className="mb-4">On behalf of Mövenpick Resort Kuredhivaru Maldives</p>
					<p>Name: Liu Lingqiao</p>
					<p>Designation: Senior Director of Sales</p>
					{/* Placeholder for signature and date */}
					<p className="mt-4 mb-4">
						<strong>Signature:</strong> ______________________
					</p>
					<p>
						<strong>Date:</strong> ______________________
					</p>

					<p className="mt-6 mb-4">On behalf of Luxe Voyage LTD</p>
					<p>Name: Elena Kovalchuk</p>
					<p>Designation: Managing Director</p>
					{/* Placeholder for signature and date */}
					<p className="mt-4 mb-4">
						<strong>Signature:</strong> ______________________
					</p>
					<p>
						<strong>Date:</strong> ______________________
					</p>
				</Card>
			</section>

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
		</div>
	)
}
