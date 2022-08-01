import React, {useState} from "react";


const Searchbar = (props) => {
    const [term, setTerm] = useState('');
    // state = { term: '' };

  const onIputChange = event => {
        // this.setState({term: event.target.value})\
        setTerm(event.target.value);
    }

   const onFormSubmit = event => {
        event.preventDefault();
        // this.props.searchFromAppCallBack(this.state.term)
        props.searchFromAppCallBack(term)
        
    }

  
        return (
            <div className='ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
               <div className='field'>
                   <label>Video Search</label>
                   <input 
                       type="text" value={term} 
                       onChange={onIputChange }
                   />
               </div>
               
            </form>
       </div>
        );
 
}
 
export default Searchbar;


