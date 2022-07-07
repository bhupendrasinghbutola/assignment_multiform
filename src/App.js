import LinearStepper from "./LinearStepper";
import {  Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
      
      <Container component={Box} p={3}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
        <footer >Ⓒ BhupendraSinghButola </footer>
      </Container>
    </>
  );
}

export default App;
