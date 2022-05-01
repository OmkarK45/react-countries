import React from 'react'
import Table from './Table'
import Nav from './Nav'

const Country = ({
	location: {
		state: { country },
	},
}) => {
	return (
		<React.Fragment>
			<Nav />
			<div className="country-info-wrapper">
				<div className="image">
					<img src={country.flags.png} alt="" />
				</div>
				<div className="info">
					<h1>
						{' '}
						{country.name[0]} ({country.name.official})
					</h1>
					<Table data={country} />
				</div>
			</div>
		</React.Fragment>
	)
}

export default Country
