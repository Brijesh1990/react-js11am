import React, { useState, useCallback } from 'react';
import axios from 'axios';

// The main App component
export default function App() {
  // State for the data retrieved from the API
  const [data, setData] = useState(null); 
  // State for the word currently being typed in the input field
  const [inputWord, setInputWord] = useState('');
  // State to store the word that was successfully searched (for display)
  const [searchedWord, setSearchedWord] = useState(''); 
  // State for handling loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for handling API errors (e.g., word not found)
  const [error, setError] = useState(null);

  // Function to safely extract the required data from the complex API response
  const extractData = (response) => {
    // We only need the first entry for simplicity
    const entry = response.data[0]; 

    // Find the first available meaning and definition
    const meaning = entry.meanings?.[0];
    const definition = meaning?.definitions?.[0];

    // Find the first phonetic entry that has an audio link
    const phoneticWithAudio = entry.phonetics?.find(p => p.audio);
    const audioUrl = phoneticWithAudio?.audio || null;
    const phoneticText = entry.phonetics?.[0]?.text || '';

    // If no meaning or definition is found, return null to trigger error state
    if (!meaning || !definition) return null;

    // Structure the data for state
    return {
      definition: definition.definition || 'Definition not available.',
      partOfSpeech: meaning.partOfSpeech || 'N/A',
      example: definition.example || null,
      synonyms: definition.synonyms || [],
      antonyms: definition.antonyms || [],
      phoneticText: phoneticText,
      audioUrl: audioUrl,
    };
  };

  // Debounced search function to avoid rapid API calls
  const handleSearch = useCallback(async (e) => {
    e.preventDefault();
    if (!inputWord.trim()) {
      setError("Please enter a word to search.");
      setData(null);
      return;
    }

    const wordToSearch = inputWord.trim().toLowerCase();

    // Reset states and set loading
    setIsLoading(true);
    setError(null);
    setData(null);
    setSearchedWord('');

    try {
      // The API often returns 404 for words not found
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`);
      
      const extractedData = extractData(response);

      if (extractedData) {
        setData(extractedData);
        setSearchedWord(wordToSearch);
      } else {
        // Handle cases where API returns 200 but the data structure is empty/unexpected
        setError(`Definition data missing for "${wordToSearch}".`);
      }
    } catch (error) {
      // Check for 404 response which typically means "word not found"
      if (error.response && error.response.status === 404) {
        setError(`Sorry, we couldn't find the entry for "${wordToSearch}".`);
      } else {
        // General network or API error
        console.error('Error fetching the definition:', error);
        setError('An unexpected error occurred while searching. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [inputWord]);

  // Function to play audio from the stored URL
  const playAudio = () => {
    if (data && data.audioUrl) {
      try {
        const audio = new Audio(data.audioUrl);
        audio.play();
      } catch (e) {
        console.error("Failed to play audio:", e);
        // Optionally update error state for the user
      }
    }
  };

  // Helper component for displaying lists (Synonyms/Antonyms)
  const ListSection = ({ title, items }) => (
    items && items.length > 0 ? (
      <p className="text-gray-700 mt-2 text-sm md:text-base">
        <strong className="font-medium text-indigo-600">{title}:</strong> {items.join(', ')}
      </p>
    ) : null
  );


  // Main Render
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10 flex flex-col items-center">
      <div className="w-full max-w-xl lg:max-w-2xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 my-8">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 border-b pb-4">
          Live Dictionary App
        </h1>
        
        {/* Search Form */}
        <form className="flex space-x-2 sm:space-x-4 mb-8" onSubmit={handleSearch}>
          <input
            type="text"
            className="flex-grow border-2 border-indigo-200 focus:border-indigo-500 rounded-lg px-4 py-2.5 text-gray-700 transition duration-150 ease-in-out shadow-inner"
            placeholder="Type a word..." 
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center space-x-1"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
                <>
               
                <span className='ml-1 text-lg'>🔍</span>
                </>
            )}
          </button>
        </form>

        {/* Results / Status Section */}
        <section className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 min-h-40">
          {isLoading && (
            <div className="text-center py-10">
              <p className="text-xl text-indigo-500">Searching for definition...</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="text-center py-8 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-lg font-medium text-red-600">Error</p>
              <p className="text-sm text-red-700 mt-2">{error}</p>
            </div>
          )}
          
          {data && !isLoading && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 capitalize">
                  {searchedWord}
                </h2>
                <div className="flex items-center space-x-3">
                  {data.phoneticText && (
                    <span className="text-gray-500 font-mono text-sm sm:text-base">{data.phoneticText}</span>
                  )}
                  {data.audioUrl && (
                    <button
                      type="button"
                      className="bg-indigo-100 text-indigo-600 p-2 rounded-full hover:bg-indigo-200 transition"
                      onClick={playAudio}
                      aria-label="Play pronunciation audio"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 3v14a1 1 0 01-1.383.924l-7-4A1 1 0 012 13V7a1 1 0 01.617-.924l7-4z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-base sm:text-lg font-medium text-indigo-600">
                  <span className="font-extrabold text-indigo-800 uppercase text-xs mr-2">POS:</span>
                  {data.partOfSpeech}
                </p>
                
                <p className="text-gray-800 text-base">
                  <strong className="font-medium text-indigo-600">Definition:</strong> {data.definition}
                </p>
                
                {data.example && (
                  <p className="text-gray-600 italic text-sm border-l-4 border-gray-200 pl-3">
                    <strong className="font-medium text-gray-500">Example:</strong> "{data.example}"
                  </p>
                )}

                <ListSection title="Synonyms" items={data.synonyms} />
                <ListSection title="Antonyms" items={data.antonyms} />
              </div>
            </div>
          )}
          
          {/* Initial state message */}
          {!data && !error && !isLoading && (
            <div className="text-center py-8 text-gray-500">
                <p className="text-xl font-medium mb-2">Ready to search!</p>
                <p>Enter a word above to see its definition, pronunciation, and more.</p>
            </div>
          )}
        </section>
        
      </div>
      
      {/* Footer is centered and uses responsive text size */}
      <footer className="mt-8 mb-4 text-center text-gray-500 text-xs sm:text-sm">
        <small>
          Coded with <span className="text-red-500">♥</span> and is open-sourced on{' '}
          <a href="https://github.com/your-repo" className="text-indigo-500 hover:text-indigo-700 underline transition">
            GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}
