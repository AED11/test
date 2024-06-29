import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
	let { pathname } = useLocation()
	console.log(pathname)
	return (
		<div>
			<Link to={'/'} className={pathname == '/' ? 'text-[red]' : 'text-black'}>
				Home
			</Link>
			<Link
				to='/about'
				className={pathname == '/about' ? 'text-[red]' : 'text-black'}
			>
				About us
			</Link>
			<Link
				to='/login'
				className={pathname == '/login' ? 'text-[red]' : 'text-black'}
			>
				Login
			</Link>
      
			<Outlet />
			Footer
		</div>
	)
}

export default Layout
