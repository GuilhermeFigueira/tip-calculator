import { ReactNode } from "react";

interface PercentageProps {
	children: ReactNode;
	value: string;
	custom?: boolean;
	isSelected?: boolean;
}

export default function Percentage({
	children,
	value,
	custom,
	isSelected,
}: PercentageProps) {
	return (
		<div
			className={`text-2xl text-center rounded-lg p-2 items-center transition-all hover:cursor-pointer
            ${(() => {
				if (custom) return "bg-cyan-very_light text-cyan-dark";
				if (isSelected) return "bg-cyan-strong text-cyan-very_dark";
				else
					return "bg-cyan-very_dark text-white hover:bg-[#9fe8df] hover:text-cyan-very_dark";
			})()}
            focus-within:ring-2 focus-within:ring-cyan-strong 
            `}
		>
			{custom ? (
				<input
					type="text"
					placeholder="Custom"
					className="w-full bg-transparent focus:outline-none text-cyan-very_dark placeholder:text-center text-right"
				/>
			) : (
				children
			)}
		</div>
	);
}
