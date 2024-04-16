'use client'
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

const NavBar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <nav className="bg-light-green flex justify-between items-center px-10 py-5">
                <div className="flex items-center space-x-4">
                    <a href="/" className="text-xl font-bold">
                        P
                    </a>
                </div>

                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            Work
                        </Link>
                    </li>
                    <li>
                        <button onClick={openModal}>
                            Contact
                        </button>
                    </li>
                    {/* Add or remove list items as necessary */}
                </ul>

                {/* Resume button */}
                <a href="/resume" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
                    Resume
                </a>
            </nav>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                {/* Contact form or information goes here */}
            </Modal>
        </>
    );
}

export default NavBar;
