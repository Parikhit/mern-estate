import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase.js';

const Profile = () => {
    const fileRef = useRef(null);
    const { currentUser } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(null);
    const [formData, setFormData] = useState({});

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name; //creating unique filename

        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData({ ...formData, avatar: downloadURL });
                });
            }
        );
    };

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-8'>Profile</h1>

            <form className='flex flex-col gap-4'>
                <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type='file'
                    ref={fileRef}
                    hidden
                    accept='image/*'
                />
                <img
                    onClick={() => fileRef.current.click()}
                    src={formData.avatar || currentUser.avatar}
                    alt='profile-img'
                    className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
                />

                <p className='text-sm self-center'>
                    {fileUploadError ? (
                        <span className='text-red-700'>
                            Error Uploading Image! (image must be less than 2mb)
                        </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                        <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                        <span className='text-green-700'>Image Successfully Uploaded!</span>
                    ) : (
                        ''
                    )}
                </p>

                <input
                    type='text'
                    placeholder='Username'
                    className='border p-3 rounded-lg'
                    id='username'
                />
                <input
                    type='email'
                    placeholder='Email'
                    className='border p-3 rounded-lg'
                    id='email'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='border p-3 rounded-lg'
                    id='password'
                />

                <button className='bg-black text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-60'>
                    Update
                </button>
            </form>

            <div className='flex justify-between mt-5'>
                <span className='text-red-700 text-lg cursor-pointer'>Delete Account</span>
                <span className='text-red-700 text-lg cursor-pointer'>Sign Out</span>
            </div>
        </div>
    );
};

export default Profile;
