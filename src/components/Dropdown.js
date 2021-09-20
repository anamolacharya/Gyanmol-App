import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dropdown() {
  return (
    <div class="dropdown">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Exams
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a class="dropdown-item" href="#">
            AWS-CCP
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            AZ-900
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            NCLEX
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            SAT
          </a>
        </li>
      </ul>
    </div>
  );
}
