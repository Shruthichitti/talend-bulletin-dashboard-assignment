import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions';

//Displaying comments for each and every post
class Comments extends React.Component {
    componentDidMount(){
        this.props.fetchComments(this.props.postId);
    }

    render(){
        const  {comments} = this.props;
        return(
            <div>
                <span className='header'> Comments : </span>
                <ul>
                {comments ? comments.map((comment, i) => {
                    return(
                        <li key ={i}>
                            {comment.body}
                        </li>
                    )
                }) : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { comments: state.comments[ownProps.postId] };
};

export default connect( mapStateToProps,{ fetchComments })(Comments);