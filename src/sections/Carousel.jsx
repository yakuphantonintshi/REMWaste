import React, { useState } from "react";
import Modal from "./Modal";

function Carousel() {
  const [modalOpenIndex, setModalOpenIndex] = useState(null);
  const [selectedSkips, setSelectedSkips] = useState([]);

  const openModal = (index) => {
    setModalOpenIndex(index);
  };

  const closeModal = () => {
    setModalOpenIndex(null);
  };

  const handleSelect = (index) => {
    if (!selectedSkips.includes(index)) {
      setSelectedSkips((prev) => [...prev, index]);
    }
  };

  const isSelected = (index) => selectedSkips.includes(index);
  const skipDescriptions = [
    [
      "Hire Period : 14 days",
      "Transport Cost : £211",
      "Price : £333.6 (VAT Included)",
      "Allowed on the road",
      "Allows heavy waste",
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £241",
      "Price : £333.6 (VAT Included)",
      "Allowed on the road",
      "Allows heavy waste",
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £264",
      "Price : 366 (VAT Included)",
      "Allowed on the road",
      "Allows heavy waste",
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £295",
      "Price : £450 (VAT Included)",
      "Allowed on the road",
      "Allows heavy waste",
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £356",
      "Price : £480 (VAT Included)",
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        NOT allowed on the road
      </>,
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        Heavy waste NOT allowed
      </>,
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £390",
      "Price : £526.8 (VAT Included)",
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        NOT allowed on the road
      </>,
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        Heavy waste NOT allowed
      </>,
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £434",
      "Price : £564 (VAT Included)",
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        NOT allowed on the road
      </>,
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        Heavy waste NOT allowed
      </>,
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £510",
      "Price : £595.5 (VAT Included)",
     <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        NOT allowed on the road
      </>,
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        Heavy waste NOT allowed
      </>,
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £248",
      "Price : £1190.4 (VAT Included)",
     <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        NOT allowed on the road
      </>,
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        Heavy waste NOT allowed
      </>,
    ],
    [
      "Hire Period : 14 days",
      "Transport Cost : £248",
      "Price : £1190.4 (VAT Included)",
 <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        NOT allowed on the road
      </>,
      <>
        <span className="yellow">
          <i className="bi bi-exclamation-triangle"></i>
        </span>{" "}
        Heavy waste NOT allowed
      </>,
    ],
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          className="active"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          className="active"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          className="active"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          className="active"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="7"
          className="active"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="8"
          className="active"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="9"
          className="active"
          aria-label="Slide 10"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/4-yarder-skip-removebg-preview.png"
              className="carousel-img" id="picture1"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">4 YARDS</p>
              <button className="viewmore" onClick={() => openModal(0)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/5-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="5 yards"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">5 YARDS</p>
              <button className="viewmore" onClick={() => openModal(1)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/6-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">6 YARDS</p>
              <button className="viewmore" onClick={() => openModal(2)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/8-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">8 YARDS</p>
              <button className="viewmore" onClick={() => openModal(3)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/10-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">10 YARDS</p>
              <button className="viewmore" onClick={() => openModal(4)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/12-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">12 YARDS</p>
              <button className="viewmore" onClick={() => openModal(5)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/14-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">14 YARDS</p>
              <button className="viewmore" onClick={() => openModal(6)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/16-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">16 YARDS</p>
              <button className="viewmore" onClick={() => openModal(7)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/20-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">20 YARDS</p>
              <button className="viewmore" onClick={() => openModal(8)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <div className="image-container">
            <img
              src="https://yakuphantonintshi.github.io/myimages/Images/40-yarder-skip-removebg-preview.png"
              className="carousel-img"
              alt="picture1"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-text">
              <p className="four-yards">40 YARDS</p>
              <button className="viewmore" onClick={() => openModal(9)}>
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpenIndex !== null}
        onClose={closeModal}
        title={
          modalOpenIndex === 0
            ? "4 YARDS"
            : modalOpenIndex === 1
            ? "5 YARDS"
            : modalOpenIndex === 2
            ? "6 YARDS"
            : modalOpenIndex === 3
            ? "8 YARDS"
            : modalOpenIndex === 4
            ? "10 YARDS"
            : modalOpenIndex === 5
            ? "12 YARDS"
            : modalOpenIndex === 6
            ? "14 YARDS"
            : modalOpenIndex === 7
            ? "16 YARDS"
            : modalOpenIndex === 8
            ? "20 YARDS"
            : modalOpenIndex === 9
            ? "40 YARDS"
            : "No Yards"
        }
        isSelected={isSelected(modalOpenIndex)}
        onSelect={() => handleSelect(modalOpenIndex)}
      >
        {Array.isArray(skipDescriptions[modalOpenIndex]) &&
          skipDescriptions[modalOpenIndex].map((desc, i) => (
            <p className="modal_par" key={i}>
              • {desc}
            </p>
          ))}
      </Modal>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
