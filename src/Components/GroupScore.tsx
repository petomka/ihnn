import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// Table Imports
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
// icon imports
import { GroupContext } from '../Context/GroupContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { PieChart } from 'react-minimal-pie-chart';



/* !!!!! aktuell keine Verwendung weil diese Componente in die Game Komponente ausgelagert wurde !!!!
   Dies kann sich aber auch wieder ändern je nach dem wie ich eine Lösung finde (Jannik) */

const Block = styled(Paper)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(27, 33, 40, 0.8)'
            : 'rgba(145, 115, 94, 1)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));

export default function GroupScore() {
    const { roundCounter, group } = React.useContext(GroupContext);

    return (
        <>
            <Block elevation={10}>
                <h3>Runden gespielt: {roundCounter}</h3>
                <TableContainer component={Paper}>
                    <Table 
                        sx={{
                            minWidth: 250,
                            
                            
                        }}
                    >
                        <TableHead ></TableHead>
                        <TableBody>
                            {/* Table bauen pro Gruppenmitglied */}
                            {group.map((currentPlayer) => (
                                <TableRow key={currentPlayer.playerId}>
                                    <TableCell
                                        align="left"
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: currentPlayer.color,
                                            }}
                                        >
                                            {currentPlayer.shortname}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                    >
                                        {currentPlayer.name}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                    >
                                        <CheckCircleIcon color="success" />
                                        {currentPlayer.iDidCounter}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                    >
                                        <CancelIcon color="error" />
                                        {currentPlayer.iDidNotCounter}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Block>
        </>
    );
}

export function GroupScoreChart() {
    const { group } = React.useContext(GroupContext);
    const allIDid = group
        .map((currentPlayer) => currentPlayer.iDidCounter)
        .reduce((currentValue, perItem) => {
            currentValue += perItem;
            return currentValue;
        }, 0);
    const allIDidNot = group
        .map((currentPlayer) => currentPlayer.iDidNotCounter)
        .reduce((currentValue, perItem) => {
            currentValue += perItem;
            return currentValue;
        }, 0);

    const voteData = [
        { title: 'Yes', value: allIDid, color: '#013e4f' },
        { title: 'No', value: allIDidNot, color: '#ac0014' },
    ];

    if (allIDid === 0 && allIDidNot === 0) {
        return (
            <>
                <Block elevation={10}>
                    <h3>Verteilung aller Stimmen</h3>
                    <p>Es wurden keine Stimmen abgegeben</p>
                </Block>
            </>
        );
    }

    return (
        <>
            <Block elevation={10}>
                <h3>Verteilung aller Stimmen</h3>
                <PieChart
                    data={voteData}
                    lineWidth={20}
                    paddingAngle={18}
                    radius={50}
                    style={{ height: '500px' }}
                    rounded
                    label={({ dataEntry }) => dataEntry.value}
                    /* JSX props should not use arrow functions ? */
                    labelStyle={(index) => ({
                        fill: voteData[index].color,
                        fontSize: '8px',
                        fontFamily: 'sans-serif',
                    })}
                    labelPosition={60}
                />
            </Block>
        </>
    );
}
