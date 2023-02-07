import NavigationBar from "./NavigationBar";
import './text.css'
import { useState } from "react"
import moment from 'moment'
import Axios from 'axios'
import axios from "axios";

function EntryList({ list, deleteEntry }) {
  return (
    <div className='entry-list'>
      {
        list && list.map((item, i) => {
          console.log(item.id)
          return (
            <div className='card mb-2 border-dark' key={i}>
              <div className='card-body bg-dark text-white'>
                <h4 className='card-title'>{item.date}</h4>
                <p className='card-text>'>{item.text}</p>
                <button className='btn btn-danger btn-sm' onClick={() => deleteEntry(item.id)}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// useRef.current.focus() purpose?
function Entry({ addEntry, getRecord }) {
  const [message, setMessage] = useState("")
  const handleOnChange = e => setMessage(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    if (message && message.trim().length > 0) {
      addEntry(message)
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
        <button
          className="btn mb-2 btn-success form-control" onClick={getRecord}>
          Show Record
        </button>
      </div>
    </form>
  )
}

export default function Record() {
  const getRecord = () => {
    axios.get('http://localhost:3001/record').then((response) => {
      setRecordArray(response.data)
    })
  }

  const handleStoreEntry = (entry) => {
    Axios.post('http://localhost:3001/create', {
      date: moment(Date.now()).format('L'),
      text: entry
    }).then(() => {
      console.log("Success")
      getRecord()
    })
  }

  const handleDeleteEntry = (index) => {
    Axios.delete(`http://localhost:3001/delete/${index}`
    ).then(() => {
      getRecord()
    })
  }

  const [recordArray, setRecordArray] = useState([]);

  return (
    <div className="bg">
      <NavigationBar />
      <div className="container">
        <h1 className='title'>
          Record
        </h1>
        <Entry addEntry={handleStoreEntry} getRecord={getRecord} />
        <EntryList list={recordArray} deleteEntry={handleDeleteEntry} />
      </div>
    </div>
  )
}
