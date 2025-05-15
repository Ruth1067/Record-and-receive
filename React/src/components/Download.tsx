// // // // import { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const FileDownloader = () => {
// // // //   const [files, setFiles] = useState<string[]>([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchFiles = async () => {
// // // //       try {
// // // //         // הנח שיש לך API שמחזיר את רשימת הקבצים מ-S3
// // // //         const response = await axios.get(`https://localhost:7183/api/upload/download-file${fileName}`); // שנה לכתובת ה-API שלך
// // // //         setFiles(response.data); // הנח שהנתונים הם מערך של שמות קבצים
// // // //       } catch (error) {
// // // //         console.error('שגיאה בהבאת הקבצים:', error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchFiles();
// // // //   }, []);

// // // //   const handleDownload = (fileName: string) => {
// // // //     const url = `https://adminpermission .s3.amazonaws.com/${fileName}`; // שנה לכתובת ה-S3 שלך
// // // //     window.open(url, '_blank');
// // // //   };

// // // //   if (loading) {
// // // //     return <div>טוען קבצים...</div>;
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <h2>הורדת קבצים</h2>
// // // //       <ul>
// // // //         {files.map((file) => (
// // // //           <li key={file}>
// // // //             <button onClick={() => handleDownload(file)}>הורד {file}</button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FileDownloader;
// // // import { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const FileDownloader = () => {
// // //   const [files, setFiles] = useState<string[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [fileName, setFileName] = useState<string>(''); // הוספת משתנה fileName

// // //   useEffect(() => {
// // //     const fetchFiles = async () => {
// // //       try {
// // //         // הנח שיש לך API שמחזיר את רשימת הקבצים מ-S3
// // //         const response = await axios.get(`https://localhost:7183/api/upload/download-file/${fileName}`); // השתמש ב-API שלך
// // //         setFiles(response.data); // הנח שהנתונים הם מערך של שמות קבצים
// // //       } catch (error) {
// // //         console.error('שגיאה בהבאת הקבצים:', error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     // אם fileName לא ריק, קרא ל-fetchFiles
// // //     if (fileName) {
// // //       fetchFiles();
// // //     }
// // //   }, [fileName]); // הוספת fileName כתלותs

// // //   const handleDownload = (file: string) => {
// // //     const url = `https://adminpermission.s3.amazonaws.com/${file}`; // שנה לכתובת ה-S3 שלך
// // //     window.open(url, '_blank');
// // //   };

// // //   if (loading) {
// // //     return <div>טוען קבצים...</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       <h2>הורדת קבצים</h2>
// // //       <ul>
// // //         {files.map((file) => (
// // //           <li key={file}>
// // //             <button onClick={() => handleDownload(file)}>הורד {file}</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default FileDownloader;
// // import { useEffect, useState } from 'react';
// // import AWS from 'aws-sdk';

// // const FileDisplay = () => {
// //     const [fileUrl, setFileUrl] = useState('');

// //     useEffect(() => {
// //         // Configure AWS SDK
// //         AWS.config.update({
// //             accessKeyId: 'YOUR_ACCESS_KEY_ID',
// //             secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
// //             region: 'YOUR_REGION',
// //         });

// //         const s3 = new AWS.S3();
// //         const params = {
// //             Bucket: 'YOUR_BUCKET_NAME',
// //             Key: 'YOUR_FILE_KEY', // e.g., 'path/to/your/file.txt'
// //         };

// //         // Fetch the file from S3
// //         s3.getObject(params, (err, data) => {
// //             if (err) {
// //                 console.error('Error fetching file:', err);
// //             } else {
// //                 // Create a URL for the file
// //                 const url = URL.createObjectURL(new Blob([data.Body]));
// //                 setFileUrl(url);
// //             }
// //         });
// //     }, []);

// //     return (
// //         <div>
// //             {fileUrl ? (
// //                 <iframe src={fileUrl} width="600" height="400" title="File Display" />
// //             ) : (
// //                 <p>Loading file...</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default FileDisplay;
// // import { useEffect, useState } from 'react';
// // import ApiService from '../ApiService'; // Adjust the import based on your file structure

// // interface FileDisplayProps {
// //     fileName: string;
// // }

// // const FileDisplay: React.FC<FileDisplayProps> = ({ fileName }) => {
// //     const [fileUrl, setFileUrl] = useState<string>('');

// //     useEffect(() => {
// //         const fetchFile = async () => {
// //             try {
// //                 const url = await ApiService.downloadFile(fileName);
// //                 setFileUrl(url);
// //             } catch (error) {
// //                 console.error('Error fetching file:', error);
// //             }
// //         };

// //         fetchFile();
// //     }, [fileName]);

// //     return (
// //         <div>
// //             {fileUrl ? (
// //                 <iframe src={fileUrl} width="600" height="400" title="File Display" />
// //             ) : (
// //                 <p>Loading file...</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default FileDisplay;
// import {useState } from 'react';
// import ApiService from '../ApiService'; // Adjust the import based on your file structure

// const Download = () => {
//     const [fileName, setFileName] = useState<string>('');
//     const [fileUrl, setFileUrl] = useState<string>('');

//     const fetchFile = async () => {
//         if (!fileName) {
//             console.error('File name is required');
//             return;
//         }

//         try {
//             const url = await ApiService.downloadFile(fileName);
//             setFileUrl(url);
//         } catch (error) {
//             console.error('Error fetching file:', error);
//         }
//     };

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setFileName(event.target.value);
//     };

//     // return (
//     //     <div>
//     //         <input
//     //             type="text"
//     //             value={fileName}
//     //             onChange={handleInputChange}
//     //             placeholder="Enter file name"
//     //         />
//     //         <button onClick={fetchFile}>Download File</button>

//     //         {fileUrl ? (
//     //             <iframe src={fileUrl} width="600" height="400" title="File Display" />
//     //         ) : (
//     //             <p>Loading file...</p>
//     //         )}
//     //     </div>
//     // );
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={fileName}
//                 onChange={handleInputChange}
//                 placeholder="Enter file name"
//             />
//             <button onClick={fetchFile}>Download File</button>
//             {fileUrl ? (
//                 <iframe src={fileUrl} width="600" height="400" title="File Display" />
//             ) : (
//                 <p>Loading file...</p>
//             )}
//         </div>
//     );
    
// };

// export default Download;
// import { useEffect, useState } from 'react';

// const FileList = () => {
//     const [files, setFiles] = useState([]);

//     useEffect(() => {
//         const fetchFiles = async () => {
//             const response = await fetch('/api/files');
//             const data = await response.json();
//             setFiles(data);
//         };

//         fetchFiles();
//     }, []);

//     return (
//         <div>
//             {files.map((file, index) => (
//                 <img key={index} src={`https://adminpermission.s3.amazonaws.com/${file}`} alt={file} />
//             ))}
//         </div>
//     );
// };

// export default FileList;
