import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { DataProductsParams } from "../../store/products/types";
import PaginationControlled from "./pagination";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StyledTableCell = styled(TableCell)<{ background?: string }>(({ theme, background }) => ({
    backgroundColor: background || "black",
    color: theme.palette.common.white,
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function CustomizedTables() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (row: DataProductsParams) => {
        setId(row.id);
        setName(row.name);
        setyear(row.year);
        setColor(row.color);
        setPantone_value(row.pantone_value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [year, setyear] = useState(0);
    const [color, setColor] = useState("");
    const [pantone_value, setPantone_value] = useState("");
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '5px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const { products } = useSelector((state: RootState) => state.products)
    
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Year</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.data.map((row: DataProductsParams) => (

                            <StyledTableRow key={row.name} onClick={() => handleOpen(row)}>
                                <StyledTableCell background={row.color}>{row.id}</StyledTableCell>
                                <StyledTableCell background={row.color}>{row.name}</StyledTableCell>
                                <StyledTableCell background={row.color}>{row.year}</StyledTableCell>

                            </StyledTableRow>


                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationControlled />
            <Modal
                open={open}
                onClose={handleClose}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        DATA:
                    </Typography>

                    <ul>
                        <li>ID: {id}</li>
                        <li>Name: {name}</li>
                        <li>Year:{year}</li>
                        <li>Color: {color}</li>
                        <li>Pantone value: {pantone_value}</li>
                    </ul>


                </Box>
            </Modal>
        </div>

    );
}
