describe( 'mocks', () => {




  test( 'ejemplo de mock 1', () => {
    const mock = jest.fn();
    console.log({mock} )
    mock();
     mock();
    expect( mock ).toHaveBeenCalled();
  })


})