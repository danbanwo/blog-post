import React from "react"
import $ from "jquery"

 var GetPost = React.createClass({

    componentDidMount: function() {
        var that = this;
        $.ajax({
            url: "/api/post",
            type: 'GET',
            success: function(data) {
               that.props.changeParentState(data);
            }
        })
    },
    render() {
        let post = this.props.data ? this.props.data.map((post, idx) => {
            return <li key={idx}>{post.title}</li>
        }) : null
        return (
        	 <ul>
             {post}
        	 </ul>
        	 )
   		 }
});

 export default GetPost;
