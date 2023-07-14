import '@src/styles/globals.css';

export const metadata = {
    title: "2023-web"
}

const RootLayout = ({children}) =>{
    return (
        <html>
            <body>
                <div className = "main">
                </div>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}
export default RootLayout