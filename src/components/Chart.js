import React, { Component } from 'react';

import ChartRow from './ChartRow';

class Chart extends Component {
	constructor() {
		super()
		this.state = {
			movies: []
		}
	}

	async componentDidMount() {
		const response = await fetch("/api/movies")
		const data = await response.json()
		this.setState({ movies: data.data })
	}
	render() {
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				< h1 className="h3 mb-2 text-gray-800" > All the movies in the Database</h1 >

				{/*<!-- DataTales Example -->*/}
				< div className="card shadow mb-4" >
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.movies.map((movie, i) => {
											return <ChartRow {...movie} key={movie + i} />
										})
									}
								</tbody>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div >
			</React.Fragment >
		)


	}

}


export default Chart;