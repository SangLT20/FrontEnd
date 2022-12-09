import {useState, useEffect} from 'react';

function ReactEffect(){

    const [file, setFile] = useState();

    useEffect(() => {

        return () =>{
            URL.revokeObjectURL(file);
        }
    }, [file])
    
    const changeFile = (e) => {
        const value = e.target.files[0];
        const url = URL.createObjectURL(value);
        console.log(url);

        setFile(url);
    }
    return (
        <div>
            <input type='File' onChange={changeFile}></input>
            {
                file && (<img src={file} alt={file} width='80%' />)
            }
        </div>
    )

    // const [title, setTitle] = useState('');
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then( res => res.json())
    //     .then( posts => {
    //         setPosts(posts);
    //     });
    //     //document.title = title;
    //     console.log('useEffect');
    // },[]);

    // return (
    //     <div> 
    //         {
    //         console.log('render')
    //         }
    //         <label>Input Title</label>
    //         <input  value={title} onChange={e => setTitle(e.target.value)}></input>
    //         <ul>
    //             {posts.map(
    //                     (a, i) => 
    //                     (<li key={i}>{a.title}</li>))
    //             }
    //         </ul>
    //         {/* <ul>{
    //                 post.map(
    //                     (e, i) =>
    //                     (<li key={i}>{e.title}</li>)
    //                 )
    //             }
    //         </ul> */}
    //     </div>
    // )
}

export default ReactEffect;