import './BusinessList.css'
import React from 'react'
import Business from '../business'
class BusinessList extends React.Component{

render (){
    return(
    <div className="BusinessList">
    {this.props.businesses.map(
      (business)=>{
        return (
          <Business business = {business}/>
        )
      }
    )}
</div>
)
}
}

export default BusinessList