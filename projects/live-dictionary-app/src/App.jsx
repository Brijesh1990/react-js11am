import React,{useState} from 'react'
import axios from 'axios';
export default function App() {
  const [data, setData] = useState('');
  const [word, setWord] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setWord(word);
      setData({
        definition: response.data[0].meanings[0].definitions[0].definition,
        partOfSpeech: response.data[0].meanings[0].partOfSpeech,
        example: response.data[0].meanings[0].definitions[0].example,
        synonyms: response.data[0].meanings[0].definitions[0].synonyms,
        antonyms: response.data[0].meanings[0].definitions[0].antonyms,
        phonetics: response.data[0].phonetics,
      });
    } catch (error) {
      console.error('Error fetching the definition:', error);
    }
  };

  // create a audio play function
  const playAudio = () => {
    const audio = new Audio(data.phonetics[0].audio);
    audio.play();
  };

  return (
    <div className="App bg-gray-100 min-h-screen w-1/2 p-15 mt-15 mx-auto">
      <h1 className="text-3xl font-bold text-center">Live Dictionary App</h1>
      <hr className="my-4" />
      <section className='p-15  rounded'>
       {/*create a form with button display inline  */}
        <form className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-l px-4 py-2 w-full"
            placeholder="Type a word..." onChange={(e) => setWord(e.target.value)} 
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 w-33"
            onClick={handleSearch}
          >
            Search <span className='inline-flex'> 🔍</span>
          </button>
        </form>
        <div className="mt-4">
          {data ? (
        <section className="mt-10 p-6 bg-white rounded shadow">
        <div className="text-center">
          {/* add audio button */}
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => playAudio()}
          >
            Play Audio <span className='inline-flex'> 🔊</span>
          </button>
          <h2 className="text-2xl font-semibold">Search Results for "{word}"</h2>
          <p className="text-gray-600 mt-2"><strong>Part of Speech:</strong> {data.partOfSpeech}</p>
          <p className="text-gray-600 mt-2"><strong>Definition:</strong> {data.definition}</p>
          {data.example && <p className="text-gray-600 mt-2"><strong>Example:</strong> {data.example}</p>}
          {data.synonyms && data.synonyms.length > 0 && (
            <p className="text-gray-600 mt-2"><strong>Synonyms:</strong> {data.synonyms.join(', ')}</p>
          )}
          {data.antonyms && data.antonyms.length > 0 && (
            <p className="text-gray-600 mt-2"><strong>Antonyms:</strong> {data.antonyms.join(', ')}</p>
          )}
        </div>
      </section>
          ) : (
            <section className="mt-10 p-6 bg-white rounded shadow">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Search Results</h2>
          <p className="text-gray-600">No results found. Please try another word.</p>
        </div>
      </section>
          )}
        </div>
      </section>
     
      <footer className="mt-10 text-center text-gray-500">
        <small>
          Coded by Your Name and is open-sourced on{' '}
          <a href="https://github.com/your-repo" className="text-blue-500 underline">
            GitHub
          </a>
        </small>
      </footer>
    </div>
  )
}
