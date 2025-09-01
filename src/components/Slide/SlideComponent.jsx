
// import SlideComponent from './SlideComponent';
const SlideComponent = ({data, isActive}) => {
    
    return (
        <>
            <div className={`slide ${isActive ? 'active' : ''}`}>
                {/**Background Image */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    
                    //for performance improvement: lazy load images that are not active
                    loading={isActive ? 'eager' : 'lazy'}
                    onError={() => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x900/ff0000/FFFFFF?text=Image+Error'; }}
                />
                <div className='absolute inset-0 bg-black/50'> </div>

                {/**Content Overlay */}
                <div className='absolute inset-0 flex flex-col items-center justify-center  text-center text-white p-6 pointer-events-none'>
                    <h1 className='slide-content slide-content-title text-4xl md:text-6xl lg:text-7xl text-gray-200 drop-shadow-md'> {data.title}</h1>
                    <p className='slide-content slide-content-desc mt-4 max-w-xl  text-lg md:text-xl text-gray-200 drop-shadow-md'>{data.description}</p>
                    
                    <a href='#'
                             className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl"
>
                        {data.cta}
                    </a>

                </div>

            </div>
        </>
    );
}
export default SlideComponent;