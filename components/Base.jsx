var React = require('react/addons');


var Component = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
          <title>{ this.props.title }</title>
          <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootswatch/3.3.4/flatly/bootstrap.min.css' />
          <link rel='stylesheet' href='/css/style.css' />
        </head>
        <body>
          <div role='navigation' className='navbar navbar-default navbar-static-top'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <button type='button' data-toggle='collapse' data-target='.navbar-collapse' className='navbar-toggle'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
                <a href='/' className='navbar-brand'>MovieFactsDB</a>
              </div>
              <div className='navbar-collapse collapse' aria-expanded='false' style={{ height: '1px' }}>
                <ul className='nav navbar-nav'>
                  <li className={ this.props.activeNav === 'Movies' ? 'active' : undefined }><a href='/movies'>Movies</a></li>
                  <li className={ this.props.activeNav === 'Actors' ? 'active' : undefined }><a href='/actors' aria-expanded='true'>Actors</a></li>
                  <li className={ this.props.activeNav === 'Directors' ? 'active' : undefined }><a href='/directors'>Directors</a></li>
                </ul>
              </div>
            </div>
          </div>
        
          { this.props.children }

          <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script>
          <script type='text/javascript' src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script>
        </body>
      </html>
    );
  }
});


module.exports = Component;
