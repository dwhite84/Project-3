import React, { Component, Fragment } from 'react';
import defaultImages from '../../img/defaultPlanImages';
import addFeature from '../../img/homepage-plus-sign.png';
import manageFeature from '../../img/travel-organizer.jpg';
import checklistFeature from '../../img/checklist.png';

class HomePage extends Component {

    render () {
        return (
            <Fragment>
                <div >
                    <img src={defaultImages.array[Math.ceil(Math.random() * defaultImages.array.length)]} alt='Camping with a view' />
                </div>
                <div >
                    <div >
                        <p>
                            PlanIt is an interactive trip planning web application that allows you to create, plan, and manage your camping trips. 
                            You can add other members to your existing plans to get everyone on the same page for any upcoming trips. <br/><br/>
                            With PlanIt, you can add interactive checklists to your plans and assign line items to specific plan members 
                            or let members decide what they'd like to bring themselves. 
                            To stay organized on what everyone needs to bring, these list items can have a quantity and price, 
                            so everyone knows how much to bring and a rough estimate of the costs. <br/><br/>
                            Never again get caught on a trip wishing, "Oh man, I wish I'd membered to bring...". 
                            Join PlanIt today for <b><em>FREE</em></b> and stay organized and accountable!
                        </p>
                    </div>
                    <div >
                        <div >
                            <img src={addFeature} alt='Feature display to add a plan' />
                            <p>Add a planned event to help you and your friends get on teh same page.</p>
                        </div>
                        <div >
                            <img src={manageFeature} alt='Feature display to manage planned trips' />
                            <p>Manage plan information such as dates, descriptions, who's coming, and checklists for what to bring.</p>
                        </div>
                        <div >
                            <img src={checklistFeature} alt='Feature display to use interactive checklists within plans' />
                            <p>Create interactive checklists that you and your plan members. Checkoff list items to assign them to your user and specify the quantity you're bringing.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;