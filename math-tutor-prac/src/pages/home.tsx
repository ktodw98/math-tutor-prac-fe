import '../App.css';
import useGetMessage from '../hook/useGetMessage';


function Home() {
    const url = "http://127.0.0.1:8000/home/"

    const { data, loading, error } = useGetMessage(url)

    if ( loading ) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: { error }</p>
    }
    return (
        <>
            <button>받아오기</button>
            <p>{ data? data.message : 'no message'}</p>
        </>
    )

}

export default Home