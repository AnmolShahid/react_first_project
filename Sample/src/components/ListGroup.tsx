

function ListGroup() {

    var items =[
        'New York',
        'HomeLand',
        'Sydney',
        'Lahore'
    
    ];

  

  return (
    <>
    <h1>ListGroup</h1>
   { items.length == 0 && 'No data found' ? 'No data found': 
    <ul className="list-group">
    {items.map((item) =>
        <li key={item} className="list-group-item">{item }</li>)}
</ul>}
    </>
  );
}


export default ListGroup