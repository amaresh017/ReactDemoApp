var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var desc = this.refs.description.value;
    console.log("Name : " + name + "and Description : " + desc);
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: desc } },
      success: (item) => {
        console.log("new item created", response);
        this.props.handleSubmit(item);
      }
    });
  },
  
  render(){
    return(
      <div >
        <h4>Add New Item</h4>
        <input type='text' ref='name' placeholder='Enter the name of item' />
        <input type='text' ref='description' placeholder='Enter the description of item' />
        <button onClick={ this.handleClick }> Submit </button>
      </div>
    )
  }
});
