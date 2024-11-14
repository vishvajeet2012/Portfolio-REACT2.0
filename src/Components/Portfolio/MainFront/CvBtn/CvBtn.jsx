import React from "react";
import ResumePdf from "../../../resume-pdf/resume.pdf";

function CvBtn() {
  return (
    <>
      <a href={ResumePdf} download={ResumePdf}>
        <button className="btn_ani border-1 animate__animated animate__infinite animate__slow animate__delay-2s animate__jello border-green-400 md:text-xs md:px-2 lg:px-3 lg:text-lg px-4 py-3 rounded-3xl text-green-400 hover:text-black">
          DOWNLOAD CV
          <span>
            <i class="fa-solid fa-download ms-2"></i>
          </span>
        </button>
      </a>
    </>
  );
}

export default CvBtn;
