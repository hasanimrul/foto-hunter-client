import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        const password = form.password.value;

        console.log(name, email, photourl, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                handleUpdateUserProfile(name, photourl);
            })
            .catch(err => console.error(err))

    }

    const handleUpdateUserProfile = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="photourl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-success">Register</button>
                            </div>
                            <p className='text-gray-500 dark:text-gray-400'>Already have an account? <Link className='text-blue-500' to='/login'>Log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;