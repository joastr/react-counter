var counterPurple = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount() {
        console.log('PURPLE - This method is called before first render');
      },

     
    componentDidMount: function() {
        console.log('PURPLE - This method shows components on page');
    },

    componentWillReceiveProps: function() {
        console.log('PURPLE - This is called when it gets new props');
    },

    shouldComponentUpdate: function() {
        console.log('PURPLE - This method lets React know if a component’s output is not affected by the current change in state or props');
        return true;
    },

    componentWillUpdate: function() {
        console.log('PURPLE - This method is invoked just before rendering when new props or state are being received - according doc. - unsafe and should be avoided');
    },

    componentDidUpdate: function() {
        console.log('PURPLE - This method is invoked immediately after updating occurs');
    },

    componentWillUnmount: function() {
        console.log('PURPLE - This method is called when a component is being removed from the DOM');
    },  

    increment: function() {
        this.setState({
            counter: this.state.counter+1
        });
    },

    decrement: function() {
        this.setState ({
            counter: this.state.counter-1
        });
    },

    render: function() {
        return  React.createElement('div', {className: 'counterButtons'}, 
          React.createElement('div', {id:'counter'}, this.state.counter),
          React.createElement('button', {onClick:this.increment}, 'Dodawanie'),
          React.createElement('button', {onClick:this.decrement}, 'Odejmowanie')
          );
        


        
    }
});

var element = React.createElement(counterPurple);
ReactDOM.render(element, document.getElementById('counterPurple'));


var counterBlue = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount() {
        console.log('BLUE - This method is called before first render');
      },

     
    componentDidMount: function() {
        console.log('BLUE - This method shows components on page');
    },

    componentWillReceiveProps: function() {
        console.log('BLUE - This is called when it gets new props');
    },

    shouldComponentUpdate: function() {
        console.log('BLUE - This method lets React know if a component’s output is not affected by the current change in state or props');
        return true;
    },

    componentWillUpdate: function() {
        console.log('BLUE - This method is invoked just before rendering when new props or state are being received - according doc. - unsafe and should be avoided');
    },

    componentDidUpdate: function() {
        console.log('BLUE - This method is invoked immediately after updating occurs');
    },

    componentWillUnmount: function() {
        console.log('BLUE -This method is called when a component is being removed from the DOM');
    },  

    increment: function() {
        this.setState({
            counter: this.state.counter+1
        });
    },

    decrement: function() {
        this.setState ({
            counter: this.state.counter-1
        });
    },

    render: function() {
        return  React.createElement('div', {className: 'counterButtons'}, 
          React.createElement('div', {id:'counter'}, this.state.counter),
          React.createElement('button', {onClick:this.increment, className:'blue'}, 'Dodawanie'),
          React.createElement('button', {onClick:this.decrement, className:'blue'}, 'Odejmowanie')
         );     
    }
});

var element = React.createElement(counterBlue);
ReactDOM.render(element, document.getElementById('counterBlue'));