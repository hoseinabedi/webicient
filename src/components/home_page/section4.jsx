'use client'

import { useState, useEffect } from 'react';
import styles from '@/app/page.module.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Section4 = () => {
    const [formValue, setFormValue] = useState({ name: "", email: "", message: "" });
    const successNotify = () => toast.success("Your message added successfully", {
        theme: "dark",
    });
    const warningNotify = () => toast.warning("repetitive messages are not acceptable!", {
        theme: "dark",
    });
    const errorNotify = () => toast.error("We didn't get your message, Please try again", {
        theme: "dark",
    });
    const handleSumbit = () => {
        warningNotify();
        axios.post('/user', formValue).then(function (response) {
            console.log(response);
            setFormValue({ name: "", email: "", message: "" });
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="app-container">
            <div className={styles.section4}>
                <div className={styles.footerBg}></div>
                <div className={styles.contactForm}>
                    <p className={styles.smallTxt}>Any questions?</p>
                    <p className={styles.title}>Let’s talk today!</p>
                    <form>
                        <input type="text" placeholder="Name" value={formValue.name} onChange={(val) => setFormValue({ ...formValue, name: val.target.value })} />
                        <input type="text" placeholder="Email" value={formValue.email} onChange={(val) => setFormValue({ ...formValue, email: val.target.value })} />
                        <textarea placeholder="Message" rows={5} value={formValue.message} onChange={(val) => setFormValue({ ...formValue, message: val.target.value })} ></textarea>
                        <button type="button" value="Submit" onClick={handleSumbit}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Section4;