import React from 'react';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

export function Login() {
  const history = useHistory();
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => history.push('/dashboard')}>
        Login
      </Button>
    </div>
  )
}