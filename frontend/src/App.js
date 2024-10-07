import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function App() {
    const [topic, setTopic] = useState('');
    const [format, setFormat] = useState('pdf');
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchResources = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:5000/search', {
                params: { topic, format }
            });
            setResources(response.data);
        } catch (error) {
            setError('Error fetching resources');
            console.error('Error fetching resources', error);
        } finally {
            setLoading(false);
        }
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="App">


            <h1>SECOND TEACHER</h1>
            <input
                type="text"
                placeholder="Enter topic..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
                <option value="pdf">PDF</option>
                <option value="video">YouTube Video</option>
                <option value="website">Website</option>
                <option value="cheatsheet">Cheatsheet</option>
            </select>
            <button onClick={searchResources}>
                {loading ? 'Searching...' : 'Search'}
            </button>

            {error && <p className="error">{error}</p>}

            <div className="resource-list">
                {resources.length > 0 ? (
                    <div className="cards">
                        {resources.map((resource, index) => (
                            <div key={index} className="card">
                                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                    {resource.title}
                                </a>
                                <p>{resource.snippet}</p>
                            </div>
                        ))}
                                        <button className="button" onClick={goBack}>Back</button>

                    </div>
                ) : (
                    !loading && <p className="no-results">SummerHacks Hackathon</p>
                )}
            </div>
        </div>
    );
}

export default App;
