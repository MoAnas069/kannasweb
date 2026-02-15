import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../layout/Footer';
import CursorGlow from '../layout/CursorGlow';
import SmoothScroll from '../layout/SmoothScroll';

const Layout = () => {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-mist text-graphite font-sans selection:bg-steel selection:text-white">
                <CursorGlow />
                <Navbar />
                <main className="relative z-10 w-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default Layout;
