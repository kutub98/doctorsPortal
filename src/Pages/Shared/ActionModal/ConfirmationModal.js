import React from "react";

const ConfirmationModal = ({ title, message, closed, successAction,modalData }) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="ConfirmationBtn" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label onClick={()=>successAction(modalData)} htmlFor="ConfirmationBtn" className="btn bg-green-600 text-white">
              Yes
            </label>
            <label onClick={closed} htmlFor="ConfirmationBtn" className="btn bg-red-600 text-white">
            No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
