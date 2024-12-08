import React from 'react';
import { Box, TextField } from '@mui/material';

const SearchBar = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'space-between',
                }}
            >
                <TextField
                    label="Search by Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={filters.name}
                    onChange={handleChange}
                    sx={{ borderRadius: '8px' }}
                />
                <TextField
                    label="Minimum Capacity"
                    variant="outlined"
                    fullWidth
                    name="capacity"
                    value={filters.capacity}
                    onChange={handleChange}
                    sx={{ borderRadius: '8px' }}
                />
                <TextField
                    label="Search by Location"
                    variant="outlined"
                    fullWidth
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    sx={{ borderRadius: '8px' }}
                />
            </Box>
        </Box>
    );
};

export default SearchBar;