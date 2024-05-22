import "../src/app/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "../store";
import DefaultLayout from "../layout/default";
import { Radio_Canada } from 'next/font/google';

const poppins = Radio_Canada({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <div className={poppins.className}>
            <SessionProvider session={session}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <DefaultLayout>
                            <Component {...pageProps} />
                        </DefaultLayout>
                    </PersistGate>
                </Provider>
            </SessionProvider>
        </div>
    );
}
