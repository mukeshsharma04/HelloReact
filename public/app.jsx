//Presentational component it just take props and show data
var GreeterMessage = React.createClass({
 render : function() {
  var name = this.props.name;
  var message = this.props.message;
  return(
   <div>
    <h1>Hello {name}</h1>
    <p>Hello {message}</p>
   </div>
  );
 }
});

//Presentational component it just take props and show data
var GreeterForm = React.createClass({
 onFormSubmit :function(e) {
  e.preventDefault();
  var nameRef = this.refs.name;
  var name = nameRef.value;

  var messageRef = this.refs.message;
  var message = messageRef.value;
  if(name.length > 0 && message.length > 0) {
   nameRef.value = '';
   messageRef.value = '';
   this.props.onNewData(name,message);
  }

 },

 render : function() {
  return (
   <div>
    <form onSubmit={this.onFormSubmit}>
     <label>Name :</label><input type="text" placeholder="Enter your new name" ref="name"/><br/> <br/>
     <label>Message :</label><textarea placeholder="Enter your new message" ref="message"></textarea><br/><br/>
     <button>SUBMIT</button>
    </form>
   </div>
  );
 }
});


//Container component it maintain state and props
var Greeter = React.createClass({

 getDefaultProps : function () {
  //This will assign default props if we do not pass data to our component this data will get render
  return {
   name : "React I am the Default props",
   message : "Hey I am the default message"
  };
 },

 getInitialState :function() {
  return {
   name : this.props.name,
   message : this.props.message
  };
 },

 handleNewData : function(name, message) {
    this.setState({name : name,message : message});
 },

 render: function () {
  var name = this.state.name;
  var message = this.state.message;

  return (
   // There Should always be a root div to return data thats how jsx works
   <div>
    <GreeterMessage name={name} message={message}/>
    <GreeterForm onNewData={this.handleNewData} />
   </div>
  );
 }
});

ReactDOM.render(<Greeter name="Mukesh! Just Enter your name below to change" message="Hey you can change me! Just Enter your message below"/>,document.getElementById("app"));
