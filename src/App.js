import './App.css';
import Button from './components/Button';

function App() {
  return (
    <section className="App h-screen w-full flex justify-center items-center bg-purple-500">
      <div className="w-full max-w-md bg-white-800">
        <div
          className="rounded-t-xl bg-white px-6 py-6 md:p-6 text-lg md:text-xl leading-8
Md:leading-8 font-semibold"
        >
          <p className="text-purple-900 text-xl md:text-xl font-black text-center pb-2">
            Tailwind CSS
          </p>
<div><Button/></div>
          <p
            className="text-indigo-700 text-base md:text-base italic
font-normal text-center"
          >
            "A utility-first CSS framework for rapid UI development. "
          </p>
        </div>

        <div
          className="flex items-center space-x-4 p-6 md:px-6 md:py-6
bg-gradient-to-tr from-purple-700 to-indigo-700 rounded-b-xl
leading-6 font-semibold text-white"
        >
          <div
            className="flex-none w-14 h-14 bg-white rounded-full shadow-2xl
items-center justify-center"
          >
            <svg
              height="54"
              preserveAspectRatio="xMidYMid"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 153.6"
            >
              <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                <stop offset="0" stop-color="#2298bd" />
                <stop offset="1" stop-color="#0ed7b5" />
              </linearGradient>
              <path
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.
733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.
318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.
067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.
434-16.697-9.499-24.401-17.318C174.249 14.743 159.
725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.
067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.
401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0
55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.
2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543
95.725 76.8 64 76.8z"
                fill="url(#a)"
              />
            </svg>
          </div>

          <div className="flex-auto text-base md:text-base font-thin">
            Created By
            <br />
            <span className="text-xl md:text-xl text-purple-200 font-black">Adam Wathan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;