import { storage } from '../lib/storage';

import { saveUsername, getUsername } from '../user';


jest.mock( '../lib/storage' );

test( 'ejemplo de mocks', () => {
  const mock = jest.fn()
    .mockReturnValueOnce( true )
    .mockReturnValueOnce( 'Hello world' )
    .mockReturnValueOnce( 5 );

  const value1 = mock();
  const value2 = mock();
  const value3 = mock();

  expect( mock ).toHaveBeenCalledTimes( 3 );
  expect( value1 ).toBe( true );
  expect( value2 ).toBe( 'Hello world' );
  expect( value3 ).toBe( 5 );


  expect( mock ).toHaveBeenCalled();

} );

test( 'Second: Ejemplo de mock real', () => {

  const username = 'jonh doe';
  saveUsername( username );

  expect( storage.save ).toHaveBeenCalledTimes( 1 );
  expect( storage.save ).toHaveBeenCalledWith( { key: 'username', value: username } );

} );

test( 'third: Ejemplo de mock real', () => {

  const usename = 'jonh doe';
  storage.get.mockReturnValueOnce( 'jonh doe' );
  const result = getUsername();

  expect( result).toBe( usename );
  expect( storage.get ).toHaveBeenCalledTimes( 1 );
  expect( storage.get ).toHaveBeenCalledWith( { key: 'username' } );

} )

