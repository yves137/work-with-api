
export function Card({user:{first_name,last_name,avatar,employment:{title}}}){
    return (
        <div className="w-[400px] h-[420px] rounded-lg bg-white cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden  w-full h-full px-4 py-5">
                    <div className="h-3/4">
                        <img src={avatar} alt="image1" className="w-full h-full object-contain"/>
                    </div>
                    <div className="flex flex-col space-y-1 h-1/4 pt-5 pl-5">
                        <span className="font-bold">{first_name+last_name}</span>
                        <span className="font-light">{title}</span>
                    </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-transparent overflow-hidden">
                    <div className="flex flex-col space-y-1 h-1/4 pt-5 pl-5">
                        <span className="font-bold text-3xl ">More Information here</span>
                    </div>
                </div>
            </div>

        </div>
    )
}