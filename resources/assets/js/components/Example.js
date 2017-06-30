import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 

class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            page: 'indexxx',
            event :[]
        }
        this.test = this.test.bind(this)
        this.test1= this.test1.bind(this)
    }

    componentDidMount() {
        // fetch('/api/users')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(users => {
        //         this.setState({ users });
        //     });
        
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                <tr key={ user.id }>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                </tr>
            );
        })
    }
    test(){
        let events = [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				}]
        this.setState({
            event : events
        })
    }
    test1(){
        let events = [
				{
					title: 'All Day Event1',
					start: '2017-05-01'
				}]
        this.setState({
            event : events
        })
    }
    render() {
        let {page} = this.state
        let new_page;
        if(page === 'indexxx'){
            new_page = (
                <Edit />
            );
        }else{
            new_page = "test";
        }

        
        return (
            <div>
           
            <Calendar />
            
            </div>
        );
    }
}

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // fetch('/api/users')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(users => {
        //         this.setState({ users });
        //     });
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                <tr key={ user.id }>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-danger">Action</button>
                <h2>Hey Edit, </h2>

                <p>Here are the people using your application...</p>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.renderUsers() }
                    </tbody>
                </table>

                
            </div>
        );
    }
}

class Calendar extends Component {
  constructor(props){
        super(props);

        this.state ={
           events : [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2017-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-05-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2017-05-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2017-05-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2017-05-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-05-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-05-28'
				}
			]
        }
        this.change = this.change.bind(this)
        this.eventClick = this.eventClick.bind(this)
        
    }

  componentDidMount() {
            let calendar = $('#calendar')
            calendar.fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2017-05-12',
			navLinks: true, // can click day/week names to navigate views
			selectable: true,
			selectHelper: true,
            eventClick: function(event) {
                var title = prompt('Event Title:');
                if(title){
                    event.title = title;
                    calendar.fullCalendar('updateEvent', event);
                }
				
				
			},
			select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
				}
                console.log(eventData)
				calendar.fullCalendar('unselect');
			},
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2017-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-05-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2017-05-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2017-05-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2017-05-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-05-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-05-28'
				}
			]
		});
            // this.change(this.state.events)
  }
  componentDidUpdate(){
       console.log("testupdate")
       
    //    let events = [
	// 			{
	// 				title: 'All Day Event',
	// 				start: '2017-05-01'
	// 			}]
    //     this.change(events)
  }
  eventClick(event, element){
            let events = [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				}]
         this.setState({
          event: events
      })
    
        event.title = "CLICKED!";
       
        $('#calendar').fullCalendar('updateEvent', event);
          

    
  }
  change(events_new){
        // $('#calendar').fullCalendar('destroy');
        console.log(this)
         $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2017-05-12',
			navLinks: true, // can click day/week names to navigate views
			selectable: true,
			selectHelper: true,
            eventClick:()=>this.eventClick,
			select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
			},
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: events_new
		});

  }
  test(){
         let events = [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				}]
    //   this.setState({
    //       event: events
    //   })
    
       this.change(events)
  }
  render() {
        
    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={this.test.bind(this)}>Action</button>
            <div id="calendar"></div>
        </div>
        );
  }
}



export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
