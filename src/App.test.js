import { render, screen } from '@testing-library/react';
import App from './App';

test( 'muestra Hola mundo en la página', () => {
  render( <App /> );
  const elemento = screen.getByText( /hola mundo/i );
  expect( elemento ).toBeInTheDocument();
} );
