import React, { Component } from 'react'

import styles from './judging.scss'

class Judging extends Component {
    render = () => (
        <div className={styles['judging']}>
            <div className={styles['responsive-container']}>
                <div className={styles['judging-header']}>
                    <a href="http://hackillinois.org"><img className={styles['judging-header-logo']} src="src/assets/img/svg/landing-logo.svg" /></a> <br/><br /><br />
                    <h2 className={styles['judging-title']}>HackIllinois 2017 Judging </h2>
                    <h4 className={styles['judging-subtitle']}>Judging will occur at February 26<sup>th</sup> at 12PM</h4>
                </div>

                <div className={styles['judging-body']}>
                    <h3 className={styles['judging-body-title']}>Judge Types</h3>
                    <div className={styles['judging-types']}>
                        <div className={styles['judging-types-cell']}>
                            <div id={styles.type1} className={styles['judging-types-cell-icon']} />
                            <h5>Attendees</h5>
                        </div>
                        <div className={styles['judging-types-cell']}>
                            <div id={styles.type2} className={styles['judging-types-cell-icon']} />
                            <h5>Company Reps / Mentors</h5>
                        </div>
                        <div className={styles['judging-types-cell']}>
                            <div id={styles.type4} className={styles['judging-types-cell-icon']} />
                            <h5>VIPs / Faculty</h5>

                        </div>
                    </div>

                    <h3 className={styles['judging-body-title']}>Judging for Contribute</h3>
                    <div className={styles['judging-contribute']}>
                        <div className={styles['judging-contribute-cell-container']}>
                            <div className={styles['judging-contribute-cell']}>
                                <h4 className={styles['judging-contribute-cell-title']}>Community Round</h4>
                                <h5>Top 3 contributions based on votes from Faculty, Mentors, Corporate, and Attendees.</h5>
                            </div>
                            <div className={styles['judging-contribute-cell']}>
                                <h4 className={styles['judging-contribute-cell-title']}>VIP Round</h4>
                                <h5>Top groups from community round are judged by VIPs to select winners.</h5>
                            </div>
                        </div>
                        <br />
                        <h5>The following guidelines will be used to assess contributions:</h5>

                        <div className={styles['judging-contribute-table']}>
                            <table>
                                <tr>
                                    <th>
                                        <h4>Criteria</h4>
                                    </th>
                                    <th>
                                        <h4>Description</h4>
                                    </th>
                                </tr>
                                <tr>
                                    <td id={styles.row1} className={styles['contribute-table-title']}><h5>Impact</h5></td>
                                    <td><h5>We want attendees to work on projects that contribute back to the open source
                                        projects they are working with. A highly beneficial submission fills a gap in
                                        their project or addresses relevant documented issues.</h5></td>
                                </tr>
                                <tr>
                                    <td id={styles.row2}className={styles['contribute-table-title']}><h5>Sustainability</h5></td>
                                    <td><h5>We are looking for projects that are well-built, organized for future
                                        contributions, and present a way forward as an open source project and community.
                                        This includes both proper coding style and relevant documentation that
                                        thoroughly outlines what the group worked on and how others can easily add more.</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td id={styles.row3}className={styles['contribute-table-title']}><h5>Wizard</h5></td>
                                    <td><h5>Participants must have a solid understanding of the open source project that
                                        they have been working on to indicate their ability to continue working on
                                        the project or to guide others in contributing to the project.</h5></td>
                                </tr>
                                <tr>
                                    <td id={styles.row4} className={styles['contribute-table-title']}><h5>"It" Factor</h5></td>
                                    <td><h5>There are certain submissions that just cause you to say “WOW.” We’re
                                        looking for a submission that has an “It” factor that blows the pants off
                                        people who see it. It is up to your discretion to identify this intangible
                                        quality of a project that just amazes people. You can give up to one project
                                        an extra vote if they have this&nbsp;quality.</h5></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h3 className={styles['judging-body-title']}>Judging for Create</h3>
                    <div className={styles['judging-create']}>
                        <h5>Create judging will differ from prize to prize. Generally there will be one winning
                            project for every prize category. Prizes will vary based on the entity sponsoring/maintaining
                            a specific prize. Additionally the judging criteria are to be determined by the same entities.
                            Given the ambiguity surrounding  these prizes, we encourage you to simply create the best
                            open source project possible and avoid concerning yourself with potential prizes as most
                            potential projects will naturally slot themselves into a category.</h5>
                    </div>
                </div>
            </div>

            <div className={styles['judging-footer']}>
                <h5>Questions? <a href="mailto:contact@hackillinois.org">Email us</a></h5>
                <br />
            </div>

        </div>
    )
}

export default Judging