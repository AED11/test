import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import { AboutUs, Login, Main } from './routes/routes'
import Course from './pages/course/course'
import { Suspense } from 'react'
import Loading from './components/loading/loading'
import ProductById from './pages/products/productById/productById'

const App = () => {
	let router = createBrowserRouter([
		{
			element: (
				<Suspense fallback={<Loading />}>
					<Layout />
				</Suspense>
			),
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<Loading />}>
							<Main />
						</Suspense>
					),
				},
				{
					path: '/about',
					element: (
						<Suspense fallback={<Loading />}>
							<AboutUs />
						</Suspense>
					),
				},
				{
					path: '*',
					element: (
						<Suspense fallback={<Loading />}>
							<Course />
						</Suspense>
					),
				},
				{
					path: '/productById/:id',
					element: (
						<Suspense fallback={<Loading />}>
							<ProductById />
						</Suspense>
					),
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
	])
	return <RouterProvider router={router}></RouterProvider>
}

export default App
