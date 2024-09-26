import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

function App() {
    const [topic, setTopic] = useState('');
    const [format, setFormat] = useState('pdf');
    const [resources, setResources] = useState([]);

    const searchResources = async () => {
        try {
            const response = await axios.get('http://localhost:5000/search', {
                params: { topic, format }
            });
            setResources(response.data);
        } catch (error) {
            console.error('Error fetching resources', error);
        }
    };

    return (
        <div className="App">
            <h1>Resource Library</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                />
                <select value={format} onChange={(e) => setFormat(e.target.value)}>
                    <option value="pdf">PDF</option>
                    <option value="video">YouTube Video</option>
                    <option value="website">Website</option>
                </select>
                <button onClick={searchResources}>Search</button>
            </div>

            {resources.length > 0 && (
                <div className="results-container">
                    <ul>
                        {resources.map((resource, index) => (
                            <li key={index} className="resource-item">
                                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                    {resource.title}
                                </a>
                                <p>{resource.snippet}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
