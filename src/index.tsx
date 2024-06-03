import React from 'react';
import './index.css';
import {App} from './App';
import {SizeProvider} from "./lib/sizeContext";
import { hydrate, render } from "react-dom";
import {LanguageProvider} from "./lib/languageContext";

const rootElement = document.getElementById("root");

if (rootElement!.hasChildNodes()) {
    hydrate(<React.StrictMode>
        <SizeProvider>
            <App />
        </SizeProvider>
    </React.StrictMode>, rootElement);
} else {
    render(<React.StrictMode>
        <SizeProvider>
            <App />
        </SizeProvider>
    </React.StrictMode>, rootElement);
}
