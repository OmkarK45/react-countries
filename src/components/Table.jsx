import React from 'react'

const Table = ({ data }) => {
	return (
		<React.Fragment>
			<div className="details">
				<div className="one">
					<ul>
						<li>
							<span className="property">
								{' '}
								<i className="far fa-users"></i> Population
							</span>{' '}
							:<span className="value">{data.population}</span>
						</li>
						<li>
							<span className="property">
								{' '}
								<i className="fab fa-fort-awesome"></i> Capital
							</span>{' '}
							:<span className="value">{data?.capital[0]}</span>
						</li>
					</ul>
				</div>
				<div className="two">
					<ul>
						<li>
							<span className="property">
								<i className="far fa-rectangle-wide"></i> Area
							</span>{' '}
							:{' '}
							<span className="value">
								{data.area} Km<sup>2</sup>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Table
