interface poops{
    title : string;
}

const TitleSection = ({title}: poops) => {
    return (
        <h2 className=' text-4xl font-bold flex items-center'>
            {title}
            <span className=' hidden md:inline-flex md:w-60 lgl:w-72 h-[.52px] bg-bodyColor ml-6'></span>
        </h2>
    );
};

export default TitleSection;