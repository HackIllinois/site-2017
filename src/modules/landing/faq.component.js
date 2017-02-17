import React, { Component } from 'react'
import axios from 'axios'

import styles from './faq.scss'

class FAQ extends Component {

    render = () =>  {

        let faqs = [
            {question: "WHAT SHOULD I BRING?", answer: "You should bring a student ID, a change of clothing or two, personal items (toiletries), a laptop & charger, and any required hardware for your hack. Essentially, bring anything you would need for a normal weekend. Due to power concerns, please do not bring extra monitors or desktop computers."},
            {question: "DO I NEED A TEAM?", answer: "Absolutely not! Many hackers come without a team and find a group at the event."},
            {question: "WILL THERE BE FOOD?", answer: "All meals, snacks, and drinks will be provided for the entire weekend. If you have a dietary restriction, please make sure to mention it on the application. There will be a wide variety of food."},
            {question: "WHO DO I CONTACT FOR HELP?", answer: "Mentors from leading technology companies will be on-hand to provide support and troubleshoot problems. We also encourage all hackers to help each other!"},
            {question: "WHERE DO I SLEEP?", answer: "Sleeping rooms will be furnished with air mattresses and pillows. We want you to be comfortable!"},
            {question: "WILL YOU HAVE HARDWARE?", answer: "We'll have high-level hardware provided by companies. We'll also have basic hardware components like resistors, transistors, and ICs, as well as wood, building materials, and power tools for you to tinker with. To help gauge interest, please specify any hardware that you might use in your application."},
            {question: "WHAT ARE THE PRIZES?", answer: "We will release details about prizes soon."},
            {question: "HOW DOES JUDGING WORK?", answer: "Be on the lookout for more information about judging!"}
            // {question: "MORE QUESTIONS?", answer: "Please don't hesitate to reach out to us at contact@hackillinois.org!"}
        ];

        let listItems = faqs.map( (item) => {
            return (
                <div key={item.question} className={styles['faq-content-item']}>
                    <h5 className={styles['faq-content-item-title']}>
                        {item.question}
                    </h5>
                    <h6 className={styles['faq-content-item-subtitle']}>{item.answer}</h6>
                </div>
            );
        });

        return (
            <div className={styles['faq']}>
                <h4 className={styles['faq-title']}>Frequently Asked Questions</h4>

                <div className={styles['faq-content']}>
                    {listItems}

                    <div className={styles['faq-content-full-item']}>
                        <h5 className={styles['faq-content-item-title']}>
                            MORE QUESTIONS?
                        </h5>
                        <h6 className={styles['faq-content-item-subtitle']}>
                            Please don't hesitate to reach out to us at contact@hackillinois.org!
                        </h6>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default FAQ
