import { ShoppingCart, Heart } from "lucide-react";
const IconWithBadge = ({ itemCount, icon: IconComponent, iconClassName }) => {
    const showBadge = typeof itemCount === 'number' && itemCount >= 0;
    return (
        <>
            <div className="relative inline">
                {/**the icon */}
                <IconComponent className={ iconClassName ||'h-8 w-8 text-gray-300'} />
                

                {/**Notification Badge */}
                { showBadge && (<div className="absolute top-0 right-0 bg-amber-600   text-xs font-bold  flex -translate-y-1/2 translate-x-1/2 transform   w-5 h-5 items-center justify-center rounded-[100%] text-white">
                    {itemCount > 99 ? '99+' : itemCount}

                </div>)}
            </div>
        </>
    );
};
export default IconWithBadge;