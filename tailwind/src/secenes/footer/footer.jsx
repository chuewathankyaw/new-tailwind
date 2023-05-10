export default function Footer() {
    return (
      <footer className="h-full bg-black pt-40 relative">
        {/* <h1 className="text-7xl font-bold font-opensans absolute left-20 top-10">
            Chue Wathan <br></br> Kyaw{" "}
          </h1> */}
        
          <div className=" hover:bg-sky-700">
            <div className="h-0.5 w-full bg-white  "></div>
            <div className="h-40 w-40 rounded-full bg-black border-white border-4 absolute right-64 top-20  "></div>
            <div>
              <h1 className="text-white absolute right-72 top-36 text-xl">
                About us
              </h1>
            </div>
          </div>
        
      </footer>
    );
}