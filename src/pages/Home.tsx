import { Link } from 'react-router-dom'
import Typed from 'react-typed'
import bgImage from '../assets/images/bg-image-header.jpg'

const typedStrings = ['AI Powered', 'Time Saving', 'Completely Free']

const Home: React.FC<{}> = (): JSX.Element => {
	return (
		<div
			className='p-10 h-screen bg-slate-900 text-white'
			style={{
				backgroundImage: `url: '${bgImage}'`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div>
				<h1 className='p-0 text-5xl font-normal text-white lg:pl-10 lg:text-7xl'>
					SummarizeIt{' '}
					<i
						className='fa-regular fa-microchip-ai'
						style={{ color: 'white' }}
					></i>
				</h1>
				<h2 className='text-sm font-extralight lg:text-lg'>
					#1 Summary Generation Tool
				</h2>
			</div>
			<div className='text-center mt-36 lg:mt-56'>
				<h1 className='text-4xl font-regular lg:text-5xl'>
					<Typed loop strings={typedStrings} backSpeed={50} typeSpeed={60} />
				</h1>
			</div>
			<div className='mt-10 lg:text-center'>
				<h1 className='text-xl font-bold lg:text-3xl'>
					A summary generator tool that will save <br />
					<a
						href='https://en.wikipedia.org/wiki/Time'
						target='__blank'
						className='font-light text-lg text-blue-400 hover:text-blue-600'
					>
						the most important aspect of every person's life
					</a>
				</h1>
				<Link
					to='/summarizeit'
					className='text-center mt-8 block p-2 border-solid border-2 border-neutral-50 w-28 m-auto hover:bg-neutral-50 hover:text-black'
				>
					Try It Out
				</Link>
			</div>
		</div>
	)
}

export default Home
