

const FormList = ({handleDelete, data}) => {
    return ( 
        <>
        {data.map((person)=> {
                    console.log(person.id)
                    return(
                        <li 
                            key={person.id}
                            className='delete' 
                            onClick={()=> handleDelete(person.id)}
                        >
                            {person.name} loves {person.body} and he want to travel to {person.country} 
                        </li>
                    )
                })}
        </>
     );
}
 
export default FormList;