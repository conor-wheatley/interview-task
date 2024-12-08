import React, { useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Box,
} from '@mui/material';

const VenueTable = ({ venues }) => {
  	const [selectedVenue, setSelectedVenue] = useState(null);

	const handleViewDetails = (venue) => {
		setSelectedVenue(venue);
	};

	const handleClose = () => {
		setSelectedVenue(null);
	};

	return (
		<>
			<TableContainer
				component={Paper}
				sx={{
				borderRadius: '12px',
				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
				maxHeight: 500,
				overflow: 'auto',
				}}
			>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>
								<Typography fontWeight="bold">Image</Typography>
							</TableCell>
							<TableCell>
								<Typography fontWeight="bold">Name</Typography>
							</TableCell>
							<TableCell>
								<Typography fontWeight="bold">Location</Typography>
							</TableCell>
							<TableCell>
								<Typography fontWeight="bold">Capacity</Typography>
							</TableCell>
							<TableCell>
								<Typography fontWeight="bold">Description</Typography>
							</TableCell>
							<TableCell align="center">
								<Typography fontWeight="bold">Actions</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{venues.map((venue) => (
							<TableRow key={venue.id}>
								{/* Image Column */}
								<TableCell>
									<Box
										component="img"
										src={venue.photo}
										alt={venue.name}
										sx={{
										width: 50,
										height: 50,
										borderRadius: '8px',
										objectFit: 'cover',
										boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
										}}
									/>
								</TableCell>
								<TableCell>{venue.name}</TableCell>
								<TableCell>{venue.location}</TableCell>
								<TableCell>{venue.capacity}</TableCell>
								<TableCell>{venue.description}</TableCell>
								<TableCell align="center">
									<Button
										variant="contained"
										color="primary"
										size="small"
										sx={{ textTransform: 'none' }}
										onClick={() => handleViewDetails(venue)}
									>
										View Details
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{/* Viewing Details */}
			{selectedVenue && (
				<Dialog open={!!selectedVenue} onClose={handleClose}>
					<DialogTitle>{selectedVenue.name}</DialogTitle>
					<DialogContent>
						<Box
							component="img"
							src={selectedVenue.photo}
							alt={selectedVenue.name}
							sx={{
								width: '100%',
								height: 'auto',
								borderRadius: '12px',
								marginBottom: 2,
							}}
						/>
						<Typography variant="body1" gutterBottom>
							<strong>Location:</strong> {selectedVenue.location}
						</Typography>
						<Typography variant="body1" gutterBottom>
							<strong>Capacity:</strong> {selectedVenue.capacity}
						</Typography>
						<Typography variant="body1" gutterBottom>
							<strong>Description:</strong> {selectedVenue.description}
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="secondary" variant="contained">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
};

export default VenueTable;
