import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  console.log(users);
  const handleForMakingAdmin =(id)=>{
        fetch(`http://localhost:5000/Alluser/Seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `admin ${localStorage.getItem('AccessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount > 0){
            toast.success("Added as a Admin")
            refetch()
           }else{
            toast.error('Sorry You are not authorized')
           }
        })
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-2">All Users </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map( (user, i) => <tr key={user._id}>
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{ user?.role !=='Admin' && <button onClick={()=> handleForMakingAdmin(user._id)}>Make Admin</button>}</td>
                    <td><button>Delete Usr</button></td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
