import { HTMLInputTypeAttribute } from 'react'

export interface CustomInputProps {
	label: string
	placeholder?: string
	type: HTMLInputTypeAttribute
	inputClassName?: string
}

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	placeholder,
	type,
	inputClassName,
}): JSX.Element => {
	return (
		<div className='flex flex-col space-y-2'>
			<label className='text-gray-700 font-medium'>{label}</label>
			<input
				className={`border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
				type={type}
				placeholder={placeholder}
			/>
			<button className='mt-10 block p-2 border-2 border-neutral-950 hover:bg-neutral-950 hover:text-white'>
				Generate Summary
			</button>
		</div>
	)
}

export default CustomInput
