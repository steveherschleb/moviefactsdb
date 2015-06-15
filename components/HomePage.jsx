var React = require('react/addons');
var Base = require('./Base.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title='Home'>
        <div className='jumbotron'>
          <div className='container'>
            <h1>MovieFactsDB</h1>
            <p>The best source on the Internet for a tiny amount of movie-related facts.</p>  
          </div>
        </div>

        <div className='container'>
          <div className='row' id='features'>
            <div className='col-md-4 col-sm-12'>
              <div className='icon-movie img'></div>
              <h2><a href='/movies'>Movies</a></h2>
              <p>There are lots of movies in the world.<br />Learn about a handful of them.</p>
              <a href='/movies' className='btn btn-primary'>View &gt;</a>
            </div>
            <div className='col-md-4 col-sm-12'>
              <div className='icon-actor img'></div>
              <h2><a href='/actors'>Actors</a></h2>
              <p>How many actors do you think there are?<br />Way more than we have data on!</p>
              <a href='/actors' className='btn btn-primary'>View &gt;</a>
            </div>
            <div className='col-md-4 col-sm-12'>
              <div className='icon-director img'></div>
              <h2><a href='/directors'>Directors</a></h2>
              <p>Don't be fooled by the small size of this list.<br />There really are lots of great directors.</p>
              <a href='/directors' className='btn btn-primary'>View &gt;</a>
            </div>
          </div>
        </div>
      </Base>
    );
  }
});


module.exports = Component;
