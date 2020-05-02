import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



export default function SearchForm({ makeSearch }) {

    // function makeSearch(){
    //     var searchPokemon = document.getElementById('search').value
    //     console.log(searchPokemon)
    // }
    
    
    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={makeSearch("pikachu")}>
                <TextField id="standard-basic" label="Standard" />

            </form>
        </div>
    )
}
