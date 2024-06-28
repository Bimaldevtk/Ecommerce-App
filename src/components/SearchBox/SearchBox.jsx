import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);


    // useEffect(() => {
    //   const fetchData = async () => {
    //     const query = '*[_type == "product"]';
    //     const result = await client.fetch(query);
    //     setProducts(result);
    //   };

    //   fetchData();
    // }, []);

    // useEffect(() => {
    //   if (query) {
    //     setFilteredProducts(
    //       products.filter((product)=>
    //       product.title.toLowerCase().includes(query.toLowerCase())
    //       )
    //     );
    //   } else{
    //     setFilteredProducts(products);
    //   }
    
   
    // }, [query, products]);
    



    

    const handleInputChange =(e) =>{
        setQuery(e.target.value);
    }
    const handleSearch = () =>{
        onSearch(query);
    };
    const handleKeyDown =(e)=>{
         if (e.key==='Enter'){
            handleSearch();
         }
    };
    
  return (
    <div>
        <input type='text' value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='What are you looking for?'/>
        <FontAwesomeIcon icon={faSearch} onClick={handleSearch}/>
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faHeart} />
      
    </div>
  )
}

export default SearchBox
