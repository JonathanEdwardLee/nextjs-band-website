"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Modal from "react-modal";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDonate,
  FaBeer,
  FaTimes,
} from "react-icons/fa"; // Import FaBeer
import { SiCashapp } from "react-icons/si"; // Import Cash App icon

const ExploreSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Set the app element for accessibility after the component mounts
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    }
  }, []);

  const navigationItems = [
    "/",
    "/music",
    "/merch",
    "/videos",
    "/shows",
    "/contact",
    "/games",
    "/guestbook",
  ]; // Add all your actual page paths

  const goToNextPage = () => {
    const currentIndex = navigationItems.indexOf(pathname ?? "");
    const nextIndex = (currentIndex + 1) % navigationItems.length;
    router.push(navigationItems[nextIndex]);
  };
  const goToPreviousPage = () => {
    const currentIndex = navigationItems.indexOf(pathname ?? "");
    const previousIndex =
      (currentIndex - 1 + navigationItems.length) % navigationItems.length;
    router.push(navigationItems[previousIndex]);
  };

  const getNextPageName = () => {
    const currentIndex = navigationItems.indexOf(pathname ?? "");
    const nextIndex = (currentIndex + 1) % navigationItems.length;
    return (
      navigationItems[nextIndex].slice(1).charAt(0).toUpperCase() +
      navigationItems[nextIndex].slice(2)
    );
  };

  const getPreviousPageName = () => {
    const currentIndex = navigationItems.indexOf(pathname ?? "");
    const previousIndex =
      (currentIndex - 1 + navigationItems.length) % navigationItems.length;
    return (
      navigationItems[previousIndex].slice(1).charAt(0).toUpperCase() +
      navigationItems[previousIndex].slice(2)
    );
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex justify-center p-4 bg-primary text-secondary space-x-2">
      <button
        className="btn-custom"
        onClick={goToPreviousPage}
        aria-label={`Go to ${getPreviousPageName()}`}
      >
        <FaArrowLeft /> {getPreviousPageName()}
      </button>
      <button
        className="btn-custom flex flex-col items-center justify-center"
        onClick={openModal}
        aria-label="Buy us a beer"
      >
        <FaDonate className="mb-1" size={20} />
        Buy us a Beer!
      </button>
      <button
        className="btn-custom"
        onClick={goToNextPage}
        aria-label={`Go to ${getNextPageName()}`}
      >
        <FaArrowRight /> {getNextPageName()}
      </button>
      {/* Donation Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Donation Options"
        className="modal relative"
        overlayClassName="overlay"
      >
        <h2 className="text-xl font-bold mb-4">
          Thank you for contributing to our Tip Jar!
        </h2>
        <p className="mb-4">
          We are all hard working Dads who are trying to do what we love. We are
          doing everything independently (the website, the recordings, the
          merch, the fungeon shows, etc) and we appreciate all the help we can
          get. Love you all!
        </p>
        <a
          href="https://www.buymeacoffee.com/leadershipclass"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-custom flex items-center justify-center mb-4 w-64 mx-auto !text-black"
        >
          <FaBeer className="mr-2" />
          Buy us a Beer!
        </a>
        <p className="mb-4">
          Or you can donate to our house venue, The Fungeon, and support us and
          all local artists who come and perform!
        </p>
        <a
          href="https://cash.app/$fungeon417"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-custom flex items-center justify-center mb-4 w-64 mx-auto !text-black"
        >
          <SiCashapp className="mr-2" />
          Donate via Cash App
        </a>
        <div className="flex justify-center mt-4">
          <FaTimes
            onClick={closeModal}
            className="text-custom-gold hover:text-gold-dark cursor-pointer"
            size={24}
            aria-label="Close modal"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ExploreSection;
