import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC<{}> = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className=''>
			<div className='mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<Link to='/' className='text-slate-950 text-2xl font-black'>
							SummarizeIt
						</Link>
					</div>
					<div className='flex md:hidden'>
						<button
							onClick={toggleMenu}
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
						>
							<svg
								className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
								stroke='currentColor'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
							<svg
								className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
								stroke='currentColor'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
					<div className='hidden md:flex'>
						<Link
							to='/'
							className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							Home
						</Link>
						<Link
							to='/contact'
							className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							Try It!
						</Link>
						<Link
							to='/about'
							className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							About
						</Link>
					</div>
				</div>
			</div>
			<div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800`}>
				<div className='px-2 pt-2 pb-3 sm:px-3'>
					<Link
						to='/'
						className='block text-white hover:text-white px-3 py-2 rounded-md text-base font-light'
					>
						Home
					</Link>
					<Link
						to='/summarizeit'
						className='block text-white hover:text-white px-3 py-2 rounded-md text-base font-light'
					>
						Try It
					</Link>
					<Link
						to='/about'
						className='block text-white hover:text-white px-3 py-2 rounded-md text-base font-light'
					>
						About
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
