import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Card from './Card'
import Nav from './Nav'
const Coutries = (props) => {
	const [data, setData] = useState()
	const [searchQuery, setSearchQuery] = useState('')

	const [fetchStatus, setFetchStatus] = useState('IDLE')

	const handleSearch = (e) => {
		console.log(e.target.value)
		setSearchQuery(e.target.value)
	}

	useEffect(() => {
		fetchData()
	}, [])

	async function fetchData() {
		setFetchStatus('LOADING')
		const res = await fetch('https://restcountries.com/v3.1/all')

		res
			.json()
			.then((res) => {
				setFetchStatus('SUCCESS')
				setData(res)
			})
			.catch((err) => toast('Some Error Occured'))
	}

	const results = !searchQuery
		? data
		: data.filter(
				(d) => d.name.common.toLowerCase() === searchQuery.toLowerCase()
		  )

	return (
		<React.Fragment>
			<Nav />
			<div className="title-wrapper">
				<h1 className="allCountries-title">List of all countries</h1>
				<input
					type="text"
					name="search"
					id="search"
					value={searchQuery}
					onChange={handleSearch}
					placeholder="Search..."
					className="bg-gray-200 focus:bg-white border-transparent focus:border-blue-400"
				/>
			</div>
			<div className="list-wrapper">
				{fetchStatus === 'LOADING' && <div className="loader">Loading</div>}

				{results &&
					results.map((country) => (
						<Card key={country.ccn3} country={country} />
					))}
			</div>
		</React.Fragment>
	)
}

export default Coutries
