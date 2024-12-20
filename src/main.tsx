
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

