import * as React from 'react';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {getProductById,} from "../../store/products";
import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import toast, {Toaster} from "react-hot-toast";

const Search = () => {
    const [search, setSearch] = useState<number | ''>('')
    const dispatch = useDispatch<AppDispatch>()

    const handleSearch = () => {
        if(!search)return
        const api = new Promise((resolve, reject)=>{
            dispatch(getProductById({id:search})).then((res)=>{
                res.payload ? resolve(res) : reject(res)
            })
        })
        // dispatch(getProductById({id:search}))
       return toast.promise(
            api,
            {
                loading: 'Saving...',
                success: <b>Udało się znaleźć produkt.</b>,
                error: <b>Produkt nie został znaleziony!</b>,
            }
        );
    };


    const handleChange = (e:any) =>{
        setSearch(e.target.value)
    }

    return (
       <div>
           <TextField value={search} onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
           <Button onClick={handleSearch} variant="contained">Contained</Button>
           <Toaster position="top-right" />
       </div>
    );
}
export default Search
