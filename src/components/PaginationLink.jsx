import '../varriables.css'

export default function PaginationLink({href = null, children, active = false}){
    return (
        <>
            <button className={active 
                ? " rounded-s flex w-10 h-8 items-center justify-center mx-1 bg-[#F6F6F6] inter" 
                : " rounded-s flex w-10 h-8 items-center justify-center mx-1"}>
                {children}
            </button>
        </>
    )
}