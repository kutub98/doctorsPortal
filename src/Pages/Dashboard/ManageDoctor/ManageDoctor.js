import { useQuery } from "@tanstack/react-query";
import { da } from "date-fns/locale";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ActionModal/ConfirmationModal";

const ManageDoctor = () => {
  const [deletingDoctorBtn, setDeletingDoctorBtn] = useState(null);

  const closeModal = () => {
    setDeletingDoctorBtn(null);
  };

  const { data: doctors, isLoading, refetch,} = useQuery({
    queryKey: ["newDoctor"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/addedDoctor", {
          headers: {
            authorization: ` bearer ${localStorage.getItem("AccessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteSuccess = (doctor) => {
    console.log(doctor?._id);

    fetch(`http://localhost:5000/deleted/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: ` bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.doctorsName} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr>
                <th></th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={doctor.doctorsImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{doctor.doctorsName}</div>
                    </div>
                  </div>
                </td>

                <td>{doctor.doctorsSpecialty}</td>
                <td>
                  <p className="">{doctor.doctorsEmail}</p>
                </td>
                <td>
                  <label
                    onClick={() => setDeletingDoctorBtn(doctor)}
                    htmlFor="ConfirmationBtn"
                    className="btn  bg-red-600 text-white  btn-xs"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctorBtn && (
        <ConfirmationModal
          title={"Are you sure want to delete ?"}
          message={`If you press the yes the Doctor ${deletingDoctorBtn.doctorsName}  will remove and it can not be undone`}
          successAction={handleDeleteSuccess}
          closed={closeModal}
          modalData={deletingDoctorBtn}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
