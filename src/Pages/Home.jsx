import HyperLink from "../Components/HyperLink";

export default function Home() {
  const data = {
    name: "Nia",
    from: "Banjarmasin",
  };
  const data2 = ["Makan", "Hitam", "Kelinci"];

  const data3 = [
    {
      name: "Nia",
      from: "Banjarmasin",
    },
    {
      name: "Shaum",
      from: "Jakarta",
    },
    {
      name: "Najimi",
      from: "Banjarmasin",
    },
  ];

  const angka = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl text-cyan-500 text-center font-teko"> Home Page</h1>
      <div className="flex gap-8 justify-center my-6">
      <HyperLink to="/About">
        <p> Go to About</p>
      </HyperLink>
      <HyperLink to="/cuaca">
        <p> Go to Cuaca</p>
      </HyperLink>
      <HyperLink to="/portofolio">
        <p> Go to Portofolio</p>
      </HyperLink>
      </div>
      <div className="text-3xl">
        <h2>
          Nama Saya : <span className="text-red-500">{data.name}</span>
        </h2>
        <h2>
          Saya Dari <span className="text-red-500">{data.from}</span>
        </h2>
      </div>
      <div className="text-3xl">
        <p>Hobi : {data2[0]}</p>
        <p>Warna Kesukaan :{data2[1]}</p>
        <p>Hewan Peliharaan : {data2[2]}</p>
      </div>
      
      <div className="text-3xl bg-green-500">
      {data3.map((bio) => (
        <p key={bio.name} > {bio.name} dari {bio.from}
        </p>
      ))}
    </div>
    
    <div className="text-3xl bg-sky-500">
         {data3.filter((bio)=> bio.from === "Banjarmasin").map((bio) => (
            <p key = {bio.name} > {bio.name} dari {bio.from} </p>
        ))}
    </div>
    <div className="text-3xl bg-red-500">
        {angka.reduce((a,b) => a + b, 0)}
    </div>
    </div>
  );
}
