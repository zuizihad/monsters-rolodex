import React, { Component } from 'react';

class Input extends Component {
  state = {
    CompanyName: "zihad",
    CompanyPhone: "13813",
    Color: [],
    Quantity: [],
    UMO: [],
    Rate: [],
    RateUmo: [],
    
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  appendChild = () => {
    let { Color,Quantity, UMO,RateUmo,Rate } = this.state;
   Color.push(Color.length); // data.length is one more than actual length since array starts from 0.
    // Every time you call append row it adds new element to this array. 
    // You can also add objects here and use that to create row if you want.
    this.setState({Color,Quantity,UMO,Rate,RateUmo});
    console.log(this.state)
  };


  render() {
    const { CompanyName, CompanyPhone, Color, Quantity, UMO,Rate,RateUmo } = this.state;

    return (
      <div className="container">
        <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">add_location</i>
                    <input id="company_name" type="text" className="validate" name="CompanyName"value={CompanyName}  />
                    <label htmlFor="company_name">Company Name</label>
                </div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input id="company_phone" type="text" className="validate" name="CompanyPhone"value={CompanyPhone}  />
                    <label htmlFor="company_phone">Company Phone</label>
                </div>
            </div>
        <table>
        <thead>
          <th>Color</th>
          <th>Quantity</th>
          <th>UMO</th>
          <th>Rate</th>
          <th>RateUmo</th>
        </thead>
        <tbody>
          {this.state.Color.map(id => (
            <Row id = {id} key={id} />
          ))}
        </tbody>
      </table><br/>
      <button className="btn waves-effect waves-light" onClick={this.appendChild}>Add Row </button> <br/><br/>
      <button className="btn waves-effect waves-light">submit </button>
        
      </div>
    );
  }
}
const Row = ({ id, UMO,Rate,RateUmo,Color,Quantity }) => (
  <tr>
    <td><input type='text' id={`Color-${id}`} name='Color' value={Color} /></td>
    <td><input type='text'id={`Quantity-${id}`} name='Quantity' value={Quantity}  /></td>
    <td><input type='text'id={`umo-${id}`} name='umo' value={UMO} /></td>
    <td><input type='text'id={`Rate-${id}`} name='Rate' value={Rate} /></td>
    <td><input type='text'id={`RateUmo-${id}`} name='RateUmo' value={RateUmo}/></td>
  </tr>
);
export default Input;
