import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonAppBar from '../Components/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AddGroupMember, ListGroupMember } from '../Components/GroupCreation';
import { blue } from '@mui/material/colors';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PrepareGame() {
    return (
        <>
            <Box sx={{ flexGrow: 0, m: 2 }}>
                <Grid container spacing={2}>
                    {/* for later use: grid layout with three boxes https://mui.com/material-ui/react-grid/
					<Grid item xs={12} sm={4}>
						<Settings />
					</Grid>
					<Grid item xs={12} sm={4}>
						<ListGroupMember />
					</Grid>
					<Grid item xs={12} sm={4}>
						<AddGroupMember />
					</Grid> */}

                    <Grid item xs={12} sm={6}>
                        <AddGroupMember />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListGroupMember />
                        <Box sx={{ mt: 2 }}>
                            {/* <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'rgba(81, 60, 41, 1)',
                                    color: 'white',
                                    ':hover': {
                                        bgcolor: 'rgba(53, 35, 22, 1)',
                                        color: 'white',
                                    },
                                    ':active': {
                                        bgcolor: 'rgba(53, 35, 22, 1)',
                                        color: 'white',
                                    },
                                }}
                            >
                                Spiel starten
                            </Button> */}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
