import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

export function Dashboard() {
  const history = useHistory();
  return (
    <Container>
      <h1>
        Dashboard
      </h1>
      <h2>Menu</h2>
      <Grid container spacing={1}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => history.push('/agendamento')}>
            Novo Agendamento
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => history.push('/servico')}>
            Novo Serviço
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => {}}>
            Novo Profissional
          </Button>
        </Grid>
      </Grid>
      <h2>
        Hoje
      </h2>
    </Container>
  )
}