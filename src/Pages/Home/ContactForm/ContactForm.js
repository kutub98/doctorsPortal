import React from 'react';
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className="ContactBox ">
            <form className="flex flex-col py-6  lg:w-1/2 xl:w-1/2 md:w-1/2 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine my-4 mx-auto ng-valid px-8">
			<label className="block">
				<span className="mb-1 text-white font-bold">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md p-3 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-green-600 bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1 text-white font-bold">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block w-full p-3  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-green-600 bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1 text-white font-bold">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-600 bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-600 text-gray-50 focus:ring-green-600 hover:ring-green-600">Submit</button>
		</form>
        </div>
    );
};

export default ContactForm;