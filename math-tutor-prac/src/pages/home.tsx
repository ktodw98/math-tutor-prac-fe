import '../App.css';
import useGetMessage from '../hook/useGetMessage';


function Home() {
    const url = "https://127.0.0.1/8000"

    const word = useGetMessage(url)
    return (
        <>
            <button>받아오기</button>
            <p>{word}</p>
        </>
    )

}

export default Home