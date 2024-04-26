'use client'
import Link from "next/link";
import { useState } from "react";
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useCallback } from 'react';

const NavBar = () => {
    const copyEmail = useCallback(() => {
        navigator.clipboard.writeText("prabhathc@icloud.com")
            .then(() => {
                notification.open({
                    message: 'Email Copied',
                    description: 'My email has been copied to your clipboard!',
                    placement: 'bottomRight',
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                    duration: 2.5 // seconds
                });
            })
            .catch(err => {
                console.error('Failed to copy email:', err);
                notification.open({
                    message: 'Copy Failed',
                    description: 'Failed to copy the email address. Please try again.',
                    placement: 'bottomRight',
                    duration: 2.5
                });
            });
    }, []);

    return (
        <>
            <nav className="bg-light-green text-white justify-between flex items-center px-10 py-5">
                <div className="flex items-center justify-start space-x-4">
                    <a href="/" className="text-xl font-bold">
                        P
                    </a>
                </div>

                <div className="flex justify-end">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link href="/work">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <button onClick={copyEmail}>
                                Contact
                            </button>
                        </li>
                        <li>
                            <Link href="/resume2024.pdf" target="_blank" rel="noopener noreferrer">
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
