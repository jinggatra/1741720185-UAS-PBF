import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const EntryForm = () => {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [timeEnd, setTimeEnd] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        firebase.firestore().collection('times').add({
            title,
            time_start: time,
            time_end: timeEnd
        }).then(() => {
            setTitle('')
            setTime('')
            setTimeEnd('')
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add Scedule</h2>
            <label>Title : </label>
            <input type="text" name="title" value={title} onChange={e => setTitle(e.currentTarget.value)}></input>
            <br></br>

            <label>Time Start  : </label>
            <input type="datetime-local" id="time_start" name="time_start" value={time} onChange={e => setTime(e.currentTarget.value)}></input>
            <br></br>

            <label>Time End : </label>
            <input type="datetime-local" id="time_end" name="time_end" value={timeEnd} onChange={e => setTimeEnd(e.currentTarget.value)}></input>

            <br></br>
            <div>
                <button type="submit">Add Scedule</button>
            </div>
        </form>


    );
}

export default EntryForm;