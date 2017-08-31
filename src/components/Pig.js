import React from 'react';
import PigDisplayModal from './PigDisplayModal'

const Pig = (props) => {
	return (
		<div className="ui four wide column card">

				<div class="image">
			      <img src={props.imgName} alt=""/>
			    </div>
			    <div class="content" >
			      <div class="header">{props.pig.name}</div>
			    </div>
			    <div class="extra content">
    				<PigDisplayModal pig={props.pig} imgName={props.imgName}/>
  				</div>
 
		</div>
	)
}



export default Pig;