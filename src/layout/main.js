import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../pages/Header/header';
import Footer from '../pages/Footer/footer';
import Preloader from '../components/preloader';  // Import Preloader
import './main.scss';

import mainRoutes from '../routes/main';

function MainLayout() {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <Suspense fallback={<Preloader />}>  {/* Use Preloader as fallback */}
                    <Routes>
                        {mainRoutes.map((route, index) => (
                            <Route
                                key={route.path || index}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
