import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {loadProducts} from "../../store/products";
import {useEffect} from "react";

const PaginationControlled = () => {
    const { products } = useSelector((state: RootState) => state.products)
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(loadProducts({page:page}))
    },[page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={products.total_pages} page={page} onChange={handleChange} />
        </Stack>
    );
}
export default PaginationControlled
