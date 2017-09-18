/**
 * Created by rahulkookal on 24/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './RecentStories.css';

const RecentStoriesComponent  = ({stories}) => {
    return (
        <div className="row no-margin recent-stories-container">
            <div className="title-recent-stories">
                <span className="line-copy">Recent Stories</span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding">
                {stories.length > 0 &&
                stories.map((story) => {
                        return <div className="row no-margin recent-stories">
                                <div className="first col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding">
                                    <div className="row story no-margin">
                                        <div className="image col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 no-padding">
                                            <img alt="" src={story.imgSrc} className="side-image"></img>
                                        </div>
                                        <div className="content col-6 col-sm-6 col-md-9 col-lg-9 col-xl-9 no-padding">
                                            <div className="header">
                                                {story.headLine}
                                            </div>
                                            <div className="author">
                                                {story.authorName}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

RecentStoriesComponent.propTypes = {
    stories: PropTypes.array.isRequired
}

export default RecentStoriesComponent

