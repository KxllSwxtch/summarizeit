import Navigation from './Navigation'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<div>
			<Navigation />
			<main className='p-10'>{children}</main>
		</div>
	)
}

export default Layout
