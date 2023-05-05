import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Home, SummarizeIt } from './pages'
import { Layout } from './components'

const root = createRoot(document.getElementById('root') as HTMLElement)
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/summarizeit',
		element: (
			<Layout>
				<SummarizeIt />
			</Layout>
		),
	},
	{
		path: '/about',
		element: (
			<Layout>
				<About />
			</Layout>
		),
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
