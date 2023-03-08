import { CurrencyDollar, User } from "phosphor-react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NumericFormat, PatternFormat } from "react-number-format";

function App() {
	const {
		register,
		watch,
		control,
		trigger,
		formState: { errors },
	} = useForm({
		defaultValues: {
			bill: "",
		},
	});
	const [percentage, setPercentage] = useState("5");
	// console.log(percentage);

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
							<h2>Bill</h2>
							<div className="number_field">
								<CurrencyDollar
									size={18}
									className="text-cyan-gray"
									weight="bold"
								/>
								<Controller
									control={control}
									{...register("bill", {
										maxLength: {
											value: 10,
											message: "Max length is 10 digits",
										},
										min: {
											value: 1,
											message: "Can't be 0",
										},
									})}
									render={() => (
										<NumericFormat
											placeholder="0"
											allowNegative={false}
											fixedDecimalScale
											decimalScale={2}
											decimalSeparator=","
											thousandSeparator="."
											className="flex-1 text-right focus-within:outline-none bg-transparent text-2xl "
										/>
									)}
								/>
								<span>{errors.bill?.message}</span>
								{/* <input
									type="number"
									{...register("cvc", {
										required: "Can't be blank",
										minLength: {
											value: 3,
											message: "Please enter a valid CVC",
										},
										maxLength: {
											value: 3,
											message: "Please enter a valid CVC",
										},
										max: {
											value: 999,
											message: "Please enter a valid CVC",
										},
									})}
									placeholder="e.g 123"
								/> */}
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
							<h2>Number of People</h2>
							<div className="number_field">
								<User
									size={18}
									className="text-cyan-gray"
									weight="fill"
								/>
								<input
									type="number"
									className="flex-1 text-right focus-within:outline-none bg-transparent text-2xl "
									placeholder="0"
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
							<span>$0,00</span>
						</div>
						<div className="money px-0">
							<div className="title">
								<h3>Total</h3>
								<h4>/ person</h4>
							</div>
							<span>$0,00</span>
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
