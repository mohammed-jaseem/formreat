// import React, { useState } from 'react';

// function UserForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     place: '',
//     email: '',
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents form from reloading the page
//     setSubmittedData(formData); // Stores the submitted data
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">User Information Form</h1>
//       <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-semibold mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Enter your name"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="place" className="block font-semibold mb-1">
//             Place
//           </label>
//           <input
//             type="text"
//             id="place"
//             name="place"
//             value={formData.place}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Enter your place"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block font-semibold mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       {submittedData && (
//         <div className="mt-6 bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-bold mb-2">Submitted Information</h2>
//           <p>
//             <strong>Name:</strong> {submittedData.name}
//           </p>
//           <p>
//             <strong>Place:</strong> {submittedData.place}
//           </p>
//           <p>
//             <strong>Email:</strong> {submittedData.email}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserForm;
