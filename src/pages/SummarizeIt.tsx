import { useState } from 'react'
import CustomInput from '../components/CustomInput'

const SummarizeIt: React.FC<{}> = (): JSX.Element => {
	return (
		<form className='flex justify-center items-center h-100'>
			<CustomInput
				label='Paste article URL here'
				type='text'
				placeholder='https://cool-blog.com...'
			/>
		</form>
	)
}

export default SummarizeIt
