import React from 'react'

export default ({ notifications }) =>(
  <div className="section">
  	<div className="card z-depth-0">
  		<div className="card-content">
  			<span className="card-title">Notifications</span>
  			<ul className="notifications">
  				{ notifications && notifications.map(notification => (
  					<li key={ notification.id }>
  						<span className="pink-text">{ notification.user }</span>
  						<span className="pink-text">{ notification.content }</span>
  						<div className="grey-text note-date">
  							{ notification.time.toDate().toString() }
  						</div>
  					</li>
  				)) }
  			</ul>
  		</div>
  	</div>
  </div>
)