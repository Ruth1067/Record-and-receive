import { useEffect, useState } from 'react';

const About = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('https://localhost:7183/api/upload');
                if (!response.ok) {
                    console.error('HTTP error', response.status);
                    return;
                }
                const data = await response.json();
                setFiles(data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, []);

    // אם יש קבצים, נציג את הראשון
    const firstFile = files.length > 0 ? files[0] : null;

    return (
        <div>
            {firstFile && (
                <img
                    src={`https://adminpermission.s3.amazonaws.com/${firstFile}`}
                    alt={firstFile}
                    style={{ width: '50vw', height: 'auto' }} // גודל חצי מסך
                />
            )}
        </div>
    );
};

export default About;