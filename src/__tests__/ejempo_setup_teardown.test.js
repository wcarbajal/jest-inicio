describe( 'setup and teardown', () => {

  beforeAll( () => {
    console.log( 'antes de todo' );
  } );

  beforeEach( () => {
    console.log( 'para cada prueba' );
  } );

afterEach( () => {
  console.log( 'después de cada prueba' );
}) 

  afterAll( () => {
    console.log( 'Al final de todo' );
  } );

  test( 'ejemplo 1', () => {
    expect( true ).toBe( true );
  } );

  test( 'ejemplo 2', () => {
    expect( true ).toBe( true );
  } );



} );