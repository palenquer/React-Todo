import "tailwindcss/tailwind.css";
import ActiveLink from '../components/ActiveLink'

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans h-screen w-screen">
      <header className="flex justify-center mt-3">
        <h1 className="text-3xl">#todo</h1>
      </header>
      <main className="flex justify-center w-screen">
      <ul className="flex justify-evenly mt-9 border-b-2 w-full md:max-w-2xl">
      <li className="w-20 flex justify-center">
          <ActiveLink href="/">
            <a>All</a>
          </ActiveLink>
        </li>
        <li className="w-20 flex justify-center">
          <ActiveLink href="/active">
            <a>Active</a>
          </ActiveLink>
        </li>
        <li className="w-20 flex justify-center">
          <ActiveLink href="/completed">
            <a>Completed</a>
          </ActiveLink>
        </li>
      </ul>
      </main>
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
