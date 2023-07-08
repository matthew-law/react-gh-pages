import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useState } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { StyledEngineProvider } from '@mui/material/styles';
// import Demo from './demo';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import TextField from '@mui/material/TextField';

export default function App() {
  return (
    <div className="App">
      {/* below: original template */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ButtonAppBar></ButtonAppBar>
      <br />
      <Container component="main" maxWidth="sm">
        {/* <Typography variant="h3">Title</Typography> */}
        <ControlledAccordions /> 
      </Container>
    </div>
  );
}

//  App;

export function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GIS Check
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Help
            </Typography> */}
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button variant="contained" color="success">Yes</Button>
        <Button>No</Button>
        <Button>NA</Button>
      </ButtonGroup>
    </Box>
  );
}

const initialchecklist = [
  { prompt: 'MM standard layout template (or equivalent project layout template) used:',
    id: 1,
    checked: 'no',
    comment: ''},
  { prompt: 'Appropriate MM logo used:',
    id: 2,
    checked: 'no',
    comment: ''}
];

const items = [
  { id: 1, title: 'Item 1', content: 'Content for Item 1' },
  { id: 2, title: 'Item 2', content: 'Content for Item 2' },
  { id: 3, title: 'Item 3', content: 'Content for Item 3' },
];

export function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [checklist, setItems] = useState(initialchecklist);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleCommentsChange = (event, id) => {
    const newItems = checklist.map((checkitem) =>
      checkitem.id === id ? { ...checkitem, notes: event.target.value } : checkitem
    );
    setItems(newItems);
  };

  return (
    <div>
      {checklist.map((checkitem) => (
        <Accordion expanded={expanded === `panel${checkitem.id}`} onChange={handleChange(`panel${checkitem.id}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${checkitem.id}-content`}
            id={`panel-${checkitem.id}-header`}
          >
            <Typography textAlign={'left'}>{checkitem.prompt}</Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <VariantButtonGroup />
            <TextField
              id={`comments-${checkitem.id}`}
              label="Comments"
              // value={checkitem.comment}
              multiline
              onChange={(event) => handleCommentsChange(event, checkitem.id)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    //   <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2bh-content"
    //       id="panel2bh-header"
    //     >
    //       <Typography>Users</Typography>
    //       {/* <Typography sx={{ color: 'text.secondary' }}>
    //         You are currently not an owner
    //       </Typography> */}
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
    //         varius pulvinar diam eros in elit. Pellentesque convallis laoreet
    //         laoreet.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel3bh-content"
    //       id="panel3bh-header"
    //     >
    //       <Typography sx={{ width: '33%', flexShrink: 0 }}>
    //         Advanced settings
    //       </Typography>
    //       <Typography sx={{ color: 'text.secondary' }}>
    //         Filtering has been entirely disabled for whole web server
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
    //         amet egestas eros, vitae egestas augue. Duis vel est augue.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel4bh-content"
    //       id="panel4bh-header"
    //     >
    //       <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
    //         amet egestas eros, vitae egestas augue. Duis vel est augue.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    // </div>
  );
}
