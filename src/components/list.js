import React, { useState, useEffect } from "react";
import firebase from '../firebase';
import moment from 'moment';

const SORT_OPTION = {
    'TIMESTART_ASC': { column: 'time_start', direction: 'asc' },
    'TIMESTART_DESC': { column: 'time_start', direction: 'desc' },
    'TIMEEND_ASC': { column: 'time_end', direction: 'asc' },
    'TIMEEND_DESC': { column: 'time_end', direction: 'desc' },

    'TITLE_ASC': { column: 'title', direction: 'asc' },
    'TITLE_DESC': { column: 'title', direction: 'desc' }
}

function useTimes(sortBy = 'TIMESTART_ASC') {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.
            firestore().
            collection('times').
            orderBy(SORT_OPTION[sortBy].column, SORT_OPTION[sortBy].direction).
            onSnapshot((snapshot) => {
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setTimes(newTimes)
            })
            return () => unsubscribe()
    }, [sortBy])
    return times
}

const List = () => {
    const [sortBy, setSortBy] = useState('TIMESTART_ASC')
    const times = useTimes()
    return (
        // <div className="App">
        //     <h2>Your Scedule</h2>
        //     <br></br>
        //     <h4>Sort by :</h4>

        //     <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
        //         <option value='TITLE_ASC'>Title (a-z)</option>
        //         <option value='TITLE_DESC'>Title (z-a)</option>
        //         <option>---------------</option>
        //         <option value='TIMESTART_ASC'>Time Start (First)</option>
        //         <option value='TIMESTART_DESC'>Time Start (Last)</option>
        //         <option>---------------</option>
        //         <option value='TIMEEND_ASC'>Time End (First)</option>
        //         <option value='TIMEEND_DESC'>Time End (Last)</option>
        //     </select>
        //     <br></br>
            <table>
                <tr>
                    <th>No</th>
                    <th>Activity</th>
                    <th>Time Start</th>
                    <th>Time End</th>
                </tr>
                {times.map((time) =>
                    <tr>
                        <th>{time.title}</th>
                        <th><code className="time">{new Date(time.time_start.seconds * 1000).toLocaleDateString("en-US")}</code></th>
                        <th><code className="time">{new Date(time.time_end.seconds * 1000).toLocaleDateString("en-US")}</code></th>
                    </tr>
                )}
            </table>
        // </div>
    )
};

export default List;