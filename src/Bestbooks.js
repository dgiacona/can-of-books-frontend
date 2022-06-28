import React from 'react';

return(){
  
}
getBestbooks = async () => {
  console.log('I fired');
  try {
    let results = await axios.get(`${SERVER}/books`);
    console.log(results.data);
    this.setState({
      bestbooks: results.data
    })
  } catch (error) {
    console.log('we have an error: ', error.response.data)
  }
}
componentDidMount() {
  this.getCats();
}




class Bestbooks extends React.Component {
  render() {
    return (
      <>
        {this.props.bestbooks.length && this.props.bestbooks.map((cat, idx) => (
          <div key={idx}>
            {/* {cat.name} in {cat.location} */}
          </div>
        ))}
      </>
    )
  }
}

export default Bestbooks;