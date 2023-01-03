import React from "react";
import {Button, FormControl, InputLabel, Stack, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import {TaskList} from "./TaskList";

export const AddTask = (props) => {
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    const descChange = (event) => {
        setDesc(event.target.value)
    }
    return (
        <div>
            <form>
                <div>
                    <label style={titleStyle}>
                        Task Management > Home
                    </label>
                </div>
                <div>
                    <br/>
                    <label style={subjectStyle}>
                        Add a new Task
                    </label>
                </div>
                <div>
                    <br/>
                    <TextField id="filled-basic" label="Title" variant="filled"
                               size="small"
                               style={{width: "23%", paddingBottom: "0.7%", marginLeft: "38.5%"}}
                               onChange={titleChange}
                    />
                </div>
                <div>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={5}
                        label="Description"
                        variant="filled"
                        style={{width: "23%", marginLeft: "38.5%"}}
                        onChange={descChange}
                    />
                </div>
                <Stack direction="row" style={{paddingTop: "0.6%"}}>
                    <Button variant="contained" startIcon={<AddIcon/>} fullWidth
                            style={{marginLeft: "38.5%", marginRight: "38.5%", height: "48px", textTransform: 'none'}}
                            onClick={() => props.onAdd(title, desc)}>
                        Add
                    </Button>
                </Stack>
            </form>
            <br/>
            {/*<TaskList title={title}/>*/}
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
    fontSize: 18,
};

const subjectStyle = {
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontStyle: "bold",
    fontSize: "larger",
    marginRight: "12%",
    fontWeight: 700,
}