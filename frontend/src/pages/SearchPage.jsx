import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import VenueTable from '../components/VenueTable';

const SearchPage = () => {
	const [venues, setVenues] = useState([]);
	const [filteredVenues, setFilteredVenues] = useState([]);
	const [filters, setFilters] = useState({ name: '', capacity: '', location: '' });

	useEffect(() => {
		fetch('/data/venues.json')
		.then((response) => response.json())
		.then((data) => {
			setVenues(data);
			setFilteredVenues(data);
		});
	}, []);

	const handleFilterChange = (updatedFilters) => {
		setFilters(updatedFilters);
		const filtered = venues.filter(
		(venue) =>
			venue.name.toLowerCase().includes(updatedFilters.name.toLowerCase()) &&
			(updatedFilters.capacity === '' || venue.capacity >= Number(updatedFilters.capacity)) &&
			venue.location.toLowerCase().includes(updatedFilters.location.toLowerCase())
		);
		setFilteredVenues(filtered);
	};

	return (
		<Box
			sx={{
				minHeight: '100vh',
				background: 'linear-gradient(135deg, #f9f9f9 0%, #e0f7fa 100%)',
				padding: 4,
			}}
		>
			<Container
				sx={{
					marginTop: 4,
					padding: 3,
					borderRadius: '12px',
					boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
					backgroundColor: '#ffffff',
				}}
			>
				<Typography variant="h4" fontWeight="bold" gutterBottom>
					Venue Finder
				</Typography>
				<SearchBar filters={filters} onFilterChange={handleFilterChange} />
				<VenueTable venues={filteredVenues} />
			</Container>
		</Box>
	);
};

export default SearchPage;
