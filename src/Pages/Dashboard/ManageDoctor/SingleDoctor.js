// import React, { useState } from 'react';
// import ConfirmationModal from '../../Shared/ActionModal/ConfirmationModal';

// const SingleDoctor = ({doctor}) => {
//         const [deletingDoctorBtn, setDeletingDoctorBtn] = useState(null)
//     const {doctorsImage, doctorsEmail, doctorsName, doctorsSpecialty} = doctor
//     return (
       
//             <tr>
//         <th>
         
//         </th>
//         <td>
//             <div className="avatar">
//               <div className="mask mask-squircle w-12 h-12">
//                 <img src={doctorsImage} alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//         </td>
//         <td>
//           <div className="flex items-center space-x-3">
//             <div>
//               <div className="font-bold">{doctorsName}</div>
//             </div>
//           </div>
//         </td>
        
//         <td>{doctorsSpecialty}</td>
//         <td>
//           <p className="">{doctorsEmail}</p>
//         </td>
//         <td>
           
//         <label onClick={()=> setDeletingDoctorBtn(doctor)} htmlFor="my-modal" className="btn  bg-red-600 text-white  btn-xs">Delete</label>
       
//         </td>
//         {
//         deletingDoctorBtn &&  <ConfirmationModal></ConfirmationModal>

//     }
//       </tr>

        
    
       
//     );
   
// };

// export default SingleDoctor;