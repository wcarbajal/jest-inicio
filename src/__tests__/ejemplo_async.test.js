//callback
const asyncCallback = ( cb ) => {
  setTimeout( () => {
    cb( false );
  }, 1000 );
}

//promesas


describe( 'Pruebas con async', () => {


  test('prueba con callback', ( done ) => {
    asyncCallback( (result) => {
      expect( result ).toBe( true );
      done();
    } );
  });


})



