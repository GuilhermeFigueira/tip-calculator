import { CurrencyDollar, User } from "phosphor-react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

function App() {
	const {
		watch,
		control,
		trigger,
		formState: { errors },
	} = useForm({
		defaultValues: {
			bill: 0,
			people: 0,
		},
	});
	const [percentage, setPercentage] = useState("5");

	let tipAmount =
		(watch("bill") * parseInt(percentage)) / 100 / watch("people");

	let total = watch("bill") / watch("people") + tipAmount;

	console.log(total);

	return (
		<div className="grid grid-rows-[17%_1fr] h-screen">
			<h1 className="text-center m-auto text-2xl text-cyan-very_dark spacing tracking-[10px]">
				SPLI
				<br />
				TTER
			</h1>
			<form action="">
				<main className="grid grid-flow-row">
					<div className="grid grid-flow-row gap-8">
						<div>
							<div className="flex flex-row justify-between">
								<h2>Bill</h2>
								<h5>{errors.bill?.message}</h5>
							</div>
							<div
								className={`number_field ${
									errors.bill?.message == undefined
										? ""
										: "focus-within:ring-red-400"
								}`}
							>
								<CurrencyDollar
									size={18}
									className="text-cyan-gray"
									weight="bold"
								/>
								<Controller
									render={({ field }) => (
										<NumericFormat
											placeholder="0"
											allowNegative={false}
											fixedDecimalScale
											allowLeadingZeros={false}
											decimalScale={2}
											decimalSeparator="."
											className="flex-1 text-right focus-within:outline-none bg-transparent text-2xl "
											onKeyDown={() => trigger("bill")}
											onKeyUp={() => trigger("bill")}
											{...field}
										/>
									)}
									name="bill"
									control={control}
									rules={{
										maxLength: {
											value: 10,
											message: "Max length is 10 digits",
										},
										min: {
											value: 0.01,
											message: "Can't be zero",
										},
									}}
								/>
							</div>
						</div>
						<div>
							<h2>Select Tip %</h2>
							<ToggleGroup.Root
								value={percentage}
								className="ToggleGroup"
								type="single"
								onValueChange={(percentage) => {
									if (percentage) setPercentage(percentage);
								}}
							>
								<ToggleGroup.Item
									className="ToggleGroupItem"
									value="5"
								>
									5%
								</ToggleGroup.Item>
								<ToggleGroup.Item
									className="ToggleGroupItem"
									value="10"
								>
									10%
								</ToggleGroup.Item>
								<ToggleGroup.Item
									className="ToggleGroupItem"
									value="15"
								>
									15%
								</ToggleGroup.Item>
								<ToggleGroup.Item
									className="ToggleGroupItem"
									value="25"
								>
									25%
								</ToggleGroup.Item>
								<ToggleGroup.Item
									className="ToggleGroupItem"
									value="50"
								>
									50%
								</ToggleGroup.Item>
								<ToggleGroup.Item
									className="ToggleGroupItem"
									value={percentage}
								>
									<input
										type="number"
										placeholder="Custom %"
										className="w-full placeholder:text-center placeholder:text-cyan-dark"
										onChange={(event) => {
											setPercentage(event.target.value);
										}}
									/>
								</ToggleGroup.Item>
							</ToggleGroup.Root>
						</div>
						<div>
							<div className="flex flex-row justify-between">
								<h2>Number of people</h2>
								<h5>{errors.people?.message}</h5>
							</div>
							<div
								className={`number_field ${
									errors.people?.message == undefined
										? ""
										: "focus-within:ring-red-400"
								}`}
							>
								<User
									size={18}
									className="text-cyan-gray"
									weight="fill"
								/>
								<Controller
									render={({ field }) => (
										<NumericFormat
											placeholder="0"
											allowNegative={false}
											allowLeadingZeros={false}
											className="flex-1 text-right focus-within:outline-none bg-transparent text-2xl "
											onKeyDown={() => trigger("people")}
											onKeyUp={() => trigger("people")}
											{...field}
										/>
									)}
									name="people"
									control={control}
									rules={{
										maxLength: {
											value: 4,
											message: "Max length is 4 digits",
										},
										min: {
											value: 0.01,
											message: "Can't be zero",
										},
									}}
								/>
							</div>
						</div>
					</div>
					<div className="bg-cyan-very_dark p-6 pt-10  rounded-xl flex flex-col gap-7">
						<div className="money">
							<div className="title">
								<h3>Tip Amount</h3>
								<h4>/ person</h4>
							</div>
							<span>{`$ ${
								tipAmount == Infinity ||
								Number.isNaN(tipAmount) ||
								tipAmount <= 0
									? "0.00"
									: tipAmount
							}`}</span>
						</div>
						<div className="money px-0">
							<div className="title">
								<h3>Total</h3>
								<h4>/ person</h4>
							</div>

							<span>{`$ ${
								total == Infinity ||
								Number.isNaN(total) ||
								total <= 0
									? "0.00"
									: total
							}`}</span>
						</div>
						<button className="bg-cyan-strong text-cyan-very_dark w-full rounded-md p-3 text-xl hover:bg-[#9fe8df]">
							RESET
						</button>
					</div>

					<div className="text-center pt-4">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/guilhermefigueira"
							target="_blank"
							className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
						>
							Guilherme Figueira
						</a>
						.
					</div>
				</main>
			</form>
		</div>
	);
}

export default App;
