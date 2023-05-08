export default function Footer() {
    return (
      <footer className="h-64 bg-red pt-40 relative">
       
        {/* <h1 className="text-7xl font-bold font-opensans absolute left-20 top-10">
            Chue Wathan <br></br> Kyaw{" "}
          </h1> */}
        <div className=" hover:bg-sky-700">
          <div className="h-0.5 w-full bg-white  hover:bg-sky-700"></div>
          <div className="h-40 w-40 rounded-full bg-red border-white border-4 absolute right-60 top-20  hover:border-sky-700"></div>
        </div>
      </footer>
    );
}