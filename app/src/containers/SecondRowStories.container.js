/**
 * Created by rahulkookal on 22/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SecondRowStoriesComponent from '../components/SecondRowStories.component'

const SecondRowStories = ({mainStory }) => (
    <SecondRowStoriesComponent mainStory={mainStory}/>
)
SecondRowStories.propTypes = {
    mainStory:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    mainStory: state.secondRowArticles[0],
    secondColStories: state.secondRowArticles[1]
})

export default connect(
    mapStateToProps
)(SecondRowStories)
