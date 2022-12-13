import React from "react";
import './myStyle.css';
import {Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


export const EditTask = () => {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [status, setStatus] = React.useState('')

    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    const descriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const statusChange = (event) => {
        setStatus(event.target.value)
    }
    const submitHandler = () => {
        //API call
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label style={titleStyle}>
                        Task Management > Edit
                    </label>
                </div>
                <div>
                    <br/>
                    <label style={subjectStyle}>
                        Edit Task
                    </label>
                </div>
                <div>
                    <br/>
                    <TextField id="filled-basic" label="Title" variant="filled" placeholder="Title of the task"
                               size="small"
                               style={{width: "23%", paddingBottom: "1%"}}
                               onChange={titleChange}/>
                </div>
                <div>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={17}
                        placeholder="Description of task goes here."
                        variant="filled"
                        style={{width: "23%"}}
                        onChange={descriptionChange}
                    />
                </div>
                <div>
                    <FormControl variant="filled" style={{width: "23%"}} sx={{m: 1, minWidth: 120, paddingTop: "0.3%"}}>
                        <InputLabel id="demo-simple-select-filled-label"></InputLabel>
                        <Select defaultValue={10} style={{textAlign: "left"}}
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                onChange={statusChange}
                        >
                            <MenuItem value={10}>Todo</MenuItem>
                            <MenuItem value={20}>Done</MenuItem>
                            <MenuItem value={30}>inQA</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Stack direction="row" spacing={1.5} style={{paddingTop: "0.3%"}}>
                    <Button variant="contained" startIcon={<EditIcon/>} fullWidth
                            style={{marginLeft: "38.5%", height: "48px", textTransform: 'none'}}>
                        Edit
                    </Button>
                    <Button variant="outlined" fullWidth
                            style={{marginRight: "38.5%", height: "48px", textTransform: 'none'}}>
                        Cancel
                    </Button>
                </Stack>
                <div>
                    <br/></div>
            </form>
        </div>
    )
}

const titleStyle = {
    color: "white",
    backgroundColor: "rgb(23,117,185)",
    padding: "11px",
    paddingLeft: "25px",
    marginLeft: "37%",
    marginRight: "37%",
    fontFamily: "Arial",
    marginTop: "2px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    height: "21px",
    fontWeight: 500,
    fontSize: 18
};

const subjectStyle = {
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontStyle: "bold",
    fontSize: "larger",
    marginRight: "17%",
    fontWeight: 700,
}

