import NavigationBar from "./NavigationBar";
import './text.css'
import { useState, useEffect } from "react"
import moment from 'moment'
import Axios from 'axios'

function useRecord() {
    const [entries, setEntries] = useState([])

    const getEntriesFromStorage = () => JSON.parse(
        window.localStorage.getItem('recordEntries')
    )

    // need to stringify item before parsing and storing to local storage
    // React Hook useEffect contains a call to 'setEntries'. 
    // Without a list of dependencies, this can lead to an infinite 
    // chain of updates. To fix this, pass [] as a second argument to 
    // the useEffect Hook
    const setEntriesToStorage = items => 
        window.localStorage.setItem('recordEntries', JSON.stringify(items))
        useEffect(() => {
            const entriesFromStorage = getEntriesFromStorage()
            if (entriesFromStorage) {
                setEntries(entriesFromStorage)
            }
        }, [])
    
    const storeEntry = entry => {
        const newEntries = [entry, ...entries]
        setEntries(newEntries)
        setEntriesToStorage(newEntries)
    }

    const deleteEntry = index => {
        const newEntries = [...entries.slice(0, index), ...entries.slice(index+1)]
        setEntries(newEntries)
        setEntriesToStorage(newEntries)
    }

    return [entries, storeEntry, deleteEntry]
}

function EntryList({list, deleteEntry}) {
    // why got => e ?
    // Higher order delete entry click handler
    const handleDeleteEntry = index => e => {
        deleteEntry(index)
    }

    return (
        <div className='entry-list'>
            {
                list && list.map((item, i) => {
                    const itemDate = moment(item.date).format('L')
                    return (
                        <div className='card mb-2 border-dark' key={i}>
                            <div className='card-body bg-dark text-white'>
                                <h4 className='card-title'>{itemDate}</h4>
                                <p className='card-text>'>{item.message}</p>
                                <button className='btn btn-danger btn-sm' onClick={handleDeleteEntry(i)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

// useRef.current.focus() purpose?
function Entry({addEntry}) {
    const [message, setMessage] = useState("")
    const handleOnChange = e => setMessage(e.target.value)
    const handleOnSubmit = e => {
        e.preventDefault()
        if (message && message.trim().length > 0) {
            addEntry({
                message,
                date: Date.now()
            })
            Axios.post('http://localhost:3001/create', {
                date: Date.now(),
                text: message
            }).then(() => {
                console.log("Success")
            })
        }
        setMessage("")
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <textarea
                    className="form-control mb-2"
                    value={message}
                    onChange={handleOnChange}
                    type="text"
                />
                <button disabled={message.trim().length === 0}
                    className="btn mb-2 btn-success form-control" type="submit">
                        Submit
                </button>
            </div>
        </form>
    )
}

export default function Record() {
    const [entries, storeEntry, deleteEntry] = useRecord();
    const handleStoreEntry = (entry) => storeEntry(entry)
    const handleDeleteEntry = (index) => deleteEntry(index)
    return (
        <div className="bg">
            <NavigationBar/>
            <div className="container">
                <h1 className='title'>
                    Record
                </h1>
                <Entry addEntry={handleStoreEntry}/>
                <EntryList list={entries} deleteEntry={handleDeleteEntry}/>
            </div>
        </div>
    )
}