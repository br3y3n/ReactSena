const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-xl">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black m-2 p-1 font-medium text-sm">
                    {" "}
                    Dispositivos{" "}
                </span>
                <img className="w-full h-full object-cover rounded-lg"
                    src="https://btechnology.com.co/wp-content/uploads/2023/09/3.Camon_20_Pro_glacial.jpg"
                    alt=""
                    srcSet=""
                />
                <div className=" bg-mint absolute top-0 right-0 pb-2 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 text-2xl">
                    +
                </div>
            </figure>
            <p className=" bg-teal flex justify-between rounded ">
                <span className="text-lg font-medium text-grey">Celular</span>
                <span className="text-lg font-medium text-grey">$123</span>
            </p>

        </div>
    );
};
export default Card