import React from "react";
import { Link } from "react-router-dom";

function UrlBtn({ urlValue }) {
  const urlLink = [
    {
      url: urlValue.url,
      class: "fa-solid fa-arrow-right-long transform ",
      classs: "-rotate-45 hover:rotate-0"
    },
    {
      url: urlValue.gitUrl,
      class: "fa-brands fa-github"
    }
  ];

  return (
    <>
      {urlLink.map((value) => (
        <Link to={value.url} target="blanck">
          <button
            className={`h-12 w-12 ${value.classs}  rounded-full bg-neutral-600 text-white text-lx flex justify-center items-center`}
          >
            <i class={value.class}></i>
          </button>
        </Link>
      ))}
    </>
  );
}

export default UrlBtn;
