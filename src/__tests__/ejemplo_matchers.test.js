describe( 'Ejemplo de matchers', () => {

  test( 'ToBe', () => {
    expect( true ).toBe( true );
  } );

  test( 'toEqual', () => {

    const dato = { one: 1 };
    dato[ 'two' ] = 2;
    expect( dato ).toEqual( { one: 1, two: 2 } );
  } );

  test( 'not', () => {

    expect( false ).not.toEqual( true );
  } );

  test( '2 + 2', () => {
    const value = 2 + 2;
    expect( value ).toBeGreaterThan( 3 );
    expect( value ).toBeGreaterThanOrEqual( 3.5 );
    expect( value ).toBeLessThan( 5 );
    expect( value ).toBeLessThanOrEqual( 4.5 );

    // toBe and toEqual are equivalent for numbers
    expect( value ).toBe( 4 );
    expect( value ).toEqual( 4 );
  } );

  test('there is no I in team', () => {
  expect('team').toMatch(/e/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

} );

