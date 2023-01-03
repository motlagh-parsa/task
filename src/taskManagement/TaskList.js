import React, {createContext, useContext} from "react";
import {Box, createTheme, Grid, Paper, styled, TableContainer, ThemeProvider, Button} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {Link, Link as RouterLink} from "react-router-dom";
import {TaskContext} from "../App";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150,
    width: 150,
    marginLeft: -4,
    lineHeight: '60px',
}));

export const SelectedTask = createContext()

export const TaskList = (props) => {
    const tasks = useContext(TaskContext)
    // const {tasks} = props;
    const handleEdit = () => {

    }
    const lightTheme = createTheme({palette: {mode: 'light'}});

    const Elevation = () => {
        if (tasks.length === 0)
            return <div style={noWorkStyle}>You have nothing to do.<br/>Go get some sleep.</div>

        return (
            <TableContainer
                sx={{
                    "&::-webkit-scrollbar": {
                        width: 12
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "rgb(162,206,237)"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "black",
                        borderRadius: 2
                    }
                }}
            >
                <Grid container spacing={2}>
                    {[lightTheme].map((theme, index) => (
                        <Grid item xs={6} key={index}>
                            <ThemeProvider theme={theme}>
                                <Box
                                    sx={{
                                        p: 2,
                                        display: 'grid',
                                        gridTemplateColumns: {md: '1fr 1fr'},
                                        gap: 2,
                                    }}
                                >
                                    {tasks.map((task) => (
                                        <div key={task.title}>
                                            <Item>
                                                <div style={subjectStyle}>
                                                    <label style={{
                                                        marginRight: "60%",
                                                        wordWrap: "break-word",
                                                        color: "black"
                                                    }}>
                                                        {task.title}
                                                    </label>
                                                </div>
                                                <div style={{marginTop: "-18%", marginLeft: "-61%"}}>
                                                    {task.desc}
                                                </div>
                                                <div style={statusStyle}>
                                                    <label style={{marginTop: "-36%"}}>Todo</label>
                                                </div>
                                                <div style={{marginTop: "-28%", marginLeft: "65%"}}>
                                                    <Link to={`edit/${task.title}`}><BorderColorIcon/></Link>
                                                </div>
                                            </Item>
                                            <SelectedTask.Provider value={task}/>
                                        </div>
                                    ))}
                                </Box>
                            </ThemeProvider>
                        </Grid>
                    ))}
                </Grid>
            </TableContainer>
        )
    };

    return (
        <div>
            <label style={titleStyle}>
                Tasks
            </label>
            <label style={listStyle}>
                <Elevation/>
            </label>
            <br/>
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
    height: "51px",
    fontWeight: 500,
    fontSize: 18,
    borderRadius: "15px",
}

const listStyle = {
    color: "white",
    backgroundColor: "rgb(162,206,237)",
    padding: "11px",
    paddingLeft: "17px",
    marginLeft: "37%",
    marginRight: "37%",
    fontFamily: "Arial",
    marginTop: "-20px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    height: "300px",
    fontWeight: 500,
    fontSize: 18,
    borderRadius: "15px 15px 0px 0px",
}

const noWorkStyle = {
    textAlign: "center",
    color: "black",
    paddingTop: "35%",
}

const subjectStyle = {
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontStyle: "bold",
    fontSize: "larger",
    // marginRight: "17%",
    fontWeight: 700,
}

const statusStyle = {
    color: "white",
    backgroundColor: "rgb(23,117,185)",
    padding: "11px",
    // paddingLeft: "45px",
    marginLeft: "8%",
    marginRight: "36%",
    marginTop: "2px",
    display: "flex",
    flexDirection: "column",
    height: "13px",
    fontSize: 15,
    borderRadius: "5px 5px 5px 5px",
};

