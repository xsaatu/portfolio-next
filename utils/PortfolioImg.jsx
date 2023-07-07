export default function PortfolioImage() {
    const Images = [
        {title:"Landing Page",location:"/img/portfolio/portfolio.png", description:"Ini adalah web pertama saya." },
        {title:"To-Do List",location:"/img/portfolio/To-do-List.png", description:"Membuat To-Do List dengan JavaScript." },
        {title:"Tugas Project",location:"/img/portfolio/projectSekolah.PNG", description:"Ini adalah project tugas sekolah saya membuat web untuk sebuah perusahaan dengan menggunakan framework Bootstrap" },
    ]
    
    return (
        <ul className="">
            {
                Images.map((image, i) => (
                    <li key={i} >
                        <div class="mb-12 p-4">
                            <div class="rounded-md shadow-md overflow-hidden">
                                <img src={`${image.location}`} alt={`${image.title}`} width="w-80" />
                            </div>
                            <h3 class="font-semibold text-xl text-dark mt-5">{`${image.title}`}</h3>
                            <p class="font-medium text-base ">{`${image.description}`}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )

}


