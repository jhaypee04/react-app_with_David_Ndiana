import { useState } from 'react'
import FormList from './FormList'

const Form = () => {
    const [ name, setName ] = useState('')
    const [ body, setBody ] = useState('')
    const [ country, setCountry ] = useState('Australia')
    const [ showInterest, setShowInterest ] = useState(false)
    
    const formDetails = { id: new Date().getTime(), name, body, country }
    
    const [ data, setData ] = useState([])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setData([...data, formDetails ])
      setShowInterest(true)
    }

    const handleDelete = (id) => {
        const newList = data.filter((item) => item.id !== id )

        console.log(newList)
        setData(newList)
        if( newList.length === 0 ) {
            console.log('ran')
            setShowInterest(false)
        }
        console.log(showInterest)
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <br />

                <label>Interest(one Word): </label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
                <br />

                <label >Countries: </label>
                <select value={country} onChange={(e)=>setCountry(e.target.value)}>
                <option>Austrialia</option>
                <option>Nigeria</option>
                <option>Japan</option>
                <option>UK</option>
                </select>
                <br />

                <input type="submit" />
            </form>

            <div className="output">
                <h4 style={{textAlign: 'center', color: 'salmon'}}>People and their interests</h4><hr />
                
                <ol>
                    { showInterest ? <FormList  handleDelete={handleDelete} data={data}/> : 'No Interest Yet!'}
                </ol>
            </div>
        </>
     );
}
 
export default Form;