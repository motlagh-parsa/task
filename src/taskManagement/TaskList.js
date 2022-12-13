import React from "react";
import {Box, createTheme, Grid, Paper, styled, TableContainer, ThemeProvider} from "@mui/material";

const allTasks = [
    {id: 'one', value: 'first'},
    {id: 'two', value: 'second'},
    {id: 'three', value: 'third'},
    {id: 'four', value: 'fourth'},
]

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150,
    width: 150,
    marginLeft: -4,
    lineHeight: '60px',
}));

export const TaskList = () => {
    const lightTheme = createTheme({palette: {mode: 'light'}});
    const [tasks, setTasks] = React.useState(allTasks)
    const Elevation = () => {
        if (tasks.length === 0)
            return <div style={noWorkStyle}>You have nothing to do.<br/>Go grt some sleep.</div>

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
                <Grid container spacing={2} >
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
                                        <Item key={task.id}>
                                            {task.value}
                                        </Item>
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
    paddingLeft: "18px",
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

// const scrollStyle = {
//     overflowY: "scroll",
// }

// const paperStyle = {
//     width: "50%",
//     marginLeft: "-13%",
//     height: "155px",
//     display: "inherit"
// }